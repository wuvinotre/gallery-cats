import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "../../store/slice";

import { Container, Header, Scroll, Content, Card, Text, Title, Image, SubTitle } from "./styled";

export const HomeScreen = ()   => {

  const cats = useSelector(state => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);
 
  return (
    <Container>
      <Scroll> 
      <Header>
      <Title>Galeria de espécies felinas</Title>
      <SubTitle>Imagens de diferentes espécies de gatos. Muitos gatos para si, que lhe dão prazer de ver.</SubTitle>
        </Header>
        <Content>
        {cats.map(cat => 
        <Card key={cat.id}>
          <Image source={{ uri: cat.image.url }}  resizeMode={"stretch"}  />
          {/* <Text>{cat.name}</Text>            */}
        </Card>
          )}
          </Content>
      </Scroll>
    </Container>
  );
};
