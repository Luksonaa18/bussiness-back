import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { BagsService } from './bags.service';
import { BagProductDto } from 'src/dto/bags.dto';
import { UpdateProductDto } from 'src/dto/up.dto';
import { AdminGuard } from '../guards/role.guard';

@Controller('bags')
export class BagsController {
  constructor(private readonly bagsService: BagsService) {}

  @Get()
  async findAll() {
    return this.bagsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.bagsService.findOne(id);
  }

  @Post()
  @UseGuards(AdminGuard)
  async create(@Body() dto: BagProductDto) {
    return this.bagsService.createBag(dto);
  }

  @Patch(':id')
  @UseGuards(AdminGuard)
  async update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.bagsService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(AdminGuard)
  async delete(@Param('id') id: string) {
    return this.bagsService.deleteBag(id);
  }
}
