import {
  Body,
  Controller,
  Get,
  ParseArrayPipe,
  Post,
  Query,
} from "@nestjs/common";
import { CityDto } from "./city.dto";
import { CityService, SearchResult } from "./city.service";
import { GovCityDto } from "./gov-city.dto";

@Controller()
export class AppController {
  constructor(private readonly cityService: CityService) {}

  @Get("city/search")
  async searchCities(@Query("q") query: string): Promise<SearchResult> {
    return this.cityService.search(query, 100);
  }

  @Post("city/index")
  async indexCities(
    @Body(new ParseArrayPipe({ items: GovCityDto })) cities: GovCityDto[]
  ): Promise<void> {
    return this.cityService.index(
      cities.map((city) => ({
        code: city.codeCommune,
        name: city.nomCommune,
        postalCode: city.codePostal,
      }))
    );
  }
}
