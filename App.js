import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import Amplify from "aws-amplify";
import awsconfig from "./src/aws-exports"
import { withAuthenticator } from 'aws-amplify-react-native/dist/Auth';
import { StatusBar } from 'expo-status-bar';
import MainNavigator from "./src/components/Navigator"
import {GlobalProvider} from "./src/context/global/Global.context"
 
Amplify.configure(awsconfig);


export function App() {
  return (
     <GlobalProvider>
       <MainNavigator />
     </GlobalProvider>  
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

export default withAuthenticator(App);