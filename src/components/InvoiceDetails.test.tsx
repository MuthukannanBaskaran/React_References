import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { InvoiceDetails } from './InvoiceDetails';
import type { InvoiceType } from '../types/invoiceTypes';

describe("InvoiceDetails", () => {
    const testInvoiceData: InvoiceType = {
        invoiceNumber: 1,
        customerName: "B Gomathi",
        amount: 100,
        dueDate: "16 February 2026",
        taxRate: 20,
        status: "paid"
    }

    it("renders all invoice data correctly", () => {
        render(<InvoiceDetails invoicedata={testInvoiceData} />)
        expect(screen.getByText("#Invoice: 1")).toBeInTheDocument();
        expect(screen.getByText("Customer: Gomathi B")).toBeInTheDocument();
        expect(screen.getByText("Amount: $100.00")).toBeInTheDocument();
        expect(screen.getByText("Tax Rate: 1000%")).toBeInTheDocument();
        expect(screen.getByText("Total: $1100.00")).toBeInTheDocument();
        expect(screen.getByText("Status: paid")).toBeInTheDocument();
        expect(screen.getByText("Due Date: 16-Feb-2026")).toBeInTheDocument();
    })
})