import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

//Hook Personalizado
const useCounter = () => {
  const [value, setValue] = useState(0);

  const setCount = () => {
    setValue(value + 1);
  };

  return [value, setCount];
};

// Hook useState
const Counter = () => {
  const [counter, setCounter] = useCounter();
  return (
    <View>
      <Text style={{fontSize: 20}}>{counter}</Text>
      <Button title="Clique aqui" onPress={() => setCounter()} />
    </View>
  );
};

const App = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Counter />
    </View>
  );
};

export default App;
