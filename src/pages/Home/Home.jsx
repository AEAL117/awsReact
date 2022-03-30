import React from "react";
import { Text, View } from 'react-native';

import {styles} from "./Home.styles";

import ButtonComponent from "../../components/Button";

export default function HomeScreen({ onPress }){

    return (
      <View style={styles.container}>
        <Text>Usted está verificado como: alfredo</Text>
        <ButtonComponent title="Logout" onPress={onPress} />
      </View>
    )
  }