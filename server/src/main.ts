import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // app.use(json({ limit: '2mb' }));
  // app.use(urlencoded({ limit: '2mb', extended: true }));
  app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(9100);
}
bootstrap();
