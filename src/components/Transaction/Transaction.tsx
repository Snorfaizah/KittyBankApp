import React from 'react';
import { View, StyleSheet } from 'react-native';
import styles from './TransactionStyles'
import { Card, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as  kittyBankTypes from '../../types/kittyBankTypes';


const TransactionList: React.FC<kittyBankTypes.Props> = ({ transactions }) => {
    return (
        <View>
           <Text style={styles.transaction}>Transactions:</Text>
          {transactions.map((tx) => (
              <Text key={tx.id} style={styles.transaction}>
                {tx.type === 'deposit' ? '➕' : '➖'} RM{tx.amount} -{' '}
                {new Date(tx.date).toLocaleString()}
              </Text>
            )) 
          }
        </View>
      );
};


export default TransactionList;