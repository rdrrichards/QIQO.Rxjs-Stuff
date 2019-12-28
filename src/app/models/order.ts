export interface Order {
  id: number;
  customerId: number;
  customer?: Customer;
  orderNumber: string;
  orderItems?: OrderLine[];
}

export interface OrderLine {
  id: number;
  orderId: number;
  quantity: number;
  productId: number;
  product?: Product;
}

export interface Product {
  id: number;
  productCode: string;
  productName: string;
}

export interface Customer {
  id: number;
  name: string;
}
