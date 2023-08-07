/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  ArgumentMetadata,
  Logger,
  ValidationPipe,
} from '@nestjs/common';

@Injectable()
export class CustomValidationPipe extends ValidationPipe {
  logger: Logger;
  constructor() {
    super();
    this.logger = new Logger(CustomValidationPipe.name);
  }
  transform(value: any, _metadata: ArgumentMetadata) {
    this.logger.debug('===TRIGGER GLOBAL PIPE===');
    return value;
  }
}
