import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BagDocument = HydratedDocument<Bag>;

@Schema()
export class Bag {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: String, required: true })
  category: string;
  @Prop({ type: String, required: false })
  image: string;
}

export const BagSchema = SchemaFactory.createForClass(Bag);
