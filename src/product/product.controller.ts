import { ISortByRating, ISortByPrice, ISortByDate } from './types';
import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Query } from '@nestjs/common/decorators';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(@Query('searchTerm') searchTerm?: string) {
    return this.productService.findAll(searchTerm.toLowerCase());
  }

  @Get()
  orderByPrice(@Query('sortByPrice') sortByPrice?: ISortByPrice) {
    return this.productService.orderByPrice(sortByPrice);
  }

  @Get()
  orderByRating(@Query('sortByRating') sortByRating?: ISortByRating) {
    return this.productService.orderByRating(sortByRating);
  }

  @Get()
  orderByDate(@Query('sortByDate') sortByDate?: ISortByDate) {
    return this.productService.orderByDate(sortByDate);
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.productService.findOneById(+id);
  }

  @Get('similar/:id')
  findSimilarProducts(@Param('id') id: string) {
    return this.productService.findSimilarProducts(+id);
  }
}
