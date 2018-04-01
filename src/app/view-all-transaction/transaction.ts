export interface ITransaction {
    id: number;
    vendor: string;
    amount: number;
    category: string;
    transactiondate: Date;
    account: string;
}