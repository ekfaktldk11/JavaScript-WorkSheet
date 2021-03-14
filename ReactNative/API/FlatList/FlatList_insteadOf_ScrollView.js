/* Using FlatList Instead of ScrollView */

<View style={styles.listConatiner}>
                {/* <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) => renderListItem(guess, 
                        pastGuesses.length - index))}
                </ScrollView> */}
                <FlatList keyExtractor={(item) => item} data={pastGuesses} 
                renderItem={renderListItem.bind(this, pastGuesses.length)}
                contentContainerStyle={styles.list}/>
            </View>

/*

1. FlatList expects to get objects in the array you're passing
in where each obj has a key property it can extract and use 
as a key for efficient re-rendering

2. keyExtractor() props in <FlatList>, string types only can be used for keys :
setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
-> setPastGuesses(curPastGuesses => [nextNumber.toString(), ...curPastGuesses]);

3. itemData.index
    - The item data you're getting automatically by React Native(.bind())
    is an Object which also has an index property which is the index of the item you're outputting
    and you also get itemData.item

4. In styling FlatList, list Contianer needs to be wider than the list items(but <ScrollView>)

*/