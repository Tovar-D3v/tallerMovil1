import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Greeting from './components/parametros/Greeting';
import UserDetails from './components/parametros/UserDetails';
import Task from './components/parametros/Task';
import ToggleText from './components/useState/ToggleText';
import DynamicForm from './components/useState/DynamicForm';

export default function App() {
  const [name, setName] = useState('Wilfred');

  const [nombre, setNombre] = useState('Wilfred');
  const [edad, setEdad] = useState(25);
  const [ocupacion, setOcupacion] = useState('Desarrollador Software');

  const task = { title: "Ejercicio 3 ", complete: "completado" };


  return (
    <View style={styles.container}>
      {/* <Greeting name={name} />
      <UserDetails nombre={nombre} edad={edad} ocupacion={ocupacion} />
      <Task task={task} /> 

      <ToggleText /> */}

      <DynamicForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});