/* Making something Scrollable with ScrollView */

<ScrollView>
    {courseGoals.map(goal => (
        <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
        </View>
    ))}
</ScrollView>


// 동적으로 content를 형성할 때 (컨텐츠, 아이템들이 몇 개가 형성될지 미지수 일 경우)
// 가급적 scrollView를 사용해주는 것이 좋음

// !! A better List : FlatList
/* 
    scrollview 같은 경우에는 스크린에 띄운 컨텐츠나 아이템이 많을수록 
    엄청 비효율적임. 만약 100개의 컨텐츠가 있다고 치면 스크린에 보이지 않는 컨텐츠들을
    이미 생성해 놓고 있기 때문에 어플리케이션의 속도를 낮출 뿐아니라 
    메모리 적으로도 비효율 적임.

    그럴경우엔 <FlatList>를 사용하자 
*/