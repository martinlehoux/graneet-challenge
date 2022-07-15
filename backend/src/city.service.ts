import { CityDto } from "./city.dto";

export abstract class CityService {
  abstract search(query: string, count: number): Promise<CityDto[]>;
  abstract index(cities: CityDto[]): Promise<void>;
}
