import { CityDto } from "./city.dto";

export abstract class CityService {
  abstract search(query: string, count: number): Promise<SearchResult>;
  abstract index(cities: CityDto[]): Promise<void>;
}

export type SearchResult = {
  metropoleCities: CityDto[];
  overseasCities: CityDto[];
};
