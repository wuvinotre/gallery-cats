import styled from "styled-components/native"; 
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.View`
flex: 1;
background-color: #189AB425;;
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight(true)}px;
  width: 100%;
  align-items: center;   
 ` 

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
font-size: 18px;
margin: 10px 60px;
`

export const Scroll = styled.ScrollView``;

export const Content = styled.View`
align-items: center;
`;

export const Card = styled.View`
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 25px;
    background-color: #05445E25;
`;

export const Image = styled.Image`
  width: 125px;
  height: 125px;
  border-radius: 25px;
  `;

export const Text = styled.Text`
font-size: 16px;
color: #000;
`;