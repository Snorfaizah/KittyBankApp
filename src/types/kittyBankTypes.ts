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

  export interface Props {
    transactions: Transaction[];
  }

  export interface alertState {
    variant: 'success' | 'warning' | 'danger' | 'info',
    message:string,
     onClose: () => void;
  }
  
export const variantColors:any = {
    success: '#d4edda',
    warning: '#fff3cd',
    danger: '#f8d7da',
  };
  
export const variantTextColors:any = {
    success: '#155724',
    warning: '#856404',
    danger: '#721c24',
  };