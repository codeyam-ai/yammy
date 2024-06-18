import {
  CalendarDaysIcon,
  CreditCardIcon,
  UserCircleIcon
} from '@heroicons/react/20/solid';
import { Invoice } from '../types';

interface InvoiceSummaryProps {
  invoice: Invoice;
}

const InvoiceSummary = ({ invoice }: InvoiceSummaryProps) => {
  return (
    <div className="lg:col-start-3 lg:row-end-1 bg-green-500">
      <h2 className="sr-only">Summary</h2>
      <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
        <dl className={`flex flex-wrap ${invoice.payment ? '' : 'pb-6'}`}>
          <div className="flex-auto pl-6 pt-6">
            <dt className="text-sm font-semibold leading-6 text-gray-900">Amount</dt>
            <dd className={`mt-1 text-base font-semibold leading-6 ${invoice.payment ? 'text-gray-900' : 'text-red-600'}`}>{invoice.total}</dd>
          </div>
          <div className="flex-none self-end px-6 pt-4">
            <dt className="sr-only">Status</dt>
            {
              invoice.payment ? (
                <dd className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">
                  Paid
                </dd>
              ) : (
                <dd className="rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-600 ring-1 ring-inset ring-red-600/20">
                  Unpaid
                </dd>
              )
            }
          </div>
          {
            invoice.payment && (


              <div className='w-full'>
                <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                  <dt className="flex-none">
                    <span className="sr-only">Client</span>
                    <UserCircleIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm font-medium leading-6 text-gray-900">{invoice.payment.madeBy}</dd>
                </div>
                <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                  <dt className="flex-none">
                    <span className="sr-only">Paid On</span>
                    <CalendarDaysIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm leading-6 text-gray-500">
                    <time dateTime="2023-01-31">{invoice.payment.on}</time>
                  </dd>
                </div>
                <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                  <dt className="flex-none">
                    <span className="sr-only">Payment Method</span>
                    <CreditCardIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm leading-6 text-gray-500">{invoice.payment.method}</dd>
                </div>
              </div>
            )
          }
        </dl>
        {
          invoice.payment && (
            <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Download receipt <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default InvoiceSummary;
