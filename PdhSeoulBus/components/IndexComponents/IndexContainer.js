import styled from 'styled-components/native';
//각 스타일 다르게 주기위해 import
import {Dimensions} from 'react-native';
import {Platform, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;
const height = Math.floor(Dimensions.get('window').height);

const IndexContainer = styled.SafeAreaView`
  width: ${width}px;
  height: ${height}px;
  flex-direction: column;
  justify-content: space-between;
`;

export default IndexContainer;
