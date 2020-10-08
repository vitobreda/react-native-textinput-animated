import * as React from "react";
import { View, TextInput, Animated, TextInputProps, StyleProp, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface InputProps extends TextInputProps {
  fontColor: string;
  label: string;
  border: boolean;
  borderWeight: number;
  borderColor: string
  containerStyle: StyleProp<ViewStyle>
  fontStyle: StyleProp<TextStyle>
}

export const TextinputAnimated: React.FunctionComponent<InputProps> = (
  props
) => {

  const [haveText, setHaveText] = React.useState(false);
  const animation = new Animated.Value(0);



  function AnimatedEffect(n: 0 | 1) {
    Animated.timing(animation, {
      toValue: n,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }

  function handleText(textValue: string) {
    if (textValue == "") {
      setHaveText(false);
    } else {
      setHaveText(true);
    }

    if (props.onChangeText) {
      props.onChangeText(textValue);
    }
  }

  function handleBlur() {
    if (!haveText) {
      AnimatedEffect(0)
    }

  }

  function handleFocus() {
    if (!haveText) {
      AnimatedEffect(1)
    }
  }

  const styleAnimationLabel: StyleProp<any> = {
    position: "absolute",
    left: 10,
    top: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [35, 10],
    }),
    fontSize: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["#AAB8C2", "#AAB8C2"],
    }),
    backgroundColor: props.border ? "white" : undefined,
    zIndex: 2
  }

  const styleInputConfig: StyleProp<ViewStyle> = !props.border ? {
    borderBottomWidth: 1,
    borderBottomColor: "#555"
  } : {
      borderWidth: props.borderWeight | 1,
      borderColor: props.borderColor,
      borderRadius: 5,
    }

  return (
    <View style={[{ paddingTop: 18, width: '100%', marginBottom: 10 }, props.containerStyle]}>
      <Animated.Text style={[styleAnimationLabel, props.fontStyle]}>
        {props.label}
      </Animated.Text>

      <TextInput
        style={[{
          height: 48,
          fontSize: 16,
          paddingTop: 10,
          paddingLeft: 15,
        }, styleInputConfig]}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        onFocus={(e) => {
          if (props.onFocus) {
            props.onFocus(e)
          }
          handleFocus()
        }}
        onBlur={(e) => {
          handleBlur();
        }}
        autoCapitalize="none"
        onEndEditing={(e) => {
          handleText(e.nativeEvent.text);
        }}
      />

      {props.children && props.children}
    </View>
  );
};