import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const Label = styled.Text`
  width: 100%;
  font-weight: bold;
  font-size: 15px;
`;

function IndexMiddleTextArea() {
  return <Label>검색된 노선 리스트</Label>;
}

export default IndexMiddleTextArea;
