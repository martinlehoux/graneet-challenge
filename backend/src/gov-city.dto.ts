import { IsString } from "class-validator";

export class GovCityDto {
  @IsString()
  codePostal: string;

  @IsString()
  codeCommune: string;

  @IsString()
  nomCommune: string;

  @IsString()
  libelleAcheminement: string;
}
