import { Module } from '@nestjs/common';
import { CountriesController } from './countries/countries.controller';
import { PrismaService } from './prisma.service';
import { CountriesService } from './countries/countries.service';

@Module({
  imports: [],
  controllers: [CountriesController],
  providers: [PrismaService, CountriesService],
})
export class AppModule {}
