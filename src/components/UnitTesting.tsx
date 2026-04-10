import type { InvoiceType } from "../types/invoiceTypes";
import { InvoiceDetails } from "./InvoiceDetails";

export default function UnitTesting() {
    const customer_One_invoicedata: InvoiceType = {
        invoiceNumber: 1,
        customerName: "Gomathi B",
        amount: 100,
        dueDate: "16-Feb-2026",
        taxRate: 10,
        status: "paid"
    }
    const customer_Two_invoicedata: InvoiceType = {
        invoiceNumber: 2,
        customerName: "Jeyasuriya M",
        amount: 200,
        dueDate: "10-Jun-2025",
        taxRate: 10,
        status: "paid"
    }
    return (
        <>
            <h1>Unit Testing</h1>
            <InvoiceDetails invoicedata={customer_One_invoicedata} />
            <InvoiceDetails invoicedata={customer_Two_invoicedata} />
        </>
    )
}