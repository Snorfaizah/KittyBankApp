// src/components/PiggyBank/piggyBankStyles.ts
import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
    view:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#ffe8fd'
    },
  container: {
    margin: 20,
    padding: 16,
    backgroundColor: '#FEF9E7',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  balance: {
    fontSize: 32,
    color: '#27AE60',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 18,
    marginTop: 16,
    borderRadius: 8,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  transaction: {
    marginTop: 12,
    fontSize: 16,
  },
});

export default HomeStyles;