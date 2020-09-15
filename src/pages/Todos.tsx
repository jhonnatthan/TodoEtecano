import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Todo from '../components/Todo';

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#232123',
    padding: 16,
    paddingBottom: 0,
  },
  InputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'stretch',
    marginBottom: 16,
  },
  Input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 0,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 100,
    marginRight: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#232123',
  },
  Button: {
    backgroundColor: '#e60000',
    width: 45,

    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonIcon: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  TodoList: {
    flex: 1,
  },
  TodoListContainer: {
    flexGrow: 1,
    paddingBottom: 16,
  },
});

const Todos = () => {
  const [todoName, setTodoName] = useState<string>('');

  const [todos, setTodos] = useState<string[]>([]);

  const handleAdd = () => {
    if (todoName !== '') {
      const newTodosList = [...todos, todoName];

      setTodos(newTodosList);

      setTodoName('');
    } else {
      Alert.alert('Erro', 'Preencha o campo');
    }
  };

  const handleUpdate = (title: string, index: number) => {
    const newTodosList = [...todos];

    newTodosList[index] = title;

    setTodos(newTodosList);
  };

  const handleRemove = (removedIndex: number) => {
    let newTodosList = [...todos];

    newTodosList = newTodosList.filter(
      (title, index) => index !== removedIndex,
    );

    setTodos(newTodosList);
  };

  return (
    <View style={Styles.Container}>
      <View style={Styles.InputContainer}>
        <TextInput
          style={Styles.Input}
          placeholder="Nome do TODO"
          placeholderTextColor="#232123"
          value={todoName}
          onChangeText={setTodoName}
        />
        <TouchableOpacity style={Styles.Button} onPress={() => handleAdd()}>
          <Icon name="plus" style={Styles.ButtonIcon} />
        </TouchableOpacity>
      </View>

      <FlatList
        style={Styles.TodoList}
        contentContainerStyle={Styles.TodoListContainer}
        data={todos}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index}) => (
          <Todo
            title={item}
            onChangeTitle={(title) => handleUpdate(title, index)}
            onRemove={() => handleRemove(index)}
          />
        )}
      />
    </View>
  );
};

export default Todos;
