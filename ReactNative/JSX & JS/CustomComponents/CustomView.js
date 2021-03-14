
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

