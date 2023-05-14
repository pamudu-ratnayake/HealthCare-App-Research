import React, {useCallback, useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Input, Product, Text} from '../components/';
import {FlatList, TouchableOpacity, View} from 'react-native';
import homeImg from '../assets/images/h3.jpg'

const Home = () => {
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

  return (
    <Block>
      {/* search input */}
      <Block color={colors.card} flex={0} padding={sizes.padding}>
        <Input search placeholder={t('common.search')} />
      </Block>
      {/* <Text>fdsf</Text> */}
      <View style={{height: 550, width: 390, marginLeft: 10}}>
        <Block card padding={0} marginTop={sizes.sm}>
          <Image
            background
            resizeMode="cover"
            source={homeImg}
            radius={sizes.cardRadius}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: sizes.s,
              // opacity: 0.5
            }}>
          </Image>
        </Block>
      </View>
    </Block>
  );
};

export default Home;
