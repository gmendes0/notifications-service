import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Decorator @Controller transforma a classe AppController em um controller.
 *
 * É possível passar uma string no primeiro parametro do decorator @Controller, isso
 * faz com que todas as rotas do controller tenham um prefixo, por exemplo, se passar
 * 'api', todas as rotas dentro do controller começarão com /api
 */
@Controller('api')
export class AppController {
  /**
   * Inversão de dependencia:
   *    - Ao invés de o AppController buscar a dependencia AppService em outro arquivo,
   *      ele recebe a dependencia.
   */
  constructor(private readonly appService: AppService) {}

  /**
   * Decorator @Get faz com que a função lide com requisições do tipo get.
   *
   * O nome da função tanto faz, pois o que determina o nome da rota é o primeiro parametro
   * do decorator, caso ele esteja vazio, a rota será a /.
   */
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
