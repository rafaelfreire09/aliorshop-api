import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';
import { ProductsService } from './products.service';
import { CreateProductDTO, UpdateProductDTO } from './dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('/')
  create(
    @Body() createProductDTO: CreateProductDTO,
    @I18n() i18nContext: I18nContext,
  ) {
    return this.productsService.create(createProductDTO, i18nContext);
  }

  @Get('/')
  findAll() {
    return this.productsService.findAll();
  }

  @Get('/:id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @I18n() i18nContext: I18nContext,
  ) {
    return this.productsService.findOne(id, i18nContext);
  }

  @Put('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDTO: UpdateProductDTO,
    @I18n() i18nContext: I18nContext,
  ) {
    return this.productsService.update(id, updateProductDTO, i18nContext);
  }

  @Delete('/:id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @I18n() i18nContext: I18nContext,
  ) {
    return await this.productsService.remove(id, i18nContext);
  }
}
