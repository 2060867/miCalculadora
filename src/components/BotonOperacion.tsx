import { Pressable, Text, StyleSheet } from "react-native";
import { colores } from "../themes/colors";
import { globalStyles } from "../themes/globalStyles";
import { tamanios } from "../themes/tamanios";

interface Props {
    label: string;
    width: number;
    type: 'numero' | 'operacion' | 'otro';
    size?: 'pequeno' | 'mediano' | 'grande'; // Tamaño del botón
    onPress?: () => void;
}

export const BotonOperacion = ({ label, type, size = 'mediano', onPress }: Props) => {
    
    const width = size === 'pequeno' ? tamanios.botonPequeno :
                  size === 'grande' ? tamanios.botonGrande :
                  tamanios.botonMediano;

    const backgroundColor =
        type === 'numero' ? colores.botonNumeroColor :
        type === 'operacion' ? colores.botonOperacionColor :
        colores.botonOtroColor;

    return (
        <Pressable style={[globalStyles.BotonOperacion, { width, backgroundColor }]} onPress={onPress}>
            <Text style={globalStyles.text}>{label}</Text>
        </Pressable>
    );
};

