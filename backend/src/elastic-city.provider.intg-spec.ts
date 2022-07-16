import { ElasticsearchService } from "@nestjs/elasticsearch";
import { ElasticCityProvider } from "./elastic-city.provider";

const INDEX = "city";

describe("ElasticCityProvider", () => {
  const elasticsearchService = new ElasticsearchService({
    node: process.env.ELASTICSEARCH_HOST,
  });
  const cityService = new ElasticCityProvider(elasticsearchService);

  it("should search by city name", async () => {
    const query = "montgeron";

    const result = await cityService.search(query, 1);

    expect(result).toStrictEqual({
      metropoleCities: [{
        code: "91421",
        postalCode: "91230",
        name: "Montgeron",
      }],
      overseasCities: [],
    });
  });

  it("should search by city name with some fuzziness", async () => {
    const query = "pointe";

    const result = await cityService.search(query, 5);

    expect(result).toStrictEqual({
      metropoleCities: [{
        code: "39432",
        postalCode: "39290",
        name: "Pointre",
      }, {
        code: "61332",
        name: "Pointel",
        postalCode: "61220",
      }, {
        code: "39409",
        name: "Peintre",
        postalCode: "39290",
      }],
      overseasCities: [{
        code: "97121",
        name: "Pointe-Noire",
        postalCode: "97116",
      }, {
        code: "97203",
        name: "Basse-Pointe",
        postalCode: "97218",
      }],
    });
  });

  it("should search by exact postal code", async () => {
    const query = "91230";

    const result = await cityService.search(query, 100);

    expect(result).toStrictEqual({
      metropoleCities: [
        {
          code: "91421",
          postalCode: "91230",
          name: "Montgeron",
        },
      ],
      overseasCities: [],
    });
  });

  it("should search by postal code prefix", async () => {
    const query = "317";

    const result = await cityService.search(query, 3);

    expect(result).toStrictEqual({
      metropoleCities: [
        {
          code: "31056",
          name: "Beauzelle",
          postalCode: "31700",
        },
        {
          code: "31069",
          name: "Blagnac",
          postalCode: "31700",
        },
        {
          code: "31116",
          name: "Castelginest",
          postalCode: "31780",
        },
      ],
      overseasCities: [],
    });
  });
});
