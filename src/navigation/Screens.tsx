import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Articles, Components, Home, Profile, Register, Pro, NailIdentification, Naildiseasedisplay} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';
import AcnePrediction from '../screens/AcnePrediction';
import PredictionResult from '../screens/PredictionResult';
import DiseasePrediction from '../screens/DiseasePrediction';
import Update from '../screens/Update';
import Report from '../screens/Report';

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
        name="Diseaseprediction"
        component={DiseasePrediction}
        options={{title: t('navigation.diseaseprediction')}}
      />
      <Stack.Screen
        name="naildiseasedisplay"
        component={Naildiseasedisplay}
        options={{title: t('navigation.naildiseasedisplay')}}
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
      <Stack.Screen name="Report" component={Report} />
      
      <Stack.Screen name="Update" component={Update} />
      
      <Stack.Screen
        name="AcnePrediction"
        component={AcnePrediction}
        options={{headerShown: true}}
      />

      <Stack.Screen
        name="PredictionResult"
        component={PredictionResult}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
