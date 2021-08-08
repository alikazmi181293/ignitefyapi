import { CartItem } from "./cart-item";

export class IgnitefyOrder {
  cartItemList: CartItem[];
  billingFirstName: string;
  billingLastName: string;
  billingEmailAddress: string;
  billingPhone: string;
  billingAddress: string;
  billingCountry: string;
  billingCity: string;
  billingDistrict: string;
  billingZIP: string;
  shippingFirstName: string;
  shippingLastName: string;
  shippingEmailAddress: string;
  shippingPhone: string;
  shippingAddress: string;
  shippingCountry: string;
  shippingCity: string;
  shippingDistrict: string;
  shippingZIP: string;
  shippingSpecialNotes: string;
}
 