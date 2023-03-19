import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('products')
  getProducts() {
    return this.appService.getProducts();
  }
 

  @Get('categories')
  getCategories() {
    return this.appService.getCategories();
  }

  

  @Post('products')
  createProduct() {
    return this.appService.createProduct();
  }

  @Get('users')
  getUsers() {
    return this.appService.getUsers();
  }
 
  // @Get('paises')
  // getPais() {
  //   return this.appService.getPaises();
  // }

  // @Get('generos')
  // getGenero() {
  //   return this.appService.getGeneros();
  // }
  // @Get('categorias')
  // getCategorias() {
  //   return this.appService.getCategorias();
  // }
  // @Get('marcas')
  // getMarcas() {
  //   return this.appService.getMarcas();
  // }
 



}
