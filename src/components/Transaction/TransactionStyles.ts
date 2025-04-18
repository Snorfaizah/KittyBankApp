import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        paddingLeft: 10,
      },
      card: {
        borderRadius: 10,
        padding: 10,
      },
      depositCard: {
        backgroundColor: '#e0f7fa', // Light blue for deposits
      },
      withdrawCard: {
        backgroundColor: '#ffebee', // Light red for withdrawals
      },
      title: {
        fontSize: 16,
        fontWeight: '600',
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        marginRight: 10,
      },
      amount: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      date: {
        fontSize: 14,
        color: 'gray',
      },
  });
  
export default styles;