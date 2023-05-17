import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import Symtoms from '../components/Symtoms';
import NetInfo from '@react-native-community/netinfo';

const SelectSymtom = ({navigation}: {navigation: any}) => {
  const [netInfo, setNetInfo] = useState(false);
  let symtom1: string | undefined, symtom2: string | undefined, symtom3: string | undefined, symtom4: string | undefined, symtom5: string | undefined;

  useEffect(()=>{
    const netInfoData = NetInfo.addEventListener((state)=>{
      setNetInfo(state.isConnected);
    });

    return()=>{
      netInfoData();
    }
  }, []);

  const onSubmitDetails = () => {
    if(symtom1 !== undefined && symtom2 !== undefined && symtom3 !== undefined && symtom4 !== undefined && symtom5 !== undefined ){
      const dataToSend = {
        symtom1: symtom1,
        symtom2: symtom2,
        symtom3: symtom3,
        symtom4: symtom4,
        symtom5: symtom5,
      }
      if(netInfo){
        return navigation.navigate('Predict', dataToSend);
      }
      else{
        return Alert.alert("No Internet Connection!!", "Internet Connection is required to Predict Disease...");
      }
    }
    else{
      return Alert.alert("Select All","Please Select All Symptoms...");
    }
  };

  const setSymptom1 = (sym1: string)=>{
    symtom1 = sym1;
  }
  const setSymptom2 = (sym1: string)=>{
    symtom2 = sym1;
  }
  const setSymptom3 = (sym1: string)=>{
    symtom3 = sym1;
  }
  const setSymptom4 = (sym1: string)=>{
    symtom4 = sym1;
  }
  const setSymptom5 = (sym1: string)=>{
    symtom5 = sym1;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.notificationTextStyle}>Please Select 5 Symptoms </Text>
      <Symtoms getSymtom={setSymptom1}/>
      <Symtoms getSymtom={setSymptom2}/>
      <Symtoms getSymtom={setSymptom3}/>
      <Symtoms getSymtom={setSymptom4}/>
      <Symtoms getSymtom={setSymptom5}/>
      <Text style={styles.noteTextStyle}>Note:</Text>
      <Text style={styles.noteMessageStyle}>Please try to select Symptoms intelligently. Predicted result is 100% based on your selected Symptoms</Text>
      <TouchableOpacity
        style = {styles.buttonStyle}
        onPress={() => {onSubmitDetails();}}
      >
        <Text style = {styles.buttonTextStyle}>Check</Text>
      </TouchableOpacity>
      <Image 
        source={require('../assets/images/d.png')}
        style={styles.imgStyle}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginLeft: 20,
    marginTop: 30,
  },
  notificationTextStyle:{
    marginLeft:20,
    opacity:0.5,
  },
  buttonStyle:{
    backgroundColor :'green',
    borderRadius: 10,
    padding: 8,
    marginHorizontal: 110,
    marginTop: 30,
    marginBottom: 15,
  },
  buttonTextStyle:{
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  noteTextStyle:{
    marginTop: 5,
    fontWeight:'bold',
    fontSize: 16,
  },
   noteMessageStyle:{
    justifyContent: 'center',
    width: '90%',
    opacity:0.7,
  },
  imgStyle:{
    width: '95%', 
    height: 230, 
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20
  },
})
export default SelectSymtom
