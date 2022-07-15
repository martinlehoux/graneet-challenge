import { ElasticsearchService } from "@nestjs/elasticsearch";
import { CityDto } from "./city.dto";
import { CityService } from "./city.service";
import { Injectable } from "@nestjs/common";

const INDEX = "city";

@Injectable()
export class ElasticCityProvider implements CityService {
  constructor(private readonly elasticsearch: ElasticsearchService) {}

  async search(query: string, count: number): Promise<CityDto[]> {
    const result = await this.elasticsearch.search<CityDto>({
      index: INDEX,
      query: {
        multi_match: {
          query,
          fields: ["code", "postalCode", "name"],
        },
      },
      from: 0,
      size: count,
    });
    return result.hits.hits.map((hit) => hit._source);
  }

  async index(cities: CityDto[]): Promise<void> {
    const operations = cities.flatMap((city) => [
      { index: { _index: INDEX, _id: city.code } },
      city,
    ]);
    await this.elasticsearch.bulk({
      refresh: true,
      operations,
    });
  }
}
