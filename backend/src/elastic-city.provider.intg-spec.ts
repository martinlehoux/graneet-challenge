import { ElasticsearchService } from "@nestjs/elasticsearch";
import { ElasticCityProvider } from "./elastic-city.provider";

const INDEX = "city";

describe("ElasticCityProvider", () => {
  const elasticsearchService = new ElasticsearchService({
    node: "http://localhost:9200",
  });
  const cityService = new ElasticCityProvider(elasticsearchService);

  it("should search by city name", async () => {
    const query = "montgeron";

    const result = await cityService.search(query, 100);

    expect(result).toStrictEqual([
      {
        code: "91421",
        postalCode: "91230",
        name: "Montgeron",
      },
    ]);
  });

  it("should search by postal code", async () => {
    const query = "13090";

    const result = await cityService.search(query, 100);

    expect(result).toStrictEqual([
      {
        code: "13001",
        postalCode: "13090",
        name: "Aix-en-Provence",
      },
      {
        code: "13090",
        postalCode: "13100",
        name: "Saint-Antonin-sur-Bayon",
      },
    ]);
  });
});
