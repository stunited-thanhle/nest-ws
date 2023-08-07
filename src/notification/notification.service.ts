import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  create() {
    return 'This action adds a new flashCard';
  }
  async findAll() {
    return await (() =>
      new Promise((res, rej) => {
        setTimeout(() => {
          res([{ vocabulary: 'Hello', mean: 'Xin chao' }]);
        }, 10);
      }))();
  }

  findOne(id) {
    return `This action returns a #${id} flashCard`;
  }

  update(id: number, updateFlashCardDto) {
    return `This action updates a #${id} flashCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} flashCard`;
  }
}
