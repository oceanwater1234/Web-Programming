import { NestFactory } from '@nestjs/core';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './root/app.module';


function swagger(app: INestApplication) {
  const options = new DocumentBuilder()
  .setTitle('University Whale')
  .setDescription('2024 Web Programming Project')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('document', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false,
      transform: true,
    }),
  );
  
  swagger(app);
  await app.listen(3000);
  console.log(`Swagger is running on: http://localhost:3000/document`);
}
bootstrap();