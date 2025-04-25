import InputMoeda from "../components/InputMoeda";
import React, { useState } from "react";
import { StyleSheet, View, Text, Button} from "react-native";
import { Picker } from "@react-native-picker/picker";
export default function TelaConversora() {
    const [valor, setValor] = React.useState("");
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Conversor de Moedas</Text>
            <InputMoeda valor={valor} setValor={setValor} />
            <Text style={styles.label}>Selecione a moeda:</Text>
            <Picker
                selectedValue="USD"
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Dólar" value="USD" />
                <Picker.Item label="Euro" value="EUR" />
                <Picker.Item label="Libra" value="GBP" />
            </Picker>
            <Button title="Converter" onPress={() => {}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    picker: {
        height: 50,
        width: 150,
        marginBottom: 20,
    },
});