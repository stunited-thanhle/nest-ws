import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { NotificationService } from './notification.service';
import { OwnershipGuard } from './guards/ownership.guard';
import { ExcludeNullInterceptor } from 'src/common/interceptors/exclude-null.interceptor';
import { ParseRouteValidationPipe } from 'src/common/pipes/parse-custom-route-validation.pipe';
import { TimeoutInterceptor } from 'src/common/interceptors/timeout.interceptor';
import { JwtAuthorizationGuard } from 'src/common/guards/jwt-auth.guard';
import { ParseControllerValidationPipe } from 'src/common/pipes/parse-custom-controller-validation.pipe';

@UseInterceptors(TimeoutInterceptor)
@UseGuards(JwtAuthorizationGuard)
@UsePipes(ParseControllerValidationPipe)
@Controller('notification')
export class NotificationController {
  private logger: Logger;
  constructor(private readonly notificationService: NotificationService) {
    this.logger = new Logger(NotificationController.name);
  }

  @Post()
  create(@Body() createFlashCardDto: any) {
    return this.notificationService.create();
  }

  @Get()
  @UseGuards(OwnershipGuard)
  @UseInterceptors(ExcludeNullInterceptor)
  @UsePipes(ParseRouteValidationPipe)
  async findAll(@Query('limit') limit, @Query('offset') offset) {
    this.logger.log(`Method name: ${this.findAll.name}`);
    return await this.notificationService.findAll();
  }

  @Patch(':id')
  @UseGuards(OwnershipGuard)
  update(@Param('id') id: string, @Body() updateFlashCardDto: any) {
    return this.notificationService.update(+id, updateFlashCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationService.remove(+id);
  }
}
