// src/components/PiggyBank/piggyBankLogic.ts
/// <reference lib="dom" />
import { KittyBankState, Transaction } from '../../types/kittyBankTypes'
import { v4 as uuidv4 } from 'uuid';

export const deposit = (
  state: KittyBankState,
  amount: number
): KittyBankState => {
  const newTransaction: Transaction = {
    id: uuidv4(),
    type: 'deposit',
    amount,
    date: new Date().toISOString(),
  };

  return {
    balance: state.balance + amount,
    transactions: [newTransaction, ...state.transactions],
  };
};

export const withdraw = (
  state: KittyBankState,
  amount: number
): KittyBankState => {
  if (amount > state.balance) {
    alert('Not enough balance!');
    return state;
  }

  const newTransaction: Transaction = {
    id: uuidv4(),
    type: 'withdraw',
    amount,
    date: new Date().toISOString(),
  };

  return {
    balance: state.balance - amount,
    transactions: [newTransaction, ...state.transactions],
  };
};