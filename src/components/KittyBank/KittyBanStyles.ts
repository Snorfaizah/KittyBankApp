// src/components/PiggyBank/piggyBankStyles.ts
import { StyleSheet } from 'react-native';

const kittyBankStyles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop:100,
    padding: 16,
    // backgroundColor: '#FFF',
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
    fontWeight: 'bold' 
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
  inputCard:{
    backgroundColor: '#FFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    padding: 16,
  }
});

export default kittyBankStyles;