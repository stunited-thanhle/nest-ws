import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  // providers: [UserService],
  providers: [
    // {
    //   provide: 'CUSTOM_THANH',
    //   useClass: UserService,
    // },
  ],
})
export class UserModule {}
