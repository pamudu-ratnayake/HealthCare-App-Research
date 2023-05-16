import { View, Text, StyleSheet, Alert, FlatList, Image, ActivityIndicator, ToastAndroid, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import axios from 'axios'
import qs from 'qs';
import translate from 'translate-google-api';
import Tts from 'react-native-tts'
import Icon from 'react-native-vector-icons/FontAwesome';
import NetInfo from '@react-native-community/netinfo'
import { GetImage } from '../components/GetSpecificImage';
const Data = require('../components/SymptomsList.json');


const Predict = ({ route }) => {
  const navigation = useNavigation();
  const symptom1 = route.params.symtom1;
  const symptom2 = route.params.symtom2;
  const symptom3 = route.params.symtom3;
  const symptom4 = route.params.symtom4;
  const symptom5 = route.params.symtom5;
  const [result, setResult] = useState('');
  const [flag, setFlag] = useState(false);

  const uploadSymptoms = () => {

    const dataToSend = {
      'csrfmiddlewaretoken': 'X8WixKhW3oM7YjZ0rsk8KkjX8MSYpOF4JoEwQKtJQdpFZWQ0n0l6ZUOP6JiS6wDq',
      'symptom1': symptom1,
      'symptom2': symptom2,
      'symptom3': symptom3,
      'symptom4': symptom4,
      'symptom5': symptom5,
    };


    axios.get(`http://192.168.8.126:8000/result/`, {
      params: dataToSend,
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((res) => {
        setResult(res.data);
        setFlag(true);
        console.log("result=====>", result)
      }).catch((err) => {
        console.error(err);
      })

  }

  useEffect(() => {
    uploadSymptoms();

    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      //Tts.stop();
      return false;
    });

    const goingBack = navigation.addListener('beforeRemove', () => {
      // Tts.stop();
    });

    return () => {
      goingBack;
      backHandler.remove();
    };
  }, []);

  //Tts.setDefaultLanguage('en');

  const DictionaryData = ({ item }) => {
    if (item.name === result) {

      console.log("result=====>", result)

      return (
        <View style={styles.container}
          key={item.id}>
          <View style={{ flexDirection: 'row', }}>
            <Text style={styles.HeadingStyle}>
              Symptoms:
            </Text>

          </View>
          <Text style={[styles.symptomStyle, styles.commonStyle]}>
            {item.symptom}
          </Text>
          <Text style={styles.HeadingStyle}>
            Precaution:
          </Text>
          <Text style={[styles.precuationStyle, styles.commonStyle]}>
            {item.precuation}
          </Text>
          <Text style={styles.HeadingStyle}>
            Description:
          </Text>
          <Text style={[styles.descriptionStyle, styles.commonStyle]}>
            {item.description}
          </Text>
          <Text style={styles.HeadingStyle}>
            Medicines Name:
          </Text>
          <Text style={[styles.descriptionStyle, styles.commonStyle]}>
            {item.Medicine_Name}
          </Text>
          <Image
            style={styles.imgStyle}
            source={{uri:item.image}}
          />
        </View>
      )
    }

  }
  return (
    <View style={styles.container}>
      {!flag ? (< ActivityIndicator size='large' color="green" style={styles.indicator} />) : (
        <View>
          <Text style={styles.result}>You seems to have an : {result}</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Data}
            initialNumToRender={40}
            renderItem={DictionaryData}
            keyExtractor={item => item.id}
          />
        </View>)
      }

    </View>
  )

  /*   const DictionaryData = ({item})=>{
       console.log('item added', item, result);
       if(item.name === result.result){
       return(
           <View style={styles.container}
               key={item.id}>
               <View style={{flexDirection: 'row',}}>
                 <Text style={styles.HeadingStyle}>
                   Symptoms:
                 </Text>
                
             </View>
               <Text style = {[styles.symptomStyle, styles.commonStyle]}>
                 {item.symptom}
               </Text>
               <Text style={styles.HeadingStyle}>
                 Precaution:
               </Text>
               <Text style = {[styles.precuationStyle, styles.commonStyle]}>
                 {item.precuation}
               </Text>
               <Text style={styles.HeadingStyle}>
                 Description:
               </Text>
               <Text style = {[styles.descriptionStyle, styles.commonStyle]}>
                 {item.description}
               </Text>
               <Text style={styles.HeadingStyle}>
                 Medicines Name:
               </Text>
               <Text style = {[styles.descriptionStyle, styles.commonStyle]}>
                 {item.Medicine_Name}
               </Text>
               <Image
               style={styles.imgStyle}
               source={GetImage(result.result)}
               />
           </View>
       )
     }
  
   }*/
  /* return (
     <View style = {styles.container}>
       <View>
         <FlatList 
           showsVerticalScrollIndicator={false}
           data={Data}
           initialNumToRender={40}
           renderItem = {DictionaryData}
           keyExtractor = {item=> item.id}
         />
       </View>
       
       
     </View>
   )*/
  return (
    <View>
      {/* Your existing JSX code here */}
      {flag && (
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
            Predicted Disease: {result}
          </Text>
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 80,
  },
  micro: {
    paddingLeft: 20,
  },
  indicator: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  confidence: {
    fontSize: 18,
  },
  symptomStyle: {
    fontWeight: 'bold',
  },
  HeadingStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 5,
  },
  precuationStyle: {
    fontStyle: 'italic',
  },
  descriptionStyle: {
    opacity: .9,
  },
  commonStyle: {
    margin: 5,
    marginLeft: 10,
  },
  resultDescription: {
    height: 10000,
  },
  imgStyle: {
    width: 300,
    height: 250,
    marginTop: 5,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20,
  }
})
export default Predict