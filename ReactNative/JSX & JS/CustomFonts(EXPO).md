## How to use some custom fonts !(FOR EXPO USER)!

# Adding Custom Fonts
1. import * as Font from 'folderA'
- Which means import all file in 'folderA' 

2. const fetchFonts = () => { 
  Font.loadAsync({ // A method that allows to load fonts (by obj)
    'open-sans': require['open_sansFile.tft'];
  });
};
- declare outside (outside of App.js file component) because this func doesn't need to be recreated for every component rerender cycle

3. Import {AppLoading} from 'expo'
- That's a component which will basically prolong the default loading screen
- It will prolong this screen to stay active until a certain task of your choice is done

4. const [dataLoaded, setDataLoaded] = 
useState(false); (In App.js Compo)

5. If (!dataLoaded) {
  return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)}/>;
};

6. Two conditions of startAsync value
- (1) This has to be a function which you pass here
- (2) It has to be a function that returns a promise
*/The motion of the above-func/*
- (1) If value of 'dataLoaded' is false 
- (2) When the func named {fetchFonts} rendering is over, the value of  'dataloaded' change 'false 'to 'true'
- (3) If value of the 'dataloaded' is 'ture', then compiler recognize the  componentWillMount is over

- */Process of the Mountng*/
- (1) Initialization(set props and state)
- (2) componentWillMount
- (3) render
- (4) componentDidMount

# Installig expo-font

- You can do this in two different ways and it's important to understand the difference:
1. npm install --save expo-font
2. expo install expo-font

# Custom Wrapper Components & Global Styles

1. Style's props fontFamily can only apply on the <Text> Component
- so in the <View>, you can't apply the props to use it

2. It is helpful that creat a custom component which give 'fontFamily' props with a <View/> :
- BodyText.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = props => <Text style= {styles.body}>{props.children}</Text>

const styles = StyleSheet.create({
  body:{
    fontFamily: 'someStyle'
  }
});

export default BodyText;

3. LIKEWISE..
- Create a family style (For title, Body, Alert..):
- BodyText.js
- TitleText.js

4. OR..
- Create a Constant file
: In defauult-styles.js ..
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bodyText: {
    fontFamily: 'some_style_1',
  },
  title: {
    fontFamily: 'some_style_2'
  }
});
