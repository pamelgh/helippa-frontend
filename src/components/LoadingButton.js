import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

const LoadingButton = ({
  children,
  loading,
  onPress,
  color,
  backgroundColor,
  style,
}) => {
  const styles = styleCreate(color, backgroundColor);

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color={color} />
      ) : (
        <Text style={styles.text}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};

LoadingButton.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onPress: PropTypes.func,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

LoadingButton.defaultProps = {
  loading: false,
  onPress: () => {},
  color: 'white',
  backgroundColor: 'blue',
};

const styleCreate = (color, backgroundColor) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor,
    },
    text: {
      color,
    },
  });

export default LoadingButton;