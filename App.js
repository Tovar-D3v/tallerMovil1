import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Greeting from './components/parametros/Greeting';
import UserDetails from './components/parametros/UserDetails';
import Task from './components/parametros/Task';
import ToggleText from './components/useState/ToggleText';
import DynamicForm from './components/useState/DynamicForm';
import ClickCounter from './components/useState/ClickCounter';
import RegistrationForm from './components/Botones/RegistrationForm';
import ThemeSwitcher from './components/Botones/ThemeSwitcher';
import AlertButton from './components/Botones/AlertButton';

export default function App() {
  // const [name, setName] = useState('Wilfred');

  // const [nombre, setNombre] = useState('Wilfred');
  // const [edad, setEdad] = useState(25);
  // const [ocupacion, setOcupacion] = useState('Desarrollador Software');

  // const task = { title: "Ejercicio 3 ", complete: "completado" };

  //! 3.1
  const [userInfo, setUserInfo] = useState({ nombre: '', correo: '', contrasena: '' });
  const handleInformacion = (informacion) => {
    setUserInfo(informacion);
  }


  //! 3.2
  const [thema, setThema] = useState(false);

  const handleCambioTema = () => {
    setThema(!thema);
  }


  //! 3.3
  const [mensaje, setMensaje] = useState('Hola Mundo');


  return (
    <View style={thema ? styles.containerNegro : styles.containerClaro}>
      {/* <Greeting name={name} />
      <UserDetails nombre={nombre} edad={edad} ocupacion={ocupacion} />
      <Task task={task} /> 
      <ToggleText /> 
      <DynamicForm /> 
      <ClickCounter /> */}


      {/* Ejercicio 3.1
      <RegistrationForm onInformacion={handleInformacion}/>
      <Text>Nombre: {userInfo.nombre}</Text>
      <Text>Correo: {userInfo.correo}</Text>
      <Text>Contrasena: {userInfo.contrasena}</Text> */}

      {/* Ejercicio 3.2 
      <ThemeSwitcher onCambioTema={handleCambioTema} />
      <Text>{!thema ? 'Claro' : 'Oscuro'}</Text> */}

      {/* Ejercicio 3.3 
      <AlertButton mensaje={mensaje} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  containerClaro: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
  },
  containerNegro: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
});