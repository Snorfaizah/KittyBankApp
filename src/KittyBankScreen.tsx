import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PiggyBankScreen = () => {
  const [goal, setGoal] = useState('');
  const [amount, setAmount] = useState('');
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    loadGoals();
  }, []);

  const loadGoals = async () => {
    const stored = await AsyncStorage.getItem('piggyGoals');
    if (stored) setGoals(JSON.parse(stored));
  };

  const saveGoals = async (updatedGoals: any[]) => {
    await AsyncStorage.setItem('piggyGoals', JSON.stringify(updatedGoals));
  };

  const addGoal = () => {
    if (goal && amount) {
      const newGoal = { id: Date.now().toString(), name: goal, amount: parseFloat(amount), saved: 0 };
      const updatedGoals = [...goals, newGoal];
      setGoals(updatedGoals);
      saveGoals(updatedGoals);
      setGoal('');
      setAmount('');
    }
  };

  const addMoney = (id, amountToAdd) => {
    const updated = goals.map((g) =>
      g.id === id ? { ...g, saved: g.saved + amountToAdd } : g
    );
    setGoals(updated);
    saveGoals(updated);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🐷 Piggy Bank</Text>
      <TextInput
        style={styles.input}
        placeholder="Savings Goal"
        value={goal}
        onChangeText={setGoal}
      />
      <TextInput
        style={styles.input}
        placeholder="Target Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Add Goal" onPress={addGoal} />

      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.goalItem}>
            <Text>{item.name} - ${item.saved} / ${item.amount}</Text>
            <Button title="+$1" onPress={() => addMoney(item.id, 1)} />
          </View>
        )}
      />
    </View>
  );
};

export default PiggyBankScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 40 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  goalItem: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});