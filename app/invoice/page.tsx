"use client"
import ActivityFeed from './components/ActivityFeed'
import Header from './components/Header'
import InvoiceDisplay from './components/InvoiceDisplay'
import InvoiceHeader from './components/InvoiceHeader'
import InvoiceSummary from './components/InvoiceSummary'
import { InvoiceActivityProvider } from './providers/InvoiceActivityProvider'
import { Invoice } from './types'

const invoice: Invoice = {
  subTotal: '$8,800.00',
  tax: '$1,760.00',
  total: '$10,560.00',
  items: [
    {
      id: 1,
      title: 'Logo redesign',
      description: 'New logo and digital asset playbook.',
      hours: '20.0',
      rate: '$100.00',
      price: '$2,000.00',
    },
    {
      id: 2,
      title: 'Website redesign',
      description: 'Design and program new company website.',
      hours: '52.0',
      rate: '$100.00',
      price: '$5,200.00',
    },
    {
      id: 3,
      title: 'Business cards',
      description: 'Design and production of 3.5" x 2.0" business cards.',
      hours: '12.0',
      rate: '$100.00',
      price: '$1,200.00',
    },
    {
      id: 4,
      title: 'T-shirt design',
      description: 'Three t-shirt design concepts.',
      hours: '4.0',
      rate: '$100.00',
      price: '$400.00',
    },
  ],
}

export default function InvoicePage() {
  return (
    <InvoiceActivityProvider>
      <>
        <Header />
        <main>
          <InvoiceHeader companyName='Tuple, Inc.' invoiceNumber='#00011' companyLogoSrc='https://tailwindui.com/img/logos/48x48/tuple.svg' />
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <InvoiceSummary />
              {/* Invoice */}
              <InvoiceDisplay invoice={invoice} />
              <div className="lg:col-start-3">
                {/* Activity feed */}
                <h2 className="text-sm font-semibold leading-6 text-gray-900">Activity</h2>
                <ActivityFeed />
              </div>
            </div>
          </div>
        </main>
      </>
    </InvoiceActivityProvider>
  )
}
