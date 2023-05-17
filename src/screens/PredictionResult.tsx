import React, {useCallback, useEffect, useState} from 'react';
import {
  Linking,
  Platform,
  TouchableHighlight,
  ScrollView,
  Text,
  View,
  Pressable,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/core';
import {Block, Button, Text as Text2, Image} from '../components/';
import {useTheme} from '../hooks/';
import bg2 from '../assets/images/background.png'

const isAndroid = Platform.OS === 'android';

const PredictionResult = ({route, navigation}) => {
  // const navigation = useNavigation();
  const {samplePred} = route.params;
  const {assets, colors, gradients, sizes} = useTheme();

  return (
    <SafeAreaView>
      {/* <Block card padding={0} marginTop={sizes.sm}></Block> */}
      <Image
            background
            resizeMode="cover"
            source={bg2}
            // radius={sizes.cardRadius}
            style={{
              // width: '100%',
              height: 150,
              // borderRadius: sizes.s,
            }}>
      <Text2 h2 white marginTop={sizes.l} marginLeft={sizes.m} marginBottom={sizes.m}>
        Prediction
      </Text2>

            </Image>
          {/* </Block> */}
      <ScrollView style={{height:'100%'}}>

        <View
          style={{
            marginTop: 15,
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 25,
              color: '#000000',
            }}>
            Acne Prediction
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginBottom: 10,
            marginHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 250,
              paddingVertical: 40,
              paddingHorizontal: 15,

              borderWidth: 1,
              borderColor: '#797878',
              backgroundColor: '#ffffff',
              borderRadius: 20,
            }}>
            <Text style={{textAlign: 'center'}}>{samplePred.acne_preds}</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            marginBottom: 10,

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 25,
              color: '#000000',
            }}>
            Acne Treatment
          </Text>
        </View>
        <View
          style={{
            marginTop: 15,
            marginBottom: 10,
            marginHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 250,
              paddingVertical: 40,
              borderWidth: 1,
              paddingHorizontal: 15,

              borderColor: '#797878',
              backgroundColor: '#ffffff',
              borderRadius: 20,
            }}>
            <Text style={{textAlign: 'justify'}}>
              {samplePred.acne_treatment}
            </Text>
          </View>
        </View>

        <View style={{marginTop: 50}}></View>

        <View
          style={{
            marginTop: 15,
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 25,
              color: '#000000',
            }}>
            Skin Prediction
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginBottom: 10,
            marginHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 250,
              paddingHorizontal: 15,
              paddingVertical: 40,
              borderWidth: 1,
              borderColor: '#797878',
              backgroundColor: '#ffffff',
              borderRadius: 20,
            }}>
            <Text style={{textAlign: 'center'}}>{samplePred.skin_preds}</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 25,
              color: '#000000',
            }}>
            Skin Treatment
          </Text>
        </View>
        <View
          style={{
            marginTop: 15,
            marginBottom: 10,
            marginHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 250,
              paddingVertical: 40,
              paddingHorizontal: 15,

              borderWidth: 1,
              borderColor: '#797878',
              backgroundColor: '#ffffff',
              borderRadius: 20,
            }}>
            <Text style={{textAlign: 'justify'}}>
              {samplePred.skin_treatment}
            </Text>
          </View>
        </View>

        {/* <Pressable
          style={{
            marginRight: 20,
            marginLeft: 20,
            marginTop: 30,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: '#797878',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 15,
              color: '#000000',
            }}>
            BACK
          </Text>
        </Pressable> */}
        <View
          style={{
            marginRight: 20,
            marginLeft: 20,
            marginTop: 10,
            // paddingTop: 10,
            // paddingBottom: 10,
            borderRadius: 20,
            // borderWidth: 2,
            // borderColor: '#797878',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            onPress={() => {
              navigation.goBack();
            }}
            width={'100%'}
            flex={1}
            gradient={gradients.secondary}
            // marginBottom={sizes.base}
          >
            <Text2 white bold transform="uppercase">
              Back
            </Text2>
          </Button>
        </View>
        <View style={{marginTop: 30}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PredictionResult;
