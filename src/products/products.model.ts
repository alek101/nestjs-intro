import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: { type: String, requred: true },
  description: { type: String, requred: true },
  price: { type: Number, requred: true },
});

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
}
