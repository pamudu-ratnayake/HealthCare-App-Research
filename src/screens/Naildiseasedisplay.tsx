import React, {useEffect, useState} from 'react';
import {ScrollView, FlatList, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {useData, useTheme} from '../hooks/';
import {Block, Button, Input, Image, Switch, Modal, Text} from '../components/';
import bg2 from '../assets/images/bg2.jpg'

const Naildiseasedisplay = ({route}) => {
  const navigation = useNavigation();
  const {sizes} = useTheme();
  const [diseaseData, setDiseaseData] = useState({});
  const [diseaseSteps, setDiseaseSteps] = useState([]);

  useEffect(() => {
    const initData = () => {
      const {data} = route.params;
      const parsedData = JSON.parse(data);
      setDiseaseData(parsedData);
      console.log('params are =========>', parsedData);
      // setDiseaseSteps();
    };
    initData();
  }, []);

  return (
    <Block marginTop={sizes.m} paddingHorizontal={sizes.padding}>
      <Text h4 marginBottom={sizes.m}>
        Your disease might be...
      </Text>
      <Text h5 marginBottom={sizes.m}>
        with the accuracy level of {diseaseData && diseaseData.accuracy.toFixed(0)}%
      </Text>
      <View style={{height: 550}}>
        <Block card padding={0} marginTop={sizes.sm}>
          <Image
            background
            resizeMode="cover"
            source={bg2}
            radius={sizes.cardRadius}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: sizes.s,
            }}>
            <Block color="rgba(0,0,0,0.3)" padding={sizes.padding}>
              <Text h4 white marginBottom={sizes.sm}>
                {diseaseData && diseaseData.disease}
              </Text>
              <ScrollView>
                <Text p black>
                  {diseaseData && diseaseData.description}
                </Text>
                {diseaseData.steps &&
                  diseaseData.steps.map((step, index) => (
                    <Text key={index} p black style={{
                      marginLeft: 20,
                      marginBottom: 10,
                      marginTop: 10
                    }}>
                      {index + 1}. {step}
                    </Text>
                  ))}
              </ScrollView>
            </Block>
          </Image>
        </Block>
      </View>
    </Block>
  );
};

export default Naildiseasedisplay;
