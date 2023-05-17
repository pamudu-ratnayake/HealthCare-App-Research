import React, {useCallback, useEffect, useState} from 'react';
import {MultipleSelectList} from 'react-native-dropdown-select-list';
import {useNavigation} from '@react-navigation/native';

import {View, ScrollView, TouchableOpacity} from 'react-native';

import {useData, useTheme, useTranslation} from '../hooks';
import {
  Block,
  Switch,
  Button,
  Image,
  Input,
  Product,
  Text,
} from '../components';
import axios from 'axios';

const Update = ({route}: any) => {
  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {following, trending} = useData();
  const [products, setProducts] = useState(following);
  const {isDark, handleIsDark} = useData();
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const [selected, setSelected] = React.useState([]);
  const navigation = useNavigation();
  const {text, tags} = route.params;

  const [availableData, setAvailableData] = useState<any>([]);

  const apiEndpoint = 'https://backend-ap.herokuapp.com/app/predict';
  const fetchPrediction = async () => {
    console.log(text, selected);

    const response = await axios
      .post(apiEndpoint, {
        text: text,
        symptoms: JSON.stringify([...tags, ...selected]),
      })
      .then((response) => {
        console.log(response.data);
        navigation.navigate('Report', {
          data: response.data,
          tags: [...tags, ...selected],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const data = [
    {key: '1', value: 'COUGH'},
    {key: '2', value: 'MUSCLE_ACHES'},
    {key: '3', value: 'TIREDNESS'},
    {key: '4', value: 'SORE_THROAT'},
    {key: '5', value: 'RUNNY_NOSE'},
    {key: '6', value: 'STUFFY_NOSE'},
    {key: '7', value: 'FEVER'},
    {key: '8', value: 'NAUSEA'},
    {key: '9', value: 'VOMITING'},
    {key: '10', value: 'DIARRHEA'},
    {key: '11', value: 'SHORTNESS_OF_BREATH'},
    {key: '12', value: 'DIFFICULTY_BREATHING'},
    {key: '13', value: 'LOSS_OF_TASTE'},
    {key: '14', value: 'LOSS_OF_SMELL'},
    {key: '15', value: 'ITCHY_NOSE'},
    {key: '16', value: 'ITCHY_EYES'},
    {key: '17', value: 'ITCHY_MOUTH'},
    {key: '18', value: 'Appliances'},
    {key: '19', value: 'ITCHY_INNER_EAR'},
    {key: '20', value: 'SNEEZING'},
    {key: '21', value: 'PINK_EYE'},
    {key: '22', value: 'SKIN_RASH'},
    {key: '23', value: 'CHILLS'},
    {key: '24', value: 'JOINT_PAIN'},
    {key: '25', value: 'FATIGUE'},
    {key: '26', value: 'HEAD_ACHE'},
    {key: '27', value: 'LOSS_OF_APPETITES'},
    {key: '28', value: 'PAIN_BEHIND_THE_EYES'},
    {key: '29', value: 'BACK_PAIN'},
    {key: '30', value: 'MALAISE'},
    {key: '31', value: 'RED_SPOTS_OVER_BODY'},
  ];

  useEffect(() => {
    setAvailableData(data?.filter((item: any) => !tags.includes(item.value)));
  }, [tags]);
  console.log('available', availableData);
  const handleProducts = useCallback(
    (tab: number) => {
      setTab(tab);
      setProducts(tab === 0 ? following : trending);
    },
    [following, trending, setTab, setProducts],
  );

  return (
    <Block color={colors.card}>
      {/* search input */}

      <ScrollView>
        <Block
          row
          flex={0}
          justify="center"
          paddingBottom={sizes.l}
          color={colors.card}>
          <Text h3>Update Symptoms</Text>
        </Block>

        <Block flex={0} paddingBottom={sizes.l} color={colors.card}>
          <View style={{flex: 1}} />
          <View
            style={{
              width: '100%',
              paddingLeft: 40,
              paddingRight: 40,
            }}>
            <MultipleSelectList
              setSelected={(val: any) => setSelected(val)}
              data={availableData}
              save="value"
              label="Categories"
              placeholder="Please select less than 15"
              searchPlaceholder="Please select less than 15"
            />
          </View>
        </Block>

        <Block
          row
          flex={0}
          justify="center"
          paddingBottom={sizes.sm}
          color={colors.card}>
          <TouchableOpacity
            onPress={() => {
              fetchPrediction();
            }}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 12,
              paddingHorizontal: 40,
              borderRadius: 40,
              backgroundColor: 'purple',
              borderWidth: 1,
              borderColor: 'purple',
              elevation: 5, // Add elevation for shadow effect
            }}>
            <Text h5 white marginHorizontal={sizes.s}>
              Prediction
            </Text>
          </TouchableOpacity>
        </Block>

        <Block
          row
          flex={0}
          justify="center"
          paddingBottom={sizes.sm}
          color={colors.card}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 12,
              paddingHorizontal: 40,
              borderRadius: 40,
              backgroundColor: 'grey',
              borderWidth: 1,
              borderColor: 'grey',
              elevation: 5, // Add elevation for shadow effect
            }}>
            <Text h5 white marginHorizontal={sizes.s}>
              Back
            </Text>
          </TouchableOpacity>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default Update;