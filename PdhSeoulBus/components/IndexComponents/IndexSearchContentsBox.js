import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
/*
 * 버스 리스트를 받아와 뿌려주는 ContentsBox
 */

const Container = styled.SafeAreaView`
  width: 100%;
  height: 90%;
  border: 1px solid black;
`;
/*
 * 버스 리스트가 너무많은 경우를 대비한 scrollview
 */
const ContainerInnerScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

function IndexSearchContentsBox() {
  return (
    <Container>
      <ContainerInnerScrollView></ContainerInnerScrollView>
    </Container>
  );
}

export default IndexSearchContentsBox;
