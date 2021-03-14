/*------- Deleting Items of FlatList ---------*/

// in App.js
const DeleteFromFlatList = props => {

    const removeGoalHandler = goalId => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId);
            // if false -> get rid of
        })
    };
//
//
//
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={courseGoals}
            renderItem={itemData => <Goalitem
                id={itemData.item.id}
                onDelete={removeGoalHandler}
                title={itemData.item.value} />}
        />
        // id, onDelete, title 값은 GoalItem.js 으로 props를 전달
        // 해주기 위해 설정한 값들
    )
}

// in GoalItem.js

{<TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>}

/* -Flow of the action
    GoalItems.js 에 있는 <TouchableOpacity /> 를 누르면 해당 Item을
    삭제하기 위함.
    
    1. 해당 item을 삭제하기 위한 해당 <TouchbleOpacity /> 를 누름
    2. onPress={props.onDelete.bind(this, props.id)} 으로 인해
    해당 item의 id값이 App.js 에 있는 removeGoalHandler() 의 매개변수인
    goalId 로 들어가게됨
    3. 해당 함수 내부 코드로 인해 해당 item을 리스트 목록에서 삭제
*/