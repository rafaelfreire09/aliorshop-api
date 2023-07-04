import { Injectable, BadRequestException } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { Prisma } from '@prisma/client';
import { CreateProductDTO, UpdateProductDTO } from './dto';

import { I18n } from 'src/i18n';
import { I18nContext } from 'nestjs-i18n';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async create(createProductDTO: CreateProductDTO, i18nContext: I18nContext) {
    const created = await this.productsRepository.create(createProductDTO);

    return created;
  }

  findAll() {
    return this.productsRepository.findAll();
  }

  async findOne(productId: number, i18nContext: I18nContext) {
    const hasProductData = await this.productsRepository.findOne(productId);

    if (!hasProductData) {
      throw new BadRequestException(
        i18nContext.translate(I18n.PRODUCTS_SERVICE_PRODUCT_NOT_FOUND.message),
      );
    }

    return hasProductData;
  }

  async update(
    productId: number,
    updateProductDTO: UpdateProductDTO,
    i18nContext: I18nContext,
  ) {
    const hasProductData = await this.productsRepository.findOne(productId);

    if (!hasProductData) {
      throw new BadRequestException(
        i18nContext.translate(I18n.PRODUCTS_SERVICE_PRODUCT_NOT_FOUND.message),
      );
    }

    const inputUpdateProductDTO: Prisma.ProductUpdateInput = {
      Title: updateProductDTO.Title,
      Image: updateProductDTO.Image,
      Price: updateProductDTO.Price,
      Description: updateProductDTO.Description,
    };

    return await this.productsRepository.update(
      productId,
      inputUpdateProductDTO,
    );
  }

  async remove(id: number, i18nContext: I18nContext) {
    const hasProductData = await this.productsRepository.findOne(id);

    if (!hasProductData)
      throw new BadRequestException(
        i18nContext.translate(I18n.PRODUCTS_SERVICE_PRODUCT_NOT_FOUND.message),
      );

    const { Title } = await this.productsRepository.remove(id);

    return {
      success: i18nContext.translate(
        I18n.PRODUCTS_SERVICE_PRODUCT_DELETED.message,
        {
          args: { Title },
        },
      ),
    };
  }
}
