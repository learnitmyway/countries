import { Module } from '@nestjs/common';
import { CountriesController } from './countries/countries.controller';

@Module({
  imports: [],
  controllers: [CountriesController],
  providers: [],
})
export class AppModule {}
