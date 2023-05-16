import React, {useCallback, useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Input, Product, Text} from '../components/';
import {ScrollView, FlatList, TouchableOpacity, View} from 'react-native';
import homeImg from '../assets/images/h3.jpg'
import {useNavigation} from '@react-navigation/core';

const Home = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {following, trending} = useData();
  const [products, setProducts] = useState(following);
  const {assets, colors, fonts, gradients, sizes} = useTheme();

  const handleProducts = useCallback(
    (tab: number) => {
      setTab(tab);
      setProducts(tab === 0 ? following : trending);
    },
    [following, trending, setTab, setProducts],
  );

  const clickNail = () => {
    navigation.navigate('Screens', {
      screen: 'nailidentification'
    });
  }

  return (
    <Block>
      {/* search input */}
      <Block color={colors.card} flex={0} padding={sizes.padding}>
        <Input search placeholder={t('common.search')} />
      </Block>
      {/* <Text>fdsf</Text> */}
      <ScrollView>
        <TouchableOpacity onPress={clickNail()}>
          <View style={{height: 150, width: 390, marginLeft: 10}} >
            <Block card padding={0} marginTop={sizes.sm}>
              <View>
                <Image
                  background
                  resizeMode="cover"
                  source={homeImg}
                  radius={sizes.cardRadius}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: sizes.s,
                    opacity: 0.5
                  }}>
                </Image>
                <Text h3 style={{marginTop: -40, textAlign: 'center'}}>Disease Prediction</Text>
              </View>
            </Block>
          </View>
        </TouchableOpacity>
        <View style={{height: 150, width: 390, marginLeft: 10}}>
          <Block card padding={0} marginTop={sizes.sm}>
            <View>
              <Image
                background
                resizeMode="cover"
                source={homeImg}
                radius={sizes.cardRadius}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: sizes.s,
                  opacity: 0.5
                }}>
              </Image>
              <Text h3 style={{marginTop: -40, textAlign: 'center'}}>Nail Disease Identify</Text>
            </View>
          </Block>
        </View>
        <View style={{height: 150, width: 390, marginLeft: 10}}>
          <Block card padding={0} marginTop={sizes.sm}>
            <View>
              <Image
                background
                resizeMode="cover"
                source={homeImg}
                radius={sizes.cardRadius}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: sizes.s,
                  opacity: 0.5
                }}>
              </Image>
              <Text h3 style={{marginTop: -40, textAlign: 'center'}}>Skin Disease Identify</Text>
            </View>
          </Block>
        </View>
        <View style={{height: 150, width: 390, marginLeft: 10}}>
          <Block card padding={0} marginTop={sizes.sm}>
            <View>
              <Image
                background
                resizeMode="cover"
                source={homeImg}
                radius={sizes.cardRadius}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: sizes.s,
                  opacity: 0.5
                }}>
              </Image>
              <Text h3 style={{marginTop: -40, textAlign: 'center'}}>First Aid</Text>
            </View>
          </Block>
        </View>
      </ScrollView>
    </Block>
  );
};

export default Home;
