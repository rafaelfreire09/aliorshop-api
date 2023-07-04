import { PrismaService } from 'src/libs/prisma-client/src';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(product: Omit<Prisma.ProductCreateManyInput, 'ProductID'>) {
    return this.prismaService.product.create({
      data: product,
      select: {
        ProductID: true,
        Title: true,

        Image: true,

        Price: true,
        Description: true,
        CreatedAt: true,
        UpdatedAt: true,
      },
    });
  }

  findAll() {
    return this.prismaService.product.findMany({
      select: {
        ProductID: true,
        Title: true,

        Image: true,

        Price: true,
        Description: true,
        CreatedAt: true,
        UpdatedAt: true,
      },
    });
  }

  findOne(productId: number) {
    return this.prismaService.product.findUnique({
      where: {
        ProductID: productId,
      },
      select: {
        ProductID: true,
        Title: true,

        Image: true,

        Price: true,
        Description: true,
        CreatedAt: true,
        UpdatedAt: true,
      },
    });
  }

  update(id: number, product: Prisma.ProductUpdateInput) {
    return this.prismaService.product.update({
      where: {
        ProductID: id,
      },
      select: {
        ProductID: true,
        Title: true,

        Image: true,

        Price: true,
        Description: true,
        CreatedAt: true,
        UpdatedAt: true,
      },
      data: product,
    });
  }

  remove(id: number) {
    return this.prismaService.product.delete({
      where: {
        ProductID: id,
      },
    });
  }
}
