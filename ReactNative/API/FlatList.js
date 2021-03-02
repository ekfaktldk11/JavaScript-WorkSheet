/*------- FlatList -------*/

// 심플한 api, 높은 퍼포먼스, 편리한 기능지원을 하는 리스트 컴포넌트
// 사람이나, 물건, 등 나열할 리스트 목록을 스크린에 이쁘게 나열하는 것
// <ScrollView /> 에서 스크린 렌더링과 동시에 모든 리스트들을
// 나열하는 단점을 보완해 줄 수 있음

const RenderFlatList = props => {
    FlatListItemSeparator = () => {
        return (
            <View style={{ height: 5, width: "100%", backgroundColor: "green" }} />
        );
    };
    GetItem = (n) => { // n -> item
        Alert.alert(n);
    };
    _keyExtractor = (item) => item.itemNum;

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={this._keyExtractor}
                data={this.state.FlatListItems}
                ItemSeparatorComponent={this.FlatListItemSeparator}
                renderItem={({ item }) => <Text style={styles.item} onPress=
                    {() => this.GetItem}>{item.name}/ studyPeriod:{item.studyPeriod}</Text>}
            />
        </View>
    )
}
/*  ------ Some props of FlatList -------

    - ItemSeparatorComponent : 각 FlatList들을 separator로 분리
    props ->ItemSeparatorComponent = { this.FlatListItemSeparator }
    - renderItem : 굳이 반복문을 돌리지 않고 renderItem을 통해 스크린에 list들을 나타냄
    구동방식은 map() 과 유사
    - keyExtractor : FlatList의 key 값을 'key'로 사용하지 않을 때 
    (FlatList 는 자동적으로 key를 할당)어떤 값을 key로 사용할지 알려주기 위한 prop

    -> 자동적으로 key를 할당하기 위해선 data로 사용될 List 안의 obj에 'key'라는 키값이
    존재해야 함

    [
        {
            key : Math.random.toString(),
            value : someValue
        },
        ...
    ]
*/

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