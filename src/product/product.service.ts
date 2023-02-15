import { ISortType, ISortByPrice, ISortByRating, ISortByDate } from './types';
import { PrismaService } from './../prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  findOneById(id: number) {
    const product = this.prisma.product.findUnique({
      where: {
        id,
      },
    });
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async findAll(searchTerm?: string) {
    return this.prisma.product.findMany(
      searchTerm && {
        where: {
          OR: [
            {
              name: {
                contains: searchTerm,
                mode: 'insensitive',
              },
            },
            {
              description: {
                contains: searchTerm,
                mode: 'insensitive',
              },
            },
          ],
        },
      },
    );
  }

  async orderByPrice(sortByPrice?: ISortByPrice) {
    return this.prisma.product.findMany(
      sortByPrice && {
        orderBy: {
          // createdAt: sortType === 'oldest' ? 'asc' : 'desc',
          // price: sortByPrice === 'low-to-high' ? 'asc' : 'desc',
          price: 'desc',
        },
      },
    );
  }

  async orderByRating(sortByRating?: ISortByRating) {
    return this.prisma.product.findMany(
      sortByRating && {
        orderBy: {
          // createdAt: sortType === 'oldest' ? 'asc' : 'desc',
          rating: sortByRating === 'low-to-high' ? 'asc' : 'desc',
        },
      },
    );
  }

  async orderByDate(sortByDate?: ISortByDate) {
    return this.prisma.product.findMany(
      sortByDate && {
        orderBy: {
          // createdAt: sortType === 'oldest' ? 'asc' : 'desc',
          rating: sortByDate === 'oldest' ? 'asc' : 'desc',
        },
      },
    );
  }

  findSimilarProducts(currentProductId: number) {
    return this.prisma.product.findMany({
      where: {
        id: {
          not: currentProductId,
        },
      },
    });
  }
}
