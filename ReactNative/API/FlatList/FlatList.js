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