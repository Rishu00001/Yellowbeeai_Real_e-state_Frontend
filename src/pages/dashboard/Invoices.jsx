
import { useState } from "react";
import {
  Printer,
  Download,
  ReceiptText,
  CheckCircle2,
} from "lucide-react";

const invoice = {
  invoiceNumber: "#550",
  dueDate: "4 Jan, 2020",
  invoiceTo: {
    name: "Carls Jhons",
    company: "Acme Inc",
    address: "Est St, 77 - Central Park, NYC",
    postalCode: "6781 45P",
  },
  paymentDetails: {
    vatNumber: "1425782",
    vatId: "10253642",
    paymentType: "Root",
    name: "John Doe",
  },
  items: [
    {
      id: 1,
      description: "Standard Plan",
      price: 40,
      vat: 7.55,
      total: 47.55,
    },
  ],
  subtotal: 47.55,
  discount: 10,
  grandTotal: 42.79,
};

const currency = (amount) => `$${amount.toFixed(2).replace(/\.00$/, "")}`;

export default function Invoices() {
  const [printing, setPrinting] = useState(false);

  const handlePrint = () => {
    setPrinting(true);
    window.print();
    setPrinting(false);
  };

  return (
    <div className="mx-auto w-full max-w-[1500px]">
      {/* Page Heading */}
      <div className="no-print mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Dashboard</span>
            <span>/</span>
            <span className="text-[#ff385c]">Invoices</span>
          </div>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-800">
            Invoice Details
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            View and print your payment invoice.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={handlePrint}
            disabled={printing}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#222b3b] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#303c50] disabled:opacity-60"
          >
            <Printer size={16} />
            Print Invoice
          </button>
        </div>
      </div>

      {/* Invoice */}
      <div
        id="invoice"
        className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
      >
        {/* Invoice Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-slate-200 px-6 py-8 sm:flex-row sm:items-start sm:px-9 sm:py-9">
          <div>
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 64 58"
                className="h-12 w-14 text-[#294cc8]"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 25 25 7l22 18v27H4V25Z"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 17V11l12-9 27 23v27M25 52V35h12v17"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="mt-1 text-sm font-bold tracking-tight text-slate-900">
              Find Houses
            </p>
            <p className="mt-1 text-[11px] text-slate-400">
              Real Estate Services
            </p>
          </div>

          <div className="sm:text-right">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
              <CheckCircle2 size={13} className="mr-1.5" />
              Invoice Generated
            </span>

            <h2 className="mt-3 text-xl font-semibold text-slate-800">
              Invoice {invoice.invoiceNumber}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Due date: {invoice.dueDate}
            </p>
          </div>
        </div>

        {/* Billing Information */}
        <div className="grid gap-10 border-b border-slate-100 px-6 py-8 sm:grid-cols-2 sm:px-9 sm:py-10">
          <div>
            <div className="mb-5 flex items-center gap-2">
              <span className="h-5 w-1 rounded-full bg-[#ff385c]" />
              <h3 className="text-sm font-semibold text-slate-800">
                Invoice To
              </h3>
            </div>

            <div className="space-y-1.5 text-[13px]">
              <p className="font-semibold text-slate-800">
                {invoice.invoiceTo.name}
              </p>
              <p className="text-slate-500">
                {invoice.invoiceTo.company}
              </p>
              <p className="text-slate-500">
                {invoice.invoiceTo.address}
              </p>
              <p className="text-slate-500">
                {invoice.invoiceTo.postalCode}
              </p>
            </div>
          </div>

          <div className="sm:text-right">
            <div className="mb-5 flex items-center gap-2 sm:justify-end">
              <span className="h-5 w-1 rounded-full bg-[#ff385c] sm:order-2" />
              <h3 className="text-sm font-semibold text-slate-800">
                Payment Details
              </h3>
            </div>

            <div className="space-y-2 text-[13px]">
              <p className="text-slate-500">
                <span className="text-slate-400">VAT Number:</span>{" "}
                {invoice.paymentDetails.vatNumber}
              </p>
              <p className="text-slate-500">
                <span className="text-slate-400">VAT ID:</span>{" "}
                {invoice.paymentDetails.vatId}
              </p>
              <p className="text-slate-500">
                <span className="text-slate-400">Payment Type:</span>{" "}
                {invoice.paymentDetails.paymentType}
              </p>
              <p className="text-slate-500">
                <span className="text-slate-400">Name:</span>{" "}
                {invoice.paymentDetails.name}
              </p>
            </div>
          </div>
        </div>

        {/* Invoice Items */}
        <div className="px-6 py-8 sm:px-9 sm:py-10">
          <div className="mb-5 flex items-center gap-2">
            <ReceiptText size={18} className="text-[#ff385c]" />
            <h3 className="text-sm font-semibold text-slate-800">
              Invoice Summary
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  <th className="px-3 py-4 pl-0">Description</th>
                  <th className="px-3 py-4">Price</th>
                  <th className="px-3 py-4">VAT (10%)</th>
                  <th className="px-3 py-4 pr-0 text-right">Total</th>
                </tr>
              </thead>

              <tbody>
                {invoice.items.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-slate-100 text-[13px] text-slate-700"
                  >
                    <td className="px-3 py-5 pl-0 font-medium text-slate-800">
                      {item.description}
                    </td>
                    <td className="px-3 py-5">{currency(item.price)}</td>
                    <td className="px-3 py-5">{currency(item.vat)}</td>
                    <td className="px-3 py-5 pr-0 text-right font-medium">
                      {currency(item.total)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Total Section */}
        <div className="bg-[#222a39] px-6 py-8 text-white sm:px-9 sm:py-9">
          <div className="ml-auto grid max-w-[560px] grid-cols-3 gap-3 sm:gap-8">
            <div>
              <p className="text-[11px] text-slate-300">Sub - Total</p>
              <p className="mt-2 text-xl font-light tracking-tight sm:text-3xl">
                {currency(invoice.subtotal)}
              </p>
            </div>

            <div>
              <p className="text-[11px] text-slate-300">Discount</p>
              <p className="mt-2 text-xl font-light tracking-tight sm:text-3xl">
                {invoice.discount}%
              </p>
            </div>

            <div>
              <p className="text-[11px] text-slate-300">Grand Total</p>
              <p className="mt-2 text-xl font-light tracking-tight text-white sm:text-3xl">
                {currency(invoice.grandTotal)}
              </p>
            </div>
          </div>
        </div>

        {/* Invoice Footer */}
        <div className="flex flex-col justify-between gap-2 border-t border-slate-100 px-6 py-5 text-[11px] text-slate-400 sm:flex-row sm:px-9">
          <p>Thank you for choosing FindHouse.</p>
          <p>For billing queries, please contact our support team.</p>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 12mm;
          }

          body {
            background: white !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .no-print {
            display: none !important;
          }

          #invoice {
            width: 100% !important;
            max-width: none !important;
            border: 1px solid #e2e8f0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
          }

          #invoice * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}
