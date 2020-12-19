
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppIntoLoadig from 'expo-app-loading';
import {useFonts , OpenSans_400Regular , OpenSans_700Bold} from '@expo-google-fonts/open-sans';
import Routes from './src/routes'

export default function App() {

  const [Loadided] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  })

  if(!Loadided){
    return <AppIntoLoadig />
  }

  return (
    <>
      
      <StatusBar style="auto" />
      <Routes/>
      
    </>
  );
}

