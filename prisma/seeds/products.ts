import { PrismaClient } from '@prisma/client';
import { ProductList } from './utils';

export type Products = {
  ProductID: number;
  Title: string;
  Image: string;
  Price: number;
  Description: string;
};

const getProducts = () => {
  const productsMounted = ProductList.map((product) => {
    return {
      ProductID: product.id,
      Title: product.title,
      Image: product.image,
      Price: product.price,
      Description: product.description,
    };
  });

  return productsMounted;
};

export const transactionProduct = async (
  prisma: PrismaClient,
  productsList: Products[],
) => {
  try {
    await prisma.$transaction([
      prisma.product.deleteMany(),
      prisma.product.createMany({
        data: productsList,
      }),
    ]);

    console.log(`Products inserteds 📦`);
  } catch (error) {
    console.error('Error inserting Products ⚠️', error);
  }
};

export const insertProducts = async (prisma: PrismaClient) => {
  const products = getProducts();

  await transactionProduct(prisma, products);
};
