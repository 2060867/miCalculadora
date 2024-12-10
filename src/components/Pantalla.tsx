import { Text, type TextProps, StyleSheet } from 'react-native';
import { globalStyles } from '../themes/globalStyles';

interface Props extends TextProps {
  type?: 'principal' | 'secundaria'
};

export const Pantalla = ({children, type='secundaria',...rest}:Props) => {
  return (
    <Text style={type ==='principal' ? globalStyles.pantallaPrincipal : globalStyles.pantallaPequeña} {...rest}>
        {children}
    </Text>
  )
}


