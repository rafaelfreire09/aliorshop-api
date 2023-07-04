import { Module } from '@nestjs/common';
import { PrismaClientModule } from 'src/libs/prisma-client/src';

import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository],
  imports: [PrismaClientModule],
})
export class ProductsModule {}
