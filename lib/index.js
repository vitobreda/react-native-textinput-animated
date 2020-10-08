"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextinputAnimated = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
exports.TextinputAnimated = function (props) {
    var _a = react_1.useState(false), isFocused = _a[0], setIsFocused = _a[1];
    var _b = react_1.useState(false), haveText = _b[0], setHaveText = _b[1];
    var animation = new react_native_1.Animated.Value(0);
    function handleFocused() {
        if (haveText) {
            setIsFocused(true);
        }
        else {
            setIsFocused(false);
        }
    }
    react_1.useEffect(function () {
        handleEffect();
    }, [isFocused]);
    function handleEffect() {
        react_native_1.Animated.timing(animation, {
            toValue: isFocused ? 1 : 0,
            duration: 450,
            useNativeDriver: false,
        }).start();
    }
    var labelStyle = {
        position: "absolute",
        fontFamily: "OpenSans-Regular",
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
            outputRange: ["#AAB8C2", "#AAB8C2"],
        }),
    };
    function handleText(textValue) {
        if (textValue == "") {
            setHaveText(false);
        }
        else {
            setHaveText(true);
        }
        if (props.onChangeText) {
            props.onChangeText(textValue);
        }
    }
    function handleBlur() {
        if (haveText) {
            setIsFocused(true);
        }
        else {
            setIsFocused(false);
        }
    }
    return (<react_native_1.View style={{ paddingTop: 18, width: '100%', marginBottom: 10 }}>
      <react_native_1.Animated.Text style={labelStyle}>{props.label}</react_native_1.Animated.Text>
      <react_native_1.TextInput style={{
        height: 48,
        fontSize: 16,
        color: props.fontColor ? props.fontColor : "#000",
        borderBottomWidth: 1,
        borderBottomColor: "#555",
        fontFamily: "OpenSans-Regular",
    }} secureTextEntry={props.secureTextEntry} keyboardType={props.keyboardType} onFocus={function (e) {
        if (props.onFocus) {
            props.onFocus(e);
        }
        setIsFocused(true);
    }} onBlur={function (e) {
        handleBlur();
    }} autoCapitalize="none" onEndEditing={function (e) {
        handleText(e.nativeEvent.text);
    }} {...props}/>

      {props.children && props.children}
    </react_native_1.View>);
};
//# sourceMappingURL=index.js.map