import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

// import { Container } from './styles';

const Styles = StyleSheet.create({
  TodoContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
  TodoNameContainer: {
    flex: 1,
  },
  TodoName: {
    padding: 0,
    fontSize: 16,
  },
  TodoButton: {
    backgroundColor: '#232123',
    width: 35,
    height: 35,
    marginLeft: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TodoIcon: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

type Props = {
  title: string;
  onChangeTitle?: (title: string) => void;
  onRemove?: () => void;
};

const Todo = ({title, onChangeTitle, onRemove}: Props) => {
  const [text, setText] = useState<string>(title);

  useEffect(() => {
    setText(title);
  }, [title]);

  const [editing, setEditing] = useState<boolean>(false);

  const handleChanged = () => {
    setEditing(false);
    if (onChangeTitle) {
      onChangeTitle(text);
    }
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove();
    }
  };

  const handleCanceled = () => {
    setEditing(false);
    setText(title);
  };

  return (
    <View style={Styles.TodoContainer}>
      <View style={Styles.TodoNameContainer}>
        {editing ? (
          <TextInput
            style={Styles.TodoName}
            editable={editing}
            placeholder="Add Credit"
            placeholderTextColor="white"
            value={text}
            onChangeText={setText}
          />
        ) : (
          <Text style={Styles.TodoName}>{title}</Text>
        )}
      </View>

      {editing ? (
        <>
          <TouchableOpacity
            style={Styles.TodoButton}
            onPress={() => handleChanged()}>
            <Icon name="check" style={Styles.TodoIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.TodoButton}
            onPress={() => handleCanceled()}>
            <Icon name="times" style={Styles.TodoIcon} />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            style={Styles.TodoButton}
            onPress={() => setEditing(true)}>
            <Icon name="pencil-alt" style={Styles.TodoIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.TodoButton}
            onPress={() => handleRemove()}>
            <Icon name="trash" style={Styles.TodoIcon} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Todo;
