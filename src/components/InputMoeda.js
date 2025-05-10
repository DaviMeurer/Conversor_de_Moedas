import { StyleSheet, View, TextInput } from "react-native";
export default function InputMoeda(props){
    <View>
        <TextInput>
            style={styles.input}
            placeholder="Digite o valor"
            keyboardType="numeric"
            value={props.valor}
            onChangeText={(text) => props.setValor()}
        </TextInput>
    </View>
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});