import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { BagProductDto } from 'src/dto/bags.dto';
import { UpdateProductDto } from 'src/dto/up.dto';
import { Bag } from 'src/schema/bags.schema';

@Injectable()
export class BagsService {
  constructor(@InjectModel(Bag.name) private bagsModule: Model<Bag>) {}
  async createBag(newBag: BagProductDto) {
    return this.bagsModule.create(newBag);
  }
  async findAll() {
    return this.bagsModule.find().exec();
  }
  async findOne(id: string): Promise<Bag> {
    const bag = await this.bagsModule.findById(id).exec();
    if (!bag) {
      throw new NotFoundException(`Bag with ID "${id}" not found`);
    }
    return bag;
  }
  async update(id: string, updateDto: UpdateProductDto): Promise<Bag> {
    const updated = await this.bagsModule
      .findByIdAndUpdate(id, updateDto, { new: true })
      .exec();
    if (!updated) throw new NotFoundException(`Bag with ID ${id} not found`);
    return updated;
  }

  async deleteBag(id: string) {
    const deleted = this.bagsModule.findByIdAndDelete(id);
    if (!deleted) {
      throw new NotFoundException(`Bag with ID "${id}" not found`);
    }
    return deleted;
  }
}
