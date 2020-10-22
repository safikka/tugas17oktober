import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Header from './component/header'
import TodoItem from './component/todoitem'
import AddTodo from './component/addTodo'


const App = () => {
  const [todos, setTodos] = useState([
    {text: 'P&ID', key: '1'},
    {text: 'Basic Instrument', key: '2'},
    {text: 'PLC Logic', key: '3'},
  ]);

  const sentuhHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const tambahHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        {
          text: text,
          key: Math.random().toString()
        },
        ...prevTodos
      ];
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo tambahHandler={tambahHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem 
                item={item} 
                sentuhHandler={sentuhHandler}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}

// styling
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFFF'
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});

export default App;