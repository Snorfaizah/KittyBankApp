// src/types/piggyBankTypes.ts
export interface Transaction {
    id: string;
    type: 'deposit' | 'withdraw';
    amount: number;
    date: string;
  }
  
  export interface KittyBankState {
    balance: number;
    transactions: Transaction[];
  }