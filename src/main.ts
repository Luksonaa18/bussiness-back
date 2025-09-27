import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors({
    origin: [
      'https://bussiness-wine.vercel.app', // Replace with your frontend Vercel URL
      'http://localhost:3001', // Keep for local development
      'http://localhost:3000', // Alternative local port
    ],
    credentials: true,
  });

  // Use port from environment variable (Vercel provides this) or default to 3000
  const port = process.env.PORT || 3000;
  await app.listen(port);
}

bootstrap();

// Export for serverless deployment (Vercel requirement)
export default bootstrap;
