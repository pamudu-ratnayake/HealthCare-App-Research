import React, {useCallback, useEffect} from 'react';
import {Linking, StatusBar, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Text} from '../components/';
import img from '../assets/images/First.png';
import bg2 from '../assets/images/background.png'

const firstaid = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const {assets, colors, gradients, sizes} = useTheme();

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    return () => {
      StatusBar.setBarStyle('dark-content');
    };
  }, []);

  const handleWebLink = useCallback((url) => Linking.openURL(url), []);

  return (
    // <Image
    //   background
    //   source={assets.background}
    //   padding={sizes.padding}
    //   style={{flex: 1}}>
    <Block safe justify="center">
      
      {/* <Block
        card
        flex={0}
        // padding={sizes.sm}
        marginBottom={sizes.sm}
        marginLeft={sizes.sm}
        marginRight={sizes.sm}> */}
          <Image
            background
            resizeMode="cover"
            source={bg2}
            radius={sizes.cardRadius}
            style={{
              // width: '100%',
              height: 550,
              marginLeft: sizes.s,
              marginRight: sizes.s,
              borderRadius: sizes.s,
            }}>
          <Text h3 center white bold marginTop={sizes.sm}>
            {t('firstaid.title')}
          </Text>

          <Image
            source={img}
            style={{height: 250, width: 250, marginLeft: 50, marginTop: 50, marginBottom: 100}}
          />

          {/*  <Text marginBottom={sizes.padding}>{t('pro.appTemplate')}</Text>

            <Text semibold>{t('pro.components', {count: 11})}</Text>
            <Text semibold>{t('pro.screens', {count: 18})}</Text>
            <Text semibold>{t('pro.support')}</Text>

            <Text marginVertical={sizes.padding}>{t('pro.saveTime')}</Text>

            <Text>{t('pro.takeAdvantage')}</Text>*/}

          <Block
            row
            flex={0}
            justify="space-evenly"
            marginVertical={sizes.padding}>
            {/* <Image
                source={assets.ios}
                color={colors.icon}
                style={{height: 38, width: 82}}
              />
              <Image
                source={assets.android}
                color={colors.icon}
                style={{height: 38, width: 140}}
                />*/}
          </Block>

          <View style={styles.column}>
            <View style={styles.row}>
              <Button
                style={styles.btn1}
                gradient={gradients.dark}
                onPress={() => navigation.navigate('SelectSymtomSinhala')}>
                <Text white bold transform="uppercase">
                  සිංහල
                </Text>
              </Button>

              <Button
                style={styles.btn2}
                gradient={gradients.dark}
                onPress={() => navigation.navigate('SelectSymtom')}>
                <Text white bold transform="uppercase">
                  English
                </Text>
              </Button>
            </View>
          </View>
              
            </Image>
      {/* </Block> */}
    </Block>
    // </Image>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    top: -60,
    justifyContent: 'center'
  },
  btn1: {
    height: 38,
    width: 140,
   
  },
  btn2: {
    height: 38,
    width: 140,
    left: 5,
  },
});

export default firstaid;
