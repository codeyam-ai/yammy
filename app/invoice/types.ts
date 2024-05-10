export type InvoiceItem = {
  id: number;
  title: string;
  description: string;
  hours: string;
  rate: string;
  price: string;
};

type CompanyInfo = {
  companyName: string;
  addressLine1: string;
  addressLine2: string;
};

export type Invoice = {
  subTotal: string;
  tax: string;
  total: string;
  issuedOn: string;
  dueOn: string;
  from: CompanyInfo;
  to: CompanyInfo
  items: InvoiceItem[];
};

type ActivityType = 'created' | 'edited' | 'sent' | 'commented' | 'viewed' | 'paid';

interface Person {
  name: string;
  imageUrl?: string; // Optional since not all persons have an imageUrl
}

export interface Activity {
  id: number;
  type: ActivityType;
  person: Person;
  date: string;
  dateTime: string;
  comment?: string; // Optional property for comments
}