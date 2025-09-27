import { Module } from '@nestjs/common';
import { BagsController } from './bags.controller';
import { BagsService } from './bags.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Bag, BagSchema } from 'src/schema/bags.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Bag.name, schema: BagSchema }])],
  controllers: [BagsController],
  providers: [BagsService],
})
export class BagsModule {}
