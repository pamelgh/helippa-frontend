import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import EventSearchForm from './EventSearchForm';
import EventList from './EventList';
import LoadingButton from './LoadingButton';

const {width} = Dimensions.get('window');

export class HomeListHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {rememberMeEvents: []};
  }

  openEvent(event) {
    this.props.navigation.push('EventDetailScreen', {event});
  }

  render() {
    const {rememberMeEvents} = this.state;
    return (
      <View style={styles.container}>
        <EventSearchForm />
        <LoadingButton
          style={styles.reload}
          color="darkcyan"
          onPress={() => this.props.onReload()}
        >
          Atualizar
        </LoadingButton>
        {/*
        // TODO: Adicionar lista de eventos que o usuário pediu para ser lembrado
        <View style={styles.eventsWrapper}>
          {rememberMeEvents.length ? (
            <EventList
              events={rememberMeEvents}
              title="Não se esqueça"
              fontSize={18}
              eventWidth={180}
              eventHeight={120}
              onEventPressed={event => this.openEvent(event)}
              horizontal
            />
          ) : null}
        </View>
        {showTitle ?  : null} */}
        <Text style={styles.title}>Destaques</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width,
  },
  eventsWrapper: {
    marginVertical: 20,
  },
  title: {
    marginLeft: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#444',
  },
  reload: {
    color: 'darkcyan',
  },
});

export default HomeListHeader;
