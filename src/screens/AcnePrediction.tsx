import React, {useCallback, useEffect, useState} from 'react';
import {
  Linking,
  Platform,
  TouchableHighlight,
  ScrollView,
  Text,
  View,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import AppLoading from 'expo-app-loading';
import {Button, Text as Text2} from '../components/';
import {useTheme} from '../hooks/';

const isAndroid = Platform.OS === 'android';

const AcnePrediction = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState<any | null>(null);
  const [submitError, setSubmitError] = useState<String | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {assets, colors, gradients, sizes} = useTheme();

  async function pickImageFromCamera() {
    console.log('pickImageFromCamera');
    try {
      const status = await ImagePicker.requestCameraPermissionsAsync();
      console.log(status);
      if (!status.granted) {
        return;
      }
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [4, 3],
        quality: 1,
      });

      if (result?.cancelled == false) {
        setSubmitError(null);
        setImage(result);
      }
    } catch (error) {
      console.log('pickImageFromCamera', error);
    }
  }

  async function pickImageFromGallery() {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [4, 3],
        quality: 1,
      });

      console.log('result-----------', result);

      if (result?.cancelled == false) {
        setSubmitError(null);
        setImage(result);
      }
    } catch (error) {
      console.log('pickImageFromGallery', error);
    }
  }

  return (
    <SafeAreaView>
      {isModalOpen ? (
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.05)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 250,
              paddingHorizontal: 20,
              paddingVertical: 60,
              borderRadius: 20,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size="large" color="#0000ff" />
            {/* <Text
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: 15,
                color: '#000000',
              }}>
              Loading...
            </Text> */}
          </View>
        </View>
      ) : (
        <ScrollView>
          <Text2 h4 marginLeft={sizes.m} marginBottom={sizes.m}>
            Acne Identification
          </Text2>
          {/* <Text >
            
          </Text> */}
          {/* <View
          style={{
            marginTop: 55,
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
            Upload your image
          </Text>
        </View> */}
          <View
            style={{
              marginTop: 25,
              marginBottom: 10,
              marginHorizontal: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: image?.uri ? 250 : 150,
                height: image?.uri ? 250 : 150,
                borderWidth: 1,
                borderColor: '#797878',
                backgroundColor: '#ffffff',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {image?.uri ? (
                <Image
                  source={{uri: image?.uri}}
                  style={{height: '100%', width: '100%', borderRadius: 20}}
                />
              ) : (
                <Text
                  style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: 15,
                    color: '#797878',
                  }}>
                  No image selected
                </Text>
              )}
            </View>
          </View>
          {image?.uri ? null : (
            <TouchableOpacity onPress={pickImageFromCamera}>
              <View
                style={{
                  marginTop: 20,
                  marginBottom: 10,
                  marginHorizontal: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: '100%',
                    borderWidth: 1,
                    borderColor: '#797878',
                    backgroundColor: '#ffffff',
                    borderRadius: 10,
                    borderStyle: 'dotted',
                  }}>
                  <View
                    style={{
                      paddingHorizontal: 15,
                      paddingVertical: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}>
                    <View
                      style={{
                        paddingBottom: 10,
                        backgroundColor: 'rgba(52, 52, 52, 0.0)',
                      }}>
                      <Image
                        source={require('./../assets/images/camera_icon.png')}
                        style={{height: 40, width: 40}}
                      />
                    </View>
                    <View
                      style={{
                        paddingBottom: 10,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Poppins',
                          fontStyle: 'normal',
                          fontWeight: '500',
                          fontSize: 15,
                          color: '#797878',
                        }}>
                        Take a Photo
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          {image?.uri ? null : (
            <TouchableOpacity onPress={pickImageFromGallery}>
              <View
                style={{
                  marginTop: 5,
                  marginBottom: 10,
                  marginHorizontal: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: '100%',
                    borderWidth: 1,
                    borderColor: '#797878',
                    backgroundColor: '#ffffff',
                    borderRadius: 10,
                    borderStyle: 'dotted',
                  }}>
                  <View
                    style={{
                      paddingHorizontal: 15,
                      paddingVertical: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}>
                    <View
                      style={{
                        paddingBottom: 10,
                      }}>
                      <Image
                        source={require('./../assets/images/upload_icon.png')}
                        style={{height: 40, width: 40}}
                      />
                    </View>
                    <View
                      style={{
                        paddingBottom: 10,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Poppins',
                          fontStyle: 'normal',
                          fontWeight: '500',
                          fontSize: 15,
                          color: '#797878',
                        }}>
                        Browse your image
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          {!image?.uri ? null : (
            <View
              style={{
                height: 140,
              }}></View>
          )}
          <View
            style={{
              marginTop: 30,
            }}></View>

          {submitError !== null ? (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15,
                marginBottom: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: 15,
                  color: 'red',
                }}>
                {submitError}
              </Text>
            </View>
          ) : null}
          <View
            style={{
              marginRight: 20,
              marginLeft: 20,
              // marginTop: 10,
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
                if (image == null) {
                  setSubmitError('Please select an image');
                  return;
                } else {
                  setSubmitError(null);
                }
                const samplePred = {
                  acne_preds: 'The Acne type is Blackheads',
                  acne_treatment:
                    'Good to use products include Retinoids, Salicylic acid (Bea hydroxy acid- BHA), Benzoyl, peroxide, Lactic acid, Charcoal',
                  skin_preds: 'The Skin type is Oily',
                  skin_treatment:
                    'Good to use products include Dimethicone, lactic, glycolic, and salicylic acid Avoid using products including paraffin, cocoa butter, or oils',
                };

                console.log(image);

                // navigation.navigate('PredictionResult', {samplePred: samplePred});
                setIsModalOpen(true);
                let data = new FormData();
                // return;
                data.append('image', {
                  uri: image?.uri,
                  name: 'image.jpg',
                  type: 'image/jpeg',
                });
                axios
                  .post(
                    'http://192.168.43.245:8002/app/image', //HERE CHANGE API URL
                    data,
                    {
                      headers: {
                        accept: 'application/json',
                        // 'Accept-Language': 'en-US,en;q=0.8',
                        'Content-Type': `multipart/form-data;`, // boundary=${data._boundary}
                      },
                    },
                  )
                  .then((response) => {
                    console.log('response:::-------', response?.data);
                    setIsModalOpen(false);
                    if (!response?.data?.acne_preds) {
                      setSubmitError('Error response from api');
                      return;
                    }
                    setImage(null);
                    navigation.navigate('PredictionResult', {
                      samplePred: response?.data,
                    });
                  })
                  .catch((error) => {
                    setIsModalOpen(false);
                    console.log('some error occured', error);
                    setSubmitError('some error occured');
                  });
              }}
              width={'100%'}
              flex={1}
              gradient={gradients.primary}
              // marginBottom={sizes.base}
            >
              <Text2 white bold transform="uppercase">
                Submit
              </Text2>
            </Button>
            {/* <Text
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: 15,
                color: '#000000',
              }}>
              SUBMIT
            </Text> */}
          </View>

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

          {/* <Pressable
            style={{
              marginRight: 20,
              marginLeft: 20,
              marginTop: 10,
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
          <View style={{marginTop: 30}}></View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default AcnePrediction;
