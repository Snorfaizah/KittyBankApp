// src/components/PiggyBank/piggyBankStyles.ts
import { StyleSheet } from 'react-native';

const alertStyles = StyleSheet.create({
    alertBox: {
        // position: 'absolute',
        // top:0,
        width: '100%',
        display:'flex',
        justifyContent:'center',
        // right: 20,
        marginTop: 10,
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
      },
      alertText: {
        fontSize: 16,
        fontWeight: '500',
      },
      close:{
        position:'absolute',
        top: 0,
        right:0
      }
});

export default alertStyles;