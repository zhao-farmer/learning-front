import { Injectable } from '@nestjs/common';
import { TransferMoneyDto } from './dto/create-manager.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Manager } from './entities/manager.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ManagerService {
  constructor(
    @InjectRepository(Manager) private readonly money: Repository<Manager>,
  ) {}

  async transferMoney(transferMoneyDto: TransferMoneyDto) {
    console.log(transferMoneyDto, 1);
    try {
      // .manager 服务
      // .manager.transaction 事物
      return this.money.manager.transaction(async (manager) => {
        let from = await this.money.findOne({
          where: { id: transferMoneyDto.fromId },
        });
        let to = await this.money.findOne({
          where: { id: transferMoneyDto.toId },
        });
        if (!from || !to) {
          throw new Error('用户查询错误');
        }

        if (from.money >= transferMoneyDto.money) {
          // 减钱
          manager.save(Manager, {
            id: transferMoneyDto.fromId,
            money: from.money - transferMoneyDto.money,
          });
          // 加钱
          manager.save(Manager, {
            id: transferMoneyDto.toId,
            money: to.money + transferMoneyDto.money,
          });

          return {
            messsage: '转账成功',
          };
        } else {
          return {
            messsage: '余额不足',
          };
        }
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
