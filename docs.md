# Documentação

- [Telas](#telas)
  - [LoginScreen](#loginscreen)
  - [HomeScreen](#homescreen)
  - [EventDetailScreen](#eventdetailscreen)
  - [CreateEventScreen](#createeventscreen)
  - [LogoutScreen](#logoutscreen)
- [Navegadores](#navegadores)
  - [AppNavigator](#appnavigator)
  - [MainNavigator](#mainnavigator)
  - [HomeNavigator](#homenavigator)
- [Componentes](#componentes)
  - [CustomTextInput](#customtextinput)
  - [EventItem](#eventitem)
  - [EventList](#eventlist)
  - [FacebookButton](#facebookbutton)
  - [HomeHeader](#homeheader)
  - [ImagePickerBox](#imagepickerbox)
  - [LoadingButton](#loadingbutton)
  - [LoadingErrorImage](#loadingerrorimage)
  - [LoadingImage](#loadingimage)
  - [ModalLogo](#modallogo)


## Telas

### `LoginScreen`

Exibe uma tela _modal_ com o _slogan_ e a logotipo do aplicativo, para dispensá-lo basta deslizá-lo para cima ou apertar nas setas que aparece na tela. Abaixo da tela modal tem um botão para executar login/cadastro no aplicativo através do Facebook.

### `HomeScreen`

Exibe a lista de eventos disponíveis. Para acessar os detalhes do evento basta tocar na imagem ou título do evento.

### `EventDetailScreen`

Exibe os detalhes do evento, como horário, data, local, descrição, etc.

### `CreateEventScreen`

Permite cadastrar um novo evento. É necessário nome, data e horário para o evento. Também é possível fornecer uma foto para a capa do evento e uma descrição.

### `LogoutScreen`

Apenas realiza o logout do usuário e o retorna para a `LoginScreen`.

## Navegadores

Os navegadores gerênciam as rotas do aplicativo.

### `AppNavigator`

Navegação inicial do aplicativo. Possui duas rotas uma para a `LoginScreen` e outra para o `MainNavigator`.

### `MainNavigator`

Navegação principal do aplicativo. Possui três rotas, uma para o `HomeNavigator`, uma para a `CreateEventScreen` e uma para a `LogoutScreen`.

### `HomeNavigator`

Possui duas rotas, uma para a `HomeScreen` e outra para a `EventDetailScreen`.

## Componentes

### `CustomTextInput`

| Property        | Type     | Required | Default value | Description |
| :-------------- | :------- | :------- | :------------ | :---------- |
| value           | `string` | no       | `''`          |
| textColor       | `string` | no       | `'#333'`      |
| backgroundColor | `string` | no       | `'white'`     |
| placeholder     | `string` | no       | `''`          |
| style           | `object` | no       | `{}`          |

### `EventItem`

| Property | Type                 | Required | Default value | Description                                           |
| :------- | :------------------- | :------- | :------------ | :---------------------------------------------------- |
| event    | `object`             | yes      |               | descrição de um evento retornado pela API             |
| onPress  | `func`               | no       | `() => {}`    | função chamada ao tocar na imagem ou título do evento |
| width    | `number` or `string` | no       | `300`         | largura da imagem                                     |
| height   | `number` or `string` | no       | `200`         | altura da imagem                                      |
| fontSize | `number`             | no       | `16`          |

### `EventList`

| Property            | Type                 | Required | Default value | Description                                            |
| :------------------ | :------------------- | :------- | :------------ | :----------------------------------------------------- |
| events              | `array`              | yes      |               | lista de eventos retornada pela API                     |
| title               | `string`             | no       | `''`          |                                                        |
| fontSize            | `number`             | no       | `20`          |                                                        |
| horizontal          | `bool`               | no       | `false`       |                                                        |
| eventWidth          | `number` or `string` | no       | `300`         | largura da imagem dos eventos                                     |
| eventHeight         | `number` or `string` | no       | `200`         | altura da imagem dos eventos                                      |
| eventFontSize       | `number`             | no       | `16`          | tamanho da fonte do título dos eventos                   |
| onEventPressed      | `func`               | no       | `() => {}`    | função chamada quando um evento for tocado             |
| onEndReached        | `func`               | no       | `() => {}`    | função chamada quando a rolagem chegar ao fim da lista |
| ListHeaderComponent | `element`            | no       | `null`        | componente que será renderizado no início da lista     |

### `FacebookButton`

| Property | Type   | Required | Default value | Description                                                              |
| :------- | :----- | :------- | :------------ | :----------------------------------------------------------------------- |
| onPress  | `func` | no       | `() => {}`    |
| loading  | `bool` | no       | `false`       | quando "true" desabilita os eventos do botão e exibe um ícone de loading |

### `HomeHeader`

| Property    | Type   | Required | Default value | Description |
| :---------- | :----- | :------- | :------------ | :---------- |
| onPressLogo | `func` | no       | `() => {}`    |
| onPressMenu | `func` | no       | `() => {}`    |

### `ImagePickerBox`

| Property | Type     | Required | Default value | Description                                             |
| :------- | :------- | :------- | :------------ | :------------------------------------------------------ |
| style    | `object` | no       | `{}`          |
| onChange | `func`   | no       | `() => {}`    | retorna a descrição da imagem selecionada pelo "picker" |

### `LoadingButton`

| Property        | Type     | Required | Default value | Description               |
| :-------------- | :------- | :------- | :------------ | :------------------------ |
| loading         | `bool`   | no       | `false`       | igual ao `FacebookButton` |
| onPress         | `func`   | no       | `() => {}`    |
| color           | `string` | no       | `'white'`     |
| backgroundColor | `string` | no       | `'#eee'`      |
| style           | `object` | no       | `{}`          |

### `LoadingErrorImage`

Componente exibido quando ocorre erro no carregametno de uma imagem

| Property | Type     | Required | Default value | Description |
| :------- | :------- | :------- | :------------ | :---------- |
| width    | `number` | no       | `300`         |
| height   | `number` | no       | `200`         |

### `LoadingImage`

Exibe um retangulo do cinza do tamanho da imagem enquanto a imagem é carregada. Se o carregamento da imagem falhar, exibe o componente `LoadingErrorImage`

| Property | Type                 | Required | Default value | Description |
| :------- | :------------------- | :------- | :------------ | :---------- |
| source   | `number` or `string` | no       | `null`        |
| width    | `number` or `string` | no       | `300`         |
| height   | `number` or `string` | no       | `200`         |

### `ModalLogo`

| Property  | Type   | Required | Default value | Description |
| :-------- | :----- | :------- | :------------ | :---------- |
| visible   | `bool` | no       | `false`       |
| onDismiss | `func` | no       | `() => {}`    |

---

<sub>Este documento usou o <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
