import {
  IsString,
  IsNumber,
  IsPositive,
  IsUrl,
  MinLength,
} from 'class-validator';

export class BagProductDto {
  @IsString()
  @MinLength(2, { message: 'Name must be at least 2 characters long' })
  name: string;

  @IsNumber()
  @IsPositive({ message: 'Price must be a positive number' })
  price: number;

  @IsString()
  @MinLength(3, { message: 'Category must be at least 3 characters long' })
  category: string;

}
