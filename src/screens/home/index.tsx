import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "../../store/slice";

import {
  Container,
  Header,
  Scroll,
  ContainerCard,
  Card,
  ContentCard,
  Text,
  Title,
  Image,
  SubTitle,
} from "./styled";

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

export const HomeScreen = () => {
  const cats = useSelector((state: State) => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

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
        <ContainerCard>
          {cats.map((cat: Cat) => (
            <Card key={cat.id}>
              <Image source={{ uri: cat.image.url }} resizeMode={"stretch"} />
              <ContentCard>
                <Text>Raça: {cat.name}</Text>
                <Text>Origem: {cat.origin}</Text>
              </ContentCard>
            </Card>
          ))}
        </ContainerCard>
      </Scroll>
    </Container>
  );
};
