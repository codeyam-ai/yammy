import React, { createContext, useContext, ReactNode } from 'react';

// Define the types as provided
type ActivityType = 'created' | 'edited' | 'sent' | 'commented' | 'viewed' | 'paid';

interface Person {
  name: string;
  imageUrl?: string;
}

export interface Activity {
  id: number;
  type: ActivityType;
  person: Person;
  date: string;
  dateTime: string;
  comment?: string;
}

// Initial activity data
const initialActivities: Activity[] = [
  { id: 1, type: 'created', person: { name: 'Chelsea Hagon' }, date: '7d ago', dateTime: '2023-01-23T10:32' },
  { id: 2, type: 'edited', person: { name: 'Chelsea Hagon' }, date: '6d ago', dateTime: '2023-01-23T11:03' },
  { id: 3, type: 'sent', person: { name: 'Chelsea Hagon' }, date: '6d ago', dateTime: '2023-01-23T11:24' },
  {
    id: 4,
    type: 'commented',
    person: { name: 'Chelsea Hagon', imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    comment: 'Called client, they reassured me the invoice would be paid by the 25th.',
    date: '3d ago',
    dateTime: '2023-01-23T15:56',
  },
  { id: 5, type: 'viewed', person: { name: 'Alex Curren' }, date: '2d ago', dateTime: '2023-01-24T09:12' },
  { id: 6, type: 'paid', person: { name: 'Alex Curren' }, date: '1d ago', dateTime: '2023-01-24T09:20' },
];

// Create context
const InvoiceActivityContext = createContext<Activity[]>(initialActivities);

// Provider Component
export const InvoiceActivityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <InvoiceActivityContext.Provider value={initialActivities}>
      {children}
    </InvoiceActivityContext.Provider>
  );
};

// Custom hook to use the InvoiceActivity context
export const useInvoiceActivity = () => {
  const context = useContext(InvoiceActivityContext);
  if (context === undefined) {
    throw new Error('useInvoiceActivity must be used within an InvoiceActivityProvider');
  }
  return context;
};
