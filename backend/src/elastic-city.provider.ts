import { ElasticsearchService } from "@nestjs/elasticsearch";
import { CityDto } from "./city.dto";
import { CityService, SearchResult } from "./city.service";
import { Injectable } from "@nestjs/common";

const INDEX = "city";

@Injectable()
export class ElasticCityProvider implements CityService {
  constructor(private readonly elasticsearch: ElasticsearchService) {}

  async search(query: string, count: number): Promise<SearchResult> {
    const result = await this.elasticsearch.search<CityDto>({
      index: INDEX,
      query: {
        dis_max: {
          queries: [
            {
              fuzzy: {
                name: { value: query, max_expansions: 10, fuzziness: "AUTO" },
              },
            },
            { prefix: { postalCode: { value: query } } },
          ],
        },
      },
      from: 0,
      size: count,
    });
    const cities = result.hits.hits.map((hit) => hit._source);
    return {
      metropoleCities: cities.filter((city) => !this.isOverseas(city)),
      overseasCities: cities.filter((city) => this.isOverseas(city)),
    };
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

  private isOverseas(city: CityDto): boolean {
    return city.postalCode.startsWith("97");
  }
}
