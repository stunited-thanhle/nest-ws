import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  createUser(user: {
    username: string;
    email: string;
    phone: number;
    createdAt: Date;
    id: number;
  }) {
    user.createdAt = new Date();
    user.id = 1;

    return user;
  }
}
