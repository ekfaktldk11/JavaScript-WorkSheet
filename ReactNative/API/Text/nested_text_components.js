/* You can nest text components into other text components.

<Text>The number
    <Text>{props.number}</Text>
    The rounds
    <Text>{props.rounds}</Text>
</Text>

*/

<View style={styles.resultContainer}>
                <Text style={styles.resultText}>
                Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text>
                rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>
                </Text>
            </View>

/* 
The styles you apply to a component always are just applied to that component and not to nested components
- /*But/* in the <Text> components, if you add style there, the style is passed down to nested text components!!
*/

const styles = StyleSheet.create({
    resultContainer:{
        marginHorizontal : 20,
    },
    resultText:{
        textAlign: 'center',
    },
    highlight: {
        color: Colors.primary,
    }
});