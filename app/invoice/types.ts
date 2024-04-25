export type InvoiceItem = {
  id: number;
  title: string;
  description: string;
  hours: string;
  rate: string;
  price: string;
};

export type Invoice = {
  subTotal: string;
  tax: string;
  total: string;
  items: InvoiceItem[];
};