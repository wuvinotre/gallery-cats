import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.View`
  flex: 1;
  background-color: #00000030;
`;

export const Header = styled.SafeAreaView`
  margin-top: ${getStatusBarHeight(true)}px;
  width: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin: 10px 60px;
`;

export const Scroll = styled.ScrollView``;

export const Content = styled.Pressable`
  align-items: center;
`;

export const Card = styled.View`
  flex: 1;
  flex-direction: row;
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  background-color: #ffffff50;
  border-radius: 25px;
  align-items: center;
`;

export const ContentCard = styled.View`
  margin: 0 25px;
  margin-right: auto;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 25px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #000;
`;
