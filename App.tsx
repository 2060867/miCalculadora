import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';
import { globalStyles } from './src/themes/globalStyles';

export default function App() {

  const {formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito,
         operacionDividir, operacionMultiplicar, operacionRestar, operacionSumar,resultado  } = useCalculadora();

  return (
  
    <View style={globalStyles.container}>    
      <Pantalla numberOfLines={1} adjustsFontSizeToFit>{formula}</Pantalla>

      {formula === numeroAnterior ? (
        <Pantalla type='secundaria' numberOfLines={1} adjustsFontSizeToFit> </Pantalla>
      ) : (
        <Pantalla type='secundaria' numberOfLines={1} adjustsFontSizeToFit>{numeroAnterior}</Pantalla>
      )}
      <StatusBar style="auto" />

    <View style={globalStyles.fila}>
      <BotonOperacion label='C' width={80} type='otro' onPress={clean}></BotonOperacion>
      <BotonOperacion label='+/-' width={80} type='otro' onPress={cambiarSigno}></BotonOperacion>
      <BotonOperacion label='del' width={80} type='otro' onPress={borrarDigito}></BotonOperacion>
      <BotonOperacion label='/' width={80} type='operacion' onPress={operacionDividir}></BotonOperacion>
    </View>
    <View style={globalStyles.fila}>
      <BotonOperacion label='7' width={80} type='numero'onPress={() =>construirNumero('7')}></BotonOperacion>
      <BotonOperacion label='8' width={80} type='numero'onPress={() =>construirNumero('8')}></BotonOperacion>
      <BotonOperacion label='9' width={80} type='numero'onPress={() =>construirNumero('9')}></BotonOperacion>
      <BotonOperacion label='x' width={80} type='operacion'onPress={operacionMultiplicar}></BotonOperacion>
    </View>
    <View style={globalStyles.fila}>
      <BotonOperacion label='4' width={80} type='numero'onPress={() =>construirNumero('4')}></BotonOperacion>
      <BotonOperacion label='5' width={80} type='numero'onPress={() =>construirNumero('5')}></BotonOperacion>
      <BotonOperacion label='6' width={80} type='numero'onPress={() =>construirNumero('6')}></BotonOperacion>
      <BotonOperacion label='-' width={80} type='operacion'onPress={operacionRestar}></BotonOperacion>
    </View>
    <View style={globalStyles.fila}>
      <BotonOperacion label='1' width={80} type='numero'onPress={() =>construirNumero('1')}></BotonOperacion>
      <BotonOperacion label='2' width={80} type='numero'onPress={() =>construirNumero('2')}></BotonOperacion>
      <BotonOperacion label='3' width={80} type='numero'onPress={() =>construirNumero('3')}></BotonOperacion>
      <BotonOperacion label='+' width={80} type='operacion'onPress={operacionSumar}></BotonOperacion>
    </View>
    <View style={globalStyles.fila}>
    <BotonOperacion label='0' size='grande' width={180} type='numero' onPress={() => construirNumero('0')} />
    <BotonOperacion label='.' width={80} type='operacion'onPress={() =>construirNumero('.')}></BotonOperacion>
    <BotonOperacion label='=' width={80} type='operacion'onPress={resultado}></BotonOperacion>
    </View>
    </View>


  );
}


