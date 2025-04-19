import Alert from 'react-bootstrap/Alert';
import styles from './AlertStyles'
import { View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { alertState, variantColors, variantTextColors } from '../../../types/kittyBankTypes';
import React from 'react';
const AlertPopup:  React.FC<alertState> = (props) => {
  return (
    <View style={[styles.alertBox, { backgroundColor: variantColors[props.variant] }]}>
         <TouchableOpacity onPress={props.onClose}>
          <Icon style={styles.close} name="close" size={20} color={variantTextColors[props.variant]} />
        </TouchableOpacity>
      <Text style={[styles.alertText, { color: variantTextColors[props.variant] }]}>{props.message}</Text>

    </View>
  );
}

export default AlertPopup;