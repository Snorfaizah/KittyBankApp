import React from 'react';
import { View, StyleSheet } from 'react-native';
import styles from './TransactionStyles'
import { Card, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
interface Transaction {
  id: string;
  type: 'deposit' | 'withdraw';
  amount: number;
  date: string;
}

interface Props {
  transactions: Transaction[];
}

const TransactionList: React.FC<Props> = ({ transactions }) => {
    return (
        <View>
          <Text style={styles.header}>Transactions:</Text>
    
          {transactions.map((tx) => (
            <Card
              key={tx.id}
              containerStyle={[
                styles.card,
                tx.type === 'deposit' ? styles.depositCard : styles.withdrawCard,
              ]}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <Icon
                  name={tx.type === 'deposit' ? 'plus-circle' : 'minus-circle'}
                  size={20}
                  color={tx.type === 'deposit' ? 'green' : 'red'}
                  style={{ marginRight: 8 }}
                />
                <Text style={styles.title}>
                  {tx.type === 'deposit' ? 'Deposit' : 'Withdraw'}
                </Text>
              </View>
    
              <Text style={styles.amount}>RM{tx.amount}</Text>
              <Text style={styles.date}>{new Date(tx.date).toLocaleString()}</Text>
            </Card>
          ))}
        </View>
      );
};


export default TransactionList;