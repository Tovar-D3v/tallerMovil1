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
import ParentCounter from './components/punto4/ejercicio1/ParentCounter'
import Game from './components/punto4/ejercicio3/Game'
import ImageGallery from './components/punto4/ejercicio2/ImageGallery';

export default function App() {

  //? Ejercicios punto 1
  //! 1.1 
  const [name, setName] = useState('Wilfred');

  //! 1.2
  const [nombre, setNombre] = useState('Wilfred');
  const [edad, setEdad] = useState(19);
  const [ocupacion, setOcupacion] = useState('Desarrollador Software');

  //! 1.3
  const task = { title: "Ejercicio 3 ", complete: "completado" };


  //? Ejercicios punto 3
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
      {/*  Ejercicio 1.1
      <Greeting name={name} /> 
      */}

      {/* Ejercicio 1.2
      <DynamicForm />  
      */}

      {/* Ejercicio 1.3 
      <ClickCounter />  
      */}



      {/* Ejercicio 2.1
      <UserDetails nombre={nombre} edad={edad} ocupacion={ocupacion} /> 
      */}

      {/*  Ejercicio 2.2
      <Task task={task} />  
      */}

      {/* Ejercicio 2.3 
      <ToggleText />  
      */}


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


      {/* Ejercicio 4.1
      <ParentCounter />
       */}


      {/* Ejercicio 4.2 
      <ImageGallery />
      */}


      {/* Ejercicio 4.3 
      <Game />
      */}

      <Text>Wilfred Tovar Escobar</Text>
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