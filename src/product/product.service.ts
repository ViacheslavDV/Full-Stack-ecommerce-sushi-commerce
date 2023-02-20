import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async searchPlusOrder(
    searchQuery?: string,
    orderByPar?: 'price' | 'rating' | 'createdAt',
    sortByPar?: 'asc' | 'desc',
  ) {
    return this.prisma.product.findMany({
      where: {
        name: {
          contains: searchQuery,
          mode: 'insensitive',
        },
      },
      orderBy: [
        {
          [orderByPar]: sortByPar,
        },
      ],
    });
  }
}
