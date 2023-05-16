import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Articles, Components, Home, Profile, Register, Pro, NailIdentification, Naildiseasedisplay, firstaid, SelectSymtom, Predict, SelectSymptomSinhala, PredictSinhala} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions(); 

  return (
    <Stack.Navigator screenOptions={screenOptions.stack}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen
        name="Components"
        component={Components}
        options={screenOptions.components}
      />

      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{title: t('navigation.articles')}}
      />
      
      <Stack.Screen
        name="Nailidentification"
        component={NailIdentification}
        options={{title: t('navigation.nailidentification')}}
      />
      <Stack.Screen
        name="naildiseasedisplay"
        component={Naildiseasedisplay}
        options={{title: t('navigation.naildiseasedisplay')}}
      />

    <Stack.Screen
        name="firstaid"
        component={firstaid}
        options={{title: t('navigation.firstaid')}}
      />

    <Stack.Screen
        name="SelectSymtom"
        component={SelectSymtom}
        options={{title: t('navigation.symplist')}}
      />

<Stack.Screen
        name="SelectSymtomSinhala"
        component={SelectSymptomSinhala}
        options={{title: t('navigation.symplist')}}
      />

    <Stack.Screen
        name="Predict"
        component={Predict}
        options={{title: t('navigation.symplist')}}
      />
       <Stack.Screen
        name="PredictSinhala"
        component={PredictSinhala}
        options={{title: t('navigation.symplist')}}
      />


      <Stack.Screen name="Pro" component={Pro} options={screenOptions.pro} />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
