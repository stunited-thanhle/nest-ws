import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ModuleRef } from '@nestjs/core';
import { UserDTO } from './dto/createUser.dto';
import { plainToClass, plainToInstance } from 'class-transformer';

@Controller('user')
export class UserController {
  /* 
    Dependency Injection
  */
  // constructor(private readonly userService: UserService) {}

  /*
    With ModuleRef
  */
  // constructor(private moduleRef: ModuleRef) {}

  /*
    Not use DI
  */
  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  /* 
    Custom Provider
  */
  // constructor(
  //   @Inject('CUSTOM_THANH') private readonly userService: UserService,
  // ) {}

  @Post()
  createUser(
    @Body()
    user: {
      username: string;
      email: string;
      phone: number;
      createdAt: Date;
      id: number;
    },
  ) {
    user.createdAt = new Date();
    user.id = 1;

    return user;

    // const userService = this.moduleRef.get(UserService);
    // return userService.createUser(user);

    // const userService = this.moduleRef.get('CUSTOM_THANH');
    // return userService.createUser(user);

    // return this.userService.createUser(user);
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return 'test';
  }

  @Post('pipe')
  @UsePipes(new ValidationPipe())
  createUserPipe(@Body() user: UserDTO) {
    // const useTranform = plainToInstance(UserDTO, user, {
    //   excludeExtraneousValues: true,
    // });
    // console.log(user);
    // console.log(useTranform);
    user.createdAt = new Date();
    user.id = 1;

    return user;
  }
}
