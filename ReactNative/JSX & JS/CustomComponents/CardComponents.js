/* ------- CreateCustomComponent --------- */

/**1**/
// Styling a View as a "Card" Container(custom Component)
// Styling with Drop Shadows & Rounded Corners

/*
1. In the Style, there is a shadow props(A slight drop shadow)

2. Four core properties
- shadowColor
- shadowOffset
-> How much offset from your container (width & height)

- shadowOpacity
-> How transparent this shadow is

- shadowRadius
-> How sharp that shadow is

**Shadow props only work on iOS

3. Alternative for Android
- elevation props/
*/

import React from 'react';
import { View, StyleSheet} from 'react-native';

const Card = props => {
    return (
        <View style={{ ...styles.cardContainer, ...props.style }}>{props.children}</View>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20
    }
});

export default Card;
