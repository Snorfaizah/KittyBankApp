// src/components/PiggyBank/PiggyBank.tsx
import React, { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView } from 'react-native';
import styles from './KittyBanStyles'
import { KittyBankState,alertState } from '../../types/kittyBankTypes';
import { deposit, withdraw } from './KittyBankLogic';
import  TransactionList  from '../Transaction/Transaction'
import AlertPopup from '../shareable/Alert/Alert'

const KittyBank = () => {
  const [alert, setAlert] = useState<{ message: string; variant: 'success' | 'warning' | 'danger' } | null>(null);
  const [state, setState] = useState<KittyBankState>({
    balance: 0,
    transactions: [],
  });

  const [amount, setAmount] = useState<number>(0);

  const handleDeposit = () => {
    if (amount === 0 || Number.isNaN(amount)) {
      setAlert({ variant: 'warning', message: "Amount can't be zero!" });
      return;
    }
    setState(deposit(state, amount));
    setAmount(0);
    setAlert(null);
  };

  const handleWithdraw = () => {
    if (amount > state.balance || Number.isNaN(amount)) {
      setAlert({ variant: 'warning', message: "Not enough balance!" });
      return;
    }
    setState(withdraw(state, amount));
    setAmount(0);
    setAlert(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputCard}>
        <Text style={styles.balance}>Balance: RM{state.balance.toFixed(2)}</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={amount.toString()}
          onChangeText={(text) => setAmount(Number(text))}
          placeholder="Enter amount"
        />
        {alert && <AlertPopup variant={alert.variant} message={alert.message}  onClose={() => setAlert(null)} />}
        <View style={styles.buttonGroup}>
          <Button title="Deposit" onPress={handleDeposit} />
          <Button title="Withdraw" onPress={handleWithdraw} />
        </View>
      </View>

      <TransactionList transactions={state.transactions}/>
    
    </ScrollView>
  );
};

export default KittyBank;