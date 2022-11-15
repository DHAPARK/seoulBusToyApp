import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  width: 100%;
  height: 5%;
`;

const SearchInput = styled.TextInput`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid black;
  font-size: 15px;
`;

function IndexSearchInput(props) {
  return (
    <Container>
      <SearchInput
        placeholder="버스 검색"
        onChangeText={props.onChangeText}></SearchInput>
    </Container>
  );
}

export default IndexSearchInput;
