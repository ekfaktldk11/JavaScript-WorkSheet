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


/**2**/
// FlatList의 props인 renderItem에 custom component인 'GoalItem' 을 사용

import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
const GoalItem = props => {
    // 파라미터를 props 로 받아야 title을 GoalItem 컴포넌트에서
    // props로 사용가능
    return(
        <View style={styles.listItem}>
            <Text>{props.title}</Text>   
        </View>
    );
};
const styles = StyleSheet.create({
    listItem:{
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
      }
})
export default GoalItem;

/*
    위의 커스텀 컴포넌트 파일을 import하여 다른 파일에서...
*/

{<FlatList
        keyExtractor={(item,index) => item.id}
        data={courseGoals}
        renderItem={ itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )} />}
// 위의 renderItem 부분을

{<FlatList
        keyExtractor={(item,index) => item.id}
        data={courseGoals}
        renderItem={ itemData => <Goalitem title = {itemData.item.value}/>}
      />}

// 위처럼 사용가능함

