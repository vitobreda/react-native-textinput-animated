# react-native-textinput-animated

<p align="center">
<image height="450" src="./exemple/input.gif">
</p>

## Getting started

`$ npm install react-native-textinput-animated --save`

### Mostly automatic installation

`$ react-native link react-native-textinput-animated`

## Usage

```javascript
import React from "react";
import TextinputAnimated from "react-native-textinput-animated";

function App(props) {
  const [text, setText] = React.usestate("");

  function handleInputValue() {
    myInput.current.value;
  }

  return (
    <TextinputAnimated
      label="My Input"
      onChangeText={(value) => setText(value)}
    />
  );
}
```
