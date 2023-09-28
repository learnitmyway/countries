import { Module } from '@nestjs/common';
import { CountriesController } from './countries/countries.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [CountriesController],
  providers: [PrismaService],
})
export class AppModule {}
