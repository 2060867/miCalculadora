import { StyleSheet } from "react-native";
import { colores } from "./colors";
import { tamanios } from "./tamanios";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const globalStyles = StyleSheet.create({
    BotonOperacion: {
        padding: 10,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colores.colorBorde,
        borderWidth: 2,
    },
    text: {
        color: colores.colorTexto,
        fontSize: 18,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor:colores.colorFondo,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },
    fila: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom: 16,
        paddingHorizontal: 10,
        width: '100%',
    },  
    pantallaPrincipal: {
      fontSize: tamanios.fontPantalla,
      textAlign: 'right',
      fontWeight:400,
      width: '90%',

  },
    pantallaPequeña: {
      borderRadius:15,
      backgroundColor:colores.colorPantalla,
      fontSize: tamanios.fontPantallaSecundaria,
      textAlign: 'right',
      width: '90%',
  }
});
