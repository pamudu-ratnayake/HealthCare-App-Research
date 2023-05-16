import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, ScrollView, FlatList} from 'react-native';

import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Text} from '../components/';

const Report = ({route}: any) => {
  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {following, trending} = useData();
  const [products, setProducts] = useState<any[]>([]);
  const {assets, colors, gradients, sizes} = useTheme();
  const navigation = useNavigation();
  const {data, tags} = route.params;
  const handleProducts = useCallback(
    (tab: number) => {
      setTab(tab);
      setProducts(tab === 0 ? following : trending);
    },
    [following, trending, setTab, setProducts],
  );

  // useEffect(() => {
  //   setProducts(data.symptoms);
  // },[data]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://backend-ap.herokuapp.com/app/predict',
  //       );
  //       const json = await response.json();
  //       setProducts(json);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const renderTag = ({item}: {item: string}) => {
    return (
      <Text color={colors.black} numberOfLines={1} ellipsizeMode="tail">
        {item}
        {','}
      </Text>
    );
  };
  return (
    <Block color={colors.card}>
      <ScrollView>
        <Block
          row
          flex={0}
          justify="center"
          paddingBottom={sizes.sm}
          color={colors.card}>
          <Image
            source={assets.reporteimg}
            style={{
              width: 400,
              height: 400,
              borderBottomLeftRadius: 70,
              borderBottomRightRadius: 70,
            }}
          />
        </Block>

        <Block
          flex={0}
          marginHorizontal={30}
          paddingBottom={sizes.sm}
          color={colors.card}>
          <Text h4>Report</Text>
        </Block>

        <Block
          row
          flex={0}
          marginHorizontal={30}
          paddingBottom={sizes.sm}
          color={colors.card}>
          <Text h5 marginRight={6}>
            Symptoms:
          </Text>
          {/* {tags?.length > 0 &&
            tags?.map((product:any,index:any) => (
              <Text h5 key={index}>
                {product}{","}
              </Text>
            ))} */}
          <FlatList
            data={tags}
            renderItem={renderTag}
            keyExtractor={(item: any, index: any) => index.toString()}
            numColumns={2}
            contentContainerStyle={{padding: sizes.padding}}
            style={{flex: 2}}
          />
        </Block>

        <Block row flex={0} marginHorizontal={30} color={colors.card}>
          <Text h5 marginRight={6}>
            Result:
          </Text>
          <View>
            <Text h5 danger>
              {data.prediction?.split('-')[0]}
            </Text>
          </View>
        </Block>

        <Block
          row
          flex={0}
          marginHorizontal={30}
          paddingBottom={sizes.sm}
          color={colors.card}>
          <Text h5 marginRight={6}>
            Accuracy:
          </Text>
          <View>
            <Text h5 danger>
              {data.prediction?.split('-')[1]}
            </Text>
          </View>
        </Block>

        <Block
          row
          flex={0}
          justify="center"
          paddingBottom={sizes.sm}
          color={colors.card}>
          <Button
            gradient={gradients.success}
            onPress={() => navigation.goBack()}>
            <Text white h5 marginHorizontal={sizes.l}>
              Back
            </Text>
          </Button>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default Report;
