import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

/**
 * Decorator @Controller transforma a classe AppController em um controller.
 *
 * É possível passar uma string no primeiro parametro do decorator @Controller, isso
 * faz com que todas as rotas do controller tenham um prefixo, por exemplo, se passar
 * 'api', todas as rotas dentro do controller começarão com /api
 */
@Controller('notifications')
export class AppController {
  /**
   * Inversão de dependencia:
   *    - Ao invés de o AppController buscar a dependencia AppService em outro arquivo,
   *      ele recebe a dependencia.
   */
  constructor(private readonly prismaService: PrismaService) {}

  /**
   * Decorator @Get faz com que a função lide com requisições do tipo get.
   *
   * O nome da função tanto faz, pois o que determina o nome da rota é o primeiro parametro
   * do decorator, caso ele esteja vazio, a rota será a /.
   */
  @Get()
  async index(): Promise<any> {
    return await this.prismaService.notification.findMany();
  }

  @Post()
  async store(@Body() body: CreateNotificationBody): Promise<any> {
    const { content, category, recipient_id: recipientId } = body;

    return await this.prismaService.notification.create({
      data: {
        content,
        category,
        recipient_id: recipientId,
        id: randomUUID(),
      },
    });
  }
}
