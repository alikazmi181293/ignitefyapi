import { CartItem } from "./cart-item"
 
export class OrderDetailsDTO
{
  PCOrder: PCOrder;
  CartItems: CartItem[];
  DeliveryAddresses: DeliveryAddress[];

}

export class PCOrder {
  Id: number;
  OrderTime: string;
  OrderDate: string; 
  OrderStatus: string;
}

export class DeliveryAddress {
  Id: number;
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
  Address: string;
  Country: string;
  City: string;
  District: string;
  PostalCode: string;
  SpecialNotes: string;
  IsBilingAddress: boolean;
  PCOrderId: number;
}
