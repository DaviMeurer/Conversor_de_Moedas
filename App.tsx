import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
 
export default function App() {
  const [valor, setValor] = useState('');
  const [moedas, setMoedas] = useState({});
  const [moedaSelecionada, setMoedaSelecionada] = useState('USD');
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then(res => res.json())
      .then(data => {
        setMoedas(data);
        setLoading(false);
      });
  }, []);
 
  const converter = () => {
    if (!valor || isNaN(valor)) return;
    const cotacao = parseFloat(moedas[moedaSelecionada].bid);
    const convertido = (parseFloat(valor) / cotacao).toFixed(2);
    setResultado(`${valor} BRL = ${convertido} ${moedaSelecionada}`);
  };
 
  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;
 
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de Moedas</Text>
      <TextInput
        placeholder="Digite um valor em BRL"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
        style={styles.input}
      />
      <View style={styles.select}>
        {Object.keys(moedas).map((code) => (
          <Button
            key={code}
            title={code}
            onPress={() => setMoedaSelecionada(code)}
            color={code === moedaSelecionada ? '#4CAF50' : '#ccc'}
          />
        ))}
      </View>
      <Button title="Converter" onPress={converter} />
      {resultado && <Text style={styles.resultado}>{resultado}</Text>}
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  select: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 20 },
  resultado: { fontSize: 18, textAlign: 'center', marginTop: 20 }
});