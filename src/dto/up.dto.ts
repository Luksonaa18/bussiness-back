import { PartialType } from '@nestjs/mapped-types';
import { BagProductDto } from './bags.dto';

export class UpdateProductDto extends PartialType(BagProductDto) {}
