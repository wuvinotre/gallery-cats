import React, { JSXElementConstructor, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "../../store/modules/home/slice";
import Icon from "react-native-vector-icons/Ionicons";

import {
  Container,
  Header,
  Scroll,
  Content,
  Card,
  ContentCard,
  Text,
  Title,
  Image,
  SubTitle,
} from "./styled";

type Props = {
  navigation: JSX.Element;
};

type State = {
  cats: any;
  state: string;
};

type Image = {
  url: string;
};

type Cat = {
  id: string;
  image: Image;
  name: string;
  origin: string;
};

export const HomeScreen = ({ navigation }: Props) => {
  const cats = useSelector((state: State) => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  const detailCat = () => {
    navigation.navigate("Details");
  };

  return (
    <Container>
      <Scroll>
        <Header>
          <Title>Galeria de espécies felinas</Title>
          <SubTitle>
            Imagens de diferentes espécies de gatos. Muitos gatos para si, que
            lhe dão prazer de ver.
          </SubTitle>
        </Header>
        {cats.map((cat: Cat) => (
          <Content key={cat.id} onPress={detailCat}>
            <Card>
              <Image source={{ uri: cat.image.url }} resizeMode={"stretch"} />
              <ContentCard>
                <Text>Raça: {cat.name}</Text>
                <Text>Origem: {cat.origin}</Text>
              </ContentCard>
              <Icon name="chevron-forward-outline" size={20} />
            </Card>
          </Content>
        ))}
      </Scroll>
    </Container>
  );
};
