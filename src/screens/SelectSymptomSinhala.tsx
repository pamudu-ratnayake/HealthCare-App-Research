import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import Symtoms from '../components/SymtomsSinhala';
import NetInfo from '@react-native-community/netinfo';

const SelectSymtomSinhala = ({navigation}: {navigation: any}) => {
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
        return navigation.navigate('PredictSinhala', dataToSend);
      }
      else{
        return Alert.alert("අන්තර්ජාල සම්බන්ධතාවයක් නැත!!", "රෝගය පුරෝකථනය කිරීමට අන්තර්ජාල සම්බන්ධතාවයක් අවශ්‍ය වේ...");
      }
    }
    else{
      return Alert.alert("සියල්ල තෝරන්න","කරුණාකර සියලුම රෝග ලක්ෂණ තෝරන්න...");
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
      <Text style={styles.notificationTextStyle}>කරුණාකර රෝග ලක්ෂණ 5ක් තෝරන්න </Text>
      <Symtoms getSymtom={setSymptom1}/>
      <Symtoms getSymtom={setSymptom2}/>
      <Symtoms getSymtom={setSymptom3}/>
      <Symtoms getSymtom={setSymptom4}/>
      <Symtoms getSymtom={setSymptom5}/>
      <Text style={styles.noteTextStyle}>සටහන:</Text>
      <Text style={styles.noteMessageStyle}>කරුණාකර රෝග ලක්ෂණ බුද්ධිමත්ව තෝරා ගැනීමට උත්සාහ කරන්න. පුරෝකථනය කළ ප්‍රතිඵලය 100% ඔබේ තෝරාගත් රෝග ලක්ෂණ මත පදනම් වේ</Text>
      <TouchableOpacity
        style = {styles.buttonStyle}
        onPress={() => {onSubmitDetails();}}
      >
        <Text style = {styles.buttonTextStyle}>පරීක්ෂා කරන්න</Text>
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
    marginTop: 8,
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
    marginTop: 5,
    left:-70,
    width:250,
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
    height: 200, 
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20
  },
})
export default SelectSymtomSinhala
