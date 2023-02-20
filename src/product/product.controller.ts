import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { Query } from '@nestjs/common/decorators';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  searchPlusOrder(
    @Query('searchQuery') searchQuery?: string,
    @Query('sortByPar') sortByPar?: 'price' | 'rating' | 'createdAt',
    @Query('orderByPar') orderByPar?: 'asc' | 'desc',
  ) {
    return this.productService.searchPlusOrder(
      searchQuery,
      sortByPar,
      orderByPar,
    );
  }
}
