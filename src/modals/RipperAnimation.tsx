import React, { useEffect, useRef } from 'react';
import {
  Animated,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from 'react-native';

const RippleButton = ({ children, onPress, focus }: any) => {
  const scale = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0.3)).current;

  const animateRipple = () => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 2,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (focus) {
      animateRipple();
    } else {
        scale.setValue(0);
        opacity.setValue(0.3);
    }
  }
  , [focus]);

  return (
      <View style={styles.button}>
        <Animated.View
          style={[
            styles.ripple,
            {
              transform: [{ scale }],
              opacity,
            },
          ]}
        />
        {children}
      </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  ripple: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#2196F3',
  },
});

export default RippleButton;
