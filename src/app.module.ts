import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { PaisesModule } from './paises/paises.module';
import { CategoriasModule } from './categorias/categorias.module';
import { GenerosModule } from './generos/generos.module';
import { MarcasModule } from './marcas/marcas.module';


@Module({
  imports: [MenuModule, PaisesModule, CategoriasModule, GenerosModule, MarcasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
