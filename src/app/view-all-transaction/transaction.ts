export interface ITransaction {
    id: number;
    vendor: string;
    amount: number;
    category: string;
    transactionDate: Date;
    account: string;
}
