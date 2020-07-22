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
import React, { useRef } from "react";
import TextinputAnimated from "react-native-textinput-animated";

function App(props) {
  const myInput = useRef(null);

  function handleInputValue() {
    myInput.current.value;
  }

  return <TextinputAnimated label="My Input" inputRef={myInput} />;
}
```
