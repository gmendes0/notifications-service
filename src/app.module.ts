import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';

/**
 * Decorators:
 *    - Acoplam funcionamento dentro de uma função/classe/variável;
 *
 * Controllers:
 *    - Arquivos que contem os pontos de entrada da aplicação, ou seja,
 *      arquivos que vão lidar com as requisições HTTP;
 *
 * Services:
 *    - Basicamente tudo o que não é um controller, ex.: conexão com DB, repositórios, etc. É uma classe genérica;
 *
 * Modules:
 *    - Acopladores. Ponto central para importar os controllers e services;
 *    - É possível importar um module dentro do outro passando o module no `imports: []`;
 */
@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
