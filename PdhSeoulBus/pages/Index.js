import React, {useState} from 'react';
import type {Node} from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Platform, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import IndexContainer from '../components/IndexComponents/IndexContainer';
import IndexSearchInput from '../components/IndexComponents/IndexSearchInput';
import IndexSearchContentsBox from '../components/IndexComponents/IndexSearchContentsBox';
import IndexMiddleTextArea from '../components/IndexComponents/IndexMiddleTextArea';
import IndexRenderLineItem from '../components/IndexComponents/IndexRenderLineItem';

//ConfigList
import CFL from '../config/config';

async function searchLines(strSrch) {
  return await axios(
    `${
      CFL.DOMAIN + CFL.LOAD_BUS_URL + CFL.API_KEY
    }&strSrch=${strSrch}&resultType=json`,
    {
      method: 'get',
      headers: {
        'Content-type': 'Application/json',
        Accept: 'Application/json',
        Authorization: 'jwt',
      },
      data: undefined,
    },
  );
}

async function getStations(routeNum, routeId) {
  console.log(`${(routeNum, routeId)}`);
  return await axios(
    `${
      CFL.DOMAIN + CFL.LOAD_BUS_URL + CFL.API_KEY
    }&busRouteId=${routeId}&resultType=json`,
    {
      method: 'get',
      headers: {
        'Content-type': 'Application/json',
        Accept: 'Application/json',
        Authorization: 'jwt',
      },
      data: undefined,
    },
  );
}

const Index: () => Node = ({navigation}) => {
  const [lineInfo, setLineInfo] = useState(null);
  const [busInfo, setBusInfo] = useState(null);
  return (
    <IndexContainer>
      <IndexSearchInput
        onChangeText={strSrch => {
          setLineInfo(searchLines(strSrch));
          try {
            setBusInfo(lineInfo['_j']['data']['msgBody']['itemList']);
            console.log(
              JSON.stringify(busInfo) +
                '\n\n\n\n##############################################\n\n',
            );
          } catch (e) {
            console.log(e);
          }
        }}></IndexSearchInput>
      <IndexMiddleTextArea></IndexMiddleTextArea>

      <IndexRenderLineItem
        busInfo={busInfo}
        onPress={() => {
          getStations();
        }}></IndexRenderLineItem>
    </IndexContainer>
  );
};

export default Index;
