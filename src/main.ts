import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configService } from './config/config.service';
import { ConfigKeys } from './config/configKeys.enum';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number.parseInt(configService.get(ConfigKeys.PORT, '3000'));

  app.use(helmet());
  app.enableCors(configService.createCorsOptions());

  await app.listen(port);
}
bootstrap();
