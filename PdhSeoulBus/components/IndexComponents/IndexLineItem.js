import React, {useState, useEffect} from 'react';
import type {Node} from 'react';

import styled from 'styled-components';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Container = styled.TouchableOpacity`
  width: 38%;
  height: 170px;
  margin: 20px;
  margin-bottom: 0px;
  background-color: white;
`;

const routeIdTextView = styled.Text`
  width: 100%;
  height: 23%;
  color: black;
  text-align: center;
`;

const routeNumTextView = styled.Text`
  width: 100%;
  height: 15%;
  color: black;
  text-align: center;
`;

//const Login: () => Node = ({navigation}) => {
const IndexLineItem: () => Node = props => {
  const navigation = useNavigation();
  function goDescriptionPage() {
    var data = {};
    //navigation.navigate('MarketMainDescription', {data: data});
  }
  return (
    <Container onPress={goDescriptionPage}>
      <routeIdTextView>{}</routeIdTextView>
      <routeNumTextView>{}</routeNumTextView>
    </Container>
  );
};

export default IndexLineItem;
