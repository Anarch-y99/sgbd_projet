import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async find() {
    return await this.userModel.find();
  }

  async findById(id: string) {
    return await this.userModel.findById(id);
  }

  async create(dto) {
    return await this.userModel.create(dto);
  }

  async update(id: string, dto) {
    return await this.userModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async delete(id: string) {
    return await this.userModel.findByIdAndDelete(id);
  }
}
