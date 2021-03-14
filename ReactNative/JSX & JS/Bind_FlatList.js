/*
    renderItem props in <FlatList> will only forward
    one item and that's item data which holds information
    about the index and about the item we're about to print
*/

const renderListItem = (listLength, itemData) => (
    <View style={styles.listItem}>
        <Text>#{listLength - itemData.index}</Text>
        <Text>{itemData.item}</Text>
    </View>);
...

<FlatList keyExtractor={(item) => item} data={pastGuesses} 
                renderItem={renderListItem.bind(this, pastGuesses.length)}
                contentContainerStyle={styles.list}/>

/*
- use .bind(this, ---)

    : 'bind' arguments that should be passed in, so we can add additional
    arguments besides the default argument which will be passed in
    -> const renderListItem = (listLength, itemData(/*not activated/*))

    someFunc={renderListItem.bind(this, pastGuesses.length)}
    -> Thanks to 'bind' we can forward not only pastGuesses
    as listLength but also itemData(/*not activated/*) as default

*/