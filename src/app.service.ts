import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProducts() {
    return [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ];
  }
  

  getCategories() {
    return [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
    ];
  }

  
  getUsers() {
    return [
      { id: 1, name: 'Heydi' },
      { id: 2, name: 'Product 2' },
    ];
  }

  // getPaises() {
  //   return [
  //     { id: 1, name: 'Nicaragua' },
  //     { id: 2, name: 'Colombia' },
  //   ];
  // }

  // getGeneros() {
  //   return [
  //     { id: 1, name: 'Masculino' },
  //     { id: 2, name: 'Femenino' },
  //     { id: 3, name: 'Otro' },
  //   ];
  // }

  // getCategorias() {
  //   return [
  //     { id: 1, name: 'ropa' },
  //     { id: 2, name: 'Zapatos' },
     
      
  //   ];
  // }
  // getMarcas() {
  //   return [
  //     { id: 1, name: 'Tommy' },
  //     { id: 2, name: 'Nautica' },
  //     { id: 3, name: 'Kalua' },
     
      
  //   ];
  // }

  

  createProduct() {
    return { id: 3, name: 'Product 3' };
  }

  createCategory() {
    return { id: 3, name: 'Category 3' };
  }
 

 

} 
