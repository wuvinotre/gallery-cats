import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.View`
  flex: 1;
  background-color: #189ab425;
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

export const ContainerCard = styled.View`
  align-items: center;
`;

export const Card = styled.View`
  flex: 1;
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  flex-direction: row;

  border-radius: 25px;
  background-color: #05445e25;
`;

export const ContentCard = styled.View`
  padding: 0 15px;
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
