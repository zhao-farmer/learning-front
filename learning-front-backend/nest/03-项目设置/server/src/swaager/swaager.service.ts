import { Injectable } from '@nestjs/common';
import { CreateSwaagerDto } from './dto/create-swaager.dto';
import { UpdateSwaagerDto } from './dto/update-swaager.dto';

@Injectable()
export class SwaagerService {
  create(createSwaagerDto: CreateSwaagerDto) {
    return 'This action adds a new swaager';
  }

  findAll() {
    return `This action returns all swaager`;
  }

  findOne(id: number) {
    return `This action returns a #${id} swaager`;
  }

  update(id: number, updateSwaagerDto: UpdateSwaagerDto) {
    return `This action updates a #${id} swaager`;
  }

  remove(id: number) {
    return `This action removes a #${id} swaager`;
  }
}
