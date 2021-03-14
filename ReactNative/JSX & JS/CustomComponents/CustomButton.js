/* Building a Custom Button Component */


// - In MainButton.js file... (A custom button) :
const MainButton = props => {
    return <TouchableOpacity onPress={props.onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>
};
// - In StartGameScreen.js file ...
<MainButton onPress={() => props.onStartGame(selectNumber)}>
                   Start Game
                </MainButton>