import { IgnitefyPCImages } from './IgnitefyPCImages';
import { Parts } from './Parts';
import { ProductCategories } from './ProductCategories'

export class PCListDTO{
  ProductCategory: ProductCategories
  Id: number;
  Name: string;
  Price: number;
  Processor: Parts
  Motherboard: Parts
  RAM: Parts
  GraphicCard: Parts
  PowerSupply: Parts
  Casing: Parts
  Storage: Parts
  IgnitefyPCImages: IgnitefyPCImages;
}
