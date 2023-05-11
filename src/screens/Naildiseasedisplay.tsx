import React, {useEffect, useState} from 'react';
import {ScrollView, FlatList, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {useData, useTheme} from '../hooks/';
import {Block, Button, Input, Image, Switch, Modal, Text} from '../components/';

const Naildiseasedisplay = ({route}) => {
  const navigation = useNavigation();
  const {assets, colors, gradients, sizes} = useTheme();
  const [diseaseData, setDiseaseData] = useState({});
  const [diseaseSteps, setDiseaseSteps] = useState([]);

  useEffect(() => {
    const initData = () => {
      const {data} = route.params;
      const parsedData = JSON.parse(data);
      setDiseaseData(parsedData);
      // setDiseaseSteps();
    };
    initData();
  }, []);
  console.log('params are =========>', diseaseData);

  return (
    <Block marginTop={sizes.m} paddingHorizontal={sizes.padding}>
      <Text h4 marginBottom={sizes.m}>
        Your disease should be...
      </Text>
      <View style={{height: 550}}>
        <Block card padding={0} marginTop={sizes.sm}>
          <Image
            background
            resizeMode="cover"
            source={assets.card5}
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
                <Text p white>
                  {diseaseData && diseaseData.description}
                </Text>
                {diseaseData &&
                  diseaseData.steps.map((step, index) => (
                    <Text key={index} p white>
                      {index}. {step}
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
