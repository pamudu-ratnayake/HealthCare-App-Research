import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import {useData, useTheme} from '../hooks/';
import {Block, Button, Input, Image, Switch, Modal, Text} from '../components/';
import {useNavigation} from '@react-navigation/core';
import axios from 'axios';

import uploadPhoto from '../assets/images/uploadPhoto.jpg';

const NailIdentification = () => {
  const navigation = useNavigation();
  const {assets, colors, gradients, sizes} = useTheme();
  const [image, setImage] = useState<string | undefined>();
  const formData = new FormData();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      console.log('working --->', result.uri);
      setImage(result.uri);
    }
  };

  async function pickImageFromCamera() {
    console.log('pickImageFromCamera');
    try {
      const status = await ImagePicker.requestCameraPermissionsAsync();
      console.log(status);
      if (!status.granted) {
        return;
      }
      // let result = await ImagePicker.launchCameraAsync({
      //   mediaTypes: ImagePicker.MediaTypeOptions.All,
      //   aspect: [4, 3],
      //   quality: 1,
      // });
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (result?.cancelled == false) {
        // setSubmitError(null);
        setImage(result.uri);
      }
    } catch (error) {
      console.log('pickImageFromCamera', error);
    }
  }

  const predictDisease = () => {
    console.log('button pressed');

    formData.append('image', {
      uri: image,
      type: 'image/jpeg', // or whatever file type the image is
      name: 'image.jpg',
    });

    axios
      .post(`http://192.168.43.245:8001/disease`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log('success', res.data);
        navigation.navigate('Screens', {
          screen: 'naildiseasedisplay',
          params: {
            data: res.data,
          },
        });
      })
      .catch((error) => {
        console.log('fail', error);
      });
  };

  const cancelBtn = () => {
    setImage(undefined);
  }

  return (
    <Block marginTop={sizes.m} paddingHorizontal={sizes.padding}>
      <Text h4 marginBottom={sizes.m}>
        Nail Disease Identification
      </Text>
      {/* onPress={handleChoosePhoto} */}
      {/* <TouchableOpacity > */}
      <View style={{height: 500, marginTop: 30}}>
        <Block card>
          {image && (
            <Image
              source={{uri: image}}
              style={{width: 250, height: 250, marginTop: 40, marginLeft: 30}}
            />
          )}
          {!image && (
            <Image
              source={uploadPhoto}
              style={{width: 250, height: 250, marginTop: 40, marginLeft: 30}}
            />
          )}
          <View
            style={{height: 50, width: 200, marginLeft: 55, marginTop: 80}}>
            {!image && (
              <Block>
                <Button
                flex={1}
                gradient={gradients.primary}
                marginBottom={sizes.base}
                onPress={pickImageFromCamera}>
                <Text white bold transform="uppercase">
                  Take Photo
                </Text>
                </Button>
                <Button
                flex={1}
                gradient={gradients.primary}
                marginBottom={sizes.base}
                onPress={pickImage}>
                <Text white bold transform="uppercase">
                  Upload Photo
                </Text>
                </Button>
              </Block>
            )}
            {image && (
              <Block row>
                <Button
                  flex={1}
                  gradient={gradients.secondary}
                  marginBottom={sizes.base}
                  onPress={cancelBtn}
                  style={{marginRight: 10}}>
                  <Text white bold transform="uppercase">
                    Cancel
                  </Text>
                </Button>
                <Button
                  flex={1}
                  gradient={gradients.primary}
                  marginBottom={sizes.base}
                  onPress={predictDisease}>
                  <Text white bold transform="uppercase">
                    Submit
                  </Text>
                </Button>
              </Block>
            )}
            
          </View>
        </Block>
      </View>
      {/* </TouchableOpacity> */}
    </Block>
  );
};

export default NailIdentification;
