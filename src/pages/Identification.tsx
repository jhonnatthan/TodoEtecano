import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#232123',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  Title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#e60000',
    marginBottom: 16,
  },
  Input: {
    width: '100%',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 6,
    padding: 0,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 16,
  },
  Button: {
    width: '100%',
    backgroundColor: '#e60000',
    padding: 10,
    borderRadius: 6,
  },
  ButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const Identification = () => {
  const navigation = useNavigation();

  const [name, setName] = useState<string>('');

  const handleConfirm = () => {
    if (name !== '') {
      navigation.navigate('Todos');
    } else {
      Alert.alert('Erro', 'Preencha o nome');
    }
  };

  return (
    <View style={Styles.Container}>
      <Text style={Styles.Title}>TODO Etecano</Text>

      <TextInput
        style={Styles.Input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity style={Styles.Button} onPress={() => handleConfirm()}>
        <Text style={Styles.ButtonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Identification;
