import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpInterceptor } from './utils/HttpInterceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new HttpInterceptor());

  const config = new DocumentBuilder()
  .setTitle('MGSC API Movie Service ')
  .setDescription('The movies API description')
  .setVersion('1.0')
  .addTag('movies')
  .build();
const document = SwaggerModule.createDocument(app, config);

SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
