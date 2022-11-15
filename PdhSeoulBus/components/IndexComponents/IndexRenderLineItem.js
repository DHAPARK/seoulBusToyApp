import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {Platform, View, Text, StyleSheet} from 'react-native';

const Container = styled.SafeAreaView`
  width: 95%;
  height: 67%;
  background-color: black;
  margin: 0 auto;
  margin-bottom: 5%;
  border-radius: 7px;
  border: 0.5px solid gray;
`;

const InnerScrollView = styled.ScrollView`
  padding-top: 10px;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 7px;
`;

const TransactionView = styled.TouchableOpacity`
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  flex-direction: row;
`;

//하나의 트랜잭션을 담는 뷰, to->from and 날짜까지
const SemiContainerForEachTransaction = styled.View`
  width: 90%;
  margin: 0 auto;
  border: 2px solid rgba(226, 226, 226, 1);
  border-radius: 5px;
  margin-top: 2px;
  padding-top: 7px;
`;

function IndexRenderLineItem(props) {
  //index에 저장해둔 UsageHistory를 전부 가져온다

  return (
    <Container style={styles.shadow}>
      <InnerScrollView>
        {typeof props.busInfo == undefined || props.busInfo == null ? (
          <Text>데이터 로드중...</Text>
        ) : (
          props.busInfo.map((item, index) => {
            return (
              //결제일때
              <SemiContainerForEachTransaction key={index}>
                <TransactionView
                  onPress={props.onPress(item.busRouteNm, item.busRouteId)}>
                  <Text style={styles.textStyle}>
                    {item.busRouteNm + ',' + item.busRouteId}
                  </Text>
                </TransactionView>
              </SemiContainerForEachTransaction>
            );
          })
        )}
      </InnerScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#95B3D7',
        shadowOffset: {width: -5, height: 10},
        shadowOpacity: 0.5,
        shadowRadius: 2.8,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default IndexRenderLineItem;
