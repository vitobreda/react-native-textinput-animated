import React, {useEffect, useState} from 'react';
import {View, TextInput, Animated} from 'react-native';

export default function TextinputAnimated({
  label,
  keyboardType,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [haveText, setHaveText] = useState(false);
  const animation = new Animated.Value(0);

  function handleFocused() {
    if (haveText) {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }
  }

  useEffect(() => {
    handleEffect();
  }, [isFocused]);

  function handleEffect() {
    Animated.timing(animation, {
      toValue: isFocused ? 1 : 0,
      duration: 450,
      useNativeDriver: false,
    }).start();
  }

  const labelStyle = {
    position: 'absolute',
    fontFamily: 'OpenSans-Regular',
    left: 0,
    top: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [30, 10],
    }),
    fontSize: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['#AAB8C2', '#AAB8C2'],
    }),
  };

  function handleText(textValue) {
    if (textValue == '') {
      setHaveText(false);
    } else {
      setHaveText(true);
    }
    props.onChangeText(textValue)
  }

  function handleBlur() {
    if (haveText) {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }
  }

  return (
    <View style={{paddingTop: 18, width: '100%', marginBottom: 10}}>
      <Animated.Text style={labelStyle}>{label}</Animated.Text>
      <TextInput
        style={{
          height: 48,
          fontSize: 16,
          color: props.fontColor ? props.fontColor : '#000',
          borderBottomWidth: 1,
          borderBottomColor: '#555',
          fontFamily: 'OpenSans-Regular',
        }}
        secureTextEntry={props.secureText ? props.secureText : false}
        keyboardType={keyboardType ? keyboardType : 'default'}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          handleBlur();
        }}
        autoCapitalize="none"
        onEndEditing={(value) => {
          handleText(value.nativeEvent.text);
        }}
        blurOnSubmit
      />

      {props.children && props.children}
    </View>
  );
}
