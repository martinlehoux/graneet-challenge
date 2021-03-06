import { Logger, Module } from "@nestjs/common";
import { ElasticsearchModule } from "@nestjs/elasticsearch";
import { AppController } from "./app.controller";
import { CityService } from "./city.service";
import { ElasticCityProvider } from "./elastic-city.provider";

@Module({
  imports: [
    ElasticsearchModule.register({ node: process.env.ELASTICSEARCH_HOST }),
  ],
  controllers: [AppController],
  providers: [{ provide: CityService, useClass: ElasticCityProvider }],
})
export class AppModule {}
