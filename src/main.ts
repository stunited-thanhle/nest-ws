import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { CustomValidationPipe } from './common/pipes/custom-validation.pipe';
import helmet from 'helmet';

async function bootstrap() {
  const logger = new Logger(bootstrap.name);
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalPipes(new CustomValidationPipe());
  app.useGlobalPipes(new ValidationPipe());
  // NOTICE: GLOBAL MIDDLEWARE
  app.use(helmet());
  app.use((req: Request, res: Response, next) => {
    logger.debug('===TRIGGER GLOBAL MIDDLEWARE===');
    next();
  });
  await app.listen(6002);
}
bootstrap();
