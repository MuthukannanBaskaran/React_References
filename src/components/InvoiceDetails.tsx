import type { InvoiceType } from "../types/invoiceTypes";

export function InvoiceDetails({ invoicedata }: { invoicedata: InvoiceType }) {
    const totalWithTax = (invoicedata.amount * (1 + invoicedata.taxRate)).toFixed(2);
    return (
        <div>

            <h2>#Invoice: {invoicedata.invoiceNumber}</h2>
            <p>Customer: {invoicedata.customerName}</p>
            <p>Amount: ${invoicedata.amount.toFixed(2)}</p>
            <p>Tax Rate: {invoicedata.taxRate * 100}%</p>
            <p>Total: ${totalWithTax}</p>
            <p>
                Status: <span className={`status-${invoicedata.status}`}>{invoicedata.status}</span>
            </p>
            <p>Due Date: {invoicedata.dueDate}</p>
        </div>
    )
}