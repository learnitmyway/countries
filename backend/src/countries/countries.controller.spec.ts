import { Test, TestingModule } from '@nestjs/testing';
import { CountriesController } from './countries.controller';
import { PrismaService } from '../prisma.service';
import { CountriesService } from './countries.service';

describe('CountriesController', () => {
  let controller: CountriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountriesController],
      providers: [PrismaService, CountriesService],
    }).compile();

    controller = module.get<CountriesController>(CountriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
