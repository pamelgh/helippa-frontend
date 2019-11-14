import React from "react";
import { Text, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  View,
  Button
} from "native-base";

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row"
  }
});
// style={{width: wp('100%'), height: hp('100%')}}
const App = () => {
  return (
    <Container>
      <Content contentContainerStyle={{ flex: 1, justifyContent: "center" }}>
        <Text>Informações pessoais</Text>
        <Form>
          <Item floatingLabel>
            <Label>Nome Completo</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>E-mail</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Senha</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Confirmar Senha</Label>
            <Input />
          </Item>
        </Form>
        <View style={styles.buttons}>
          <Button>
            <Text>Cancelar</Text>
          </Button>
          <Button>
            <Text>Próximo</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default App;
