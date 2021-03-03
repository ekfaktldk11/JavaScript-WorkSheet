/* Swithching Between Multiple "Screens"
- How to navigate using standard RN feature(without navigation)

*/

export default function App() {
    const [userNumber, setUserNumber] = useState();
  
    const startGameHandler = (selectedNumber) => {
      setUserNumber(selectedNumber);
    };
  
    let content = <StartGameScreen onStartGame={startGameHandler}/>;  
    if (userNumber){
      content = <GameScreen userChoice={userNumber}/>;
    }
  
    return (
      <View style={styles.screen}>
        <Header title="Guess a Number"/>
        {content}
      </View>
    );
};

/*
    (1) : The func 'startGameHandler' get a number(UserChoiceNum)
    (2) : setUserName() set the userNumber
    (3) : state of 'If State' has get changed
    (4) : by var content, screen change <StartGameScreen /> to <GameScreen>
*/