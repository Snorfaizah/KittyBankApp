// src/components/PiggyBank/PiggyBank.tsx
import React, { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView } from 'react-native';
import styles from './KittyBanStyles'
import { KittyBankState } from '../../types/KittyBankTypes';
import { deposit, withdraw } from './KittyBankLogic';

const KittyBank = () => {
  const [state, setState] = useState<KittyBankState>({
    balance: 0,
    transactions: [],
  });

  const [amount, setAmount] = useState<number>(0);

  const handleDeposit = () => {
    setState(deposit(state, amount));
    setAmount(0);
  };

  const handleWithdraw = () => {
    if (amount > state.balance) {
      alert('Not enough balance!');
      return;
    }
    setState(withdraw(state, amount));
    setAmount(0);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.balance}>Balance: ${state.balance.toFixed(2)}</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={amount.toString()}
        onChangeText={(text) => setAmount(Number(text))}
        placeholder="Enter amount"
      />

      <View style={styles.buttonGroup}>
        <Button title="Deposit" onPress={handleDeposit} />
        <Button title="Withdraw" onPress={handleWithdraw} />
      </View>

      <Text style={styles.transaction}>Transactions:</Text>
      {state.transactions.map((tx) => (
        <Text key={tx.id} style={styles.transaction}>
          {tx.type === 'deposit' ? '➕' : '➖'} ${tx.amount} -{' '}
          {new Date(tx.date).toLocaleString()}
        </Text>
      ))}
    </ScrollView>
  );
};

export default KittyBank;