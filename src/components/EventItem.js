import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LoadingImage from './LoadingImage';
import PropTypes from 'prop-types';

export default class EventItem extends React.Component {
  render() {
    const {event, width, height, fontSize, onPress} = this.props;
    const styles = createStyle(width, height, fontSize);
    console.log(event);
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <LoadingImage source={event.picture} width={width} height={height} />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{event.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const createStyle = (width, height, fontSize) =>
  StyleSheet.create({
    container: {
      width,
    },
    image: {
      width,
      height,
      borderRadius: 2,
    },
    imagePlaceholder: {
      width,
      height,
      borderRadius: 2,
      backgroundColor: '#f1f1f1',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    title: {
      fontSize,
      color: '#777',
    },
    titleWrapper: {
      width: '100%',
      marginTop: 10,
    },
    textPlaceholder: {
      height: fontSize + 2,
      width: '80%',
      backgroundColor: '#f1f1f1',
    },
  });

EventItem.propTypes = {
  event: PropTypes.object.isRequired,
  onPress: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.number,
};

EventItem.defaultProps = {
  onPress: () => {},
  width: 300,
  height: 200,
  fontSize: 16,
};
