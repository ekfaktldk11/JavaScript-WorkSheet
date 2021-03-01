/* useState */

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);
    const goalInputHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal);
    };
    const addGoalHandler = () => {
        setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
    };

    return (
        <View>
            {courseGoals.map((goal) => <Text>{goal}</Text>)}
        </View>
        ...
    )
};

// 위처럼 {courseGoals.map((goal) => <Text>{goal}</Text>)} 해주면 스크린에
// 값을 하나씩 추가할 때 마다 원래 있던 값과(old) 새로 추가된 값이 같이 뜨게됨(new)
// 여기서 map 함수란 모든 아이템 및 data들에 대해 array of components 로 치환
// map함수를 사용할땐 항상 key값이 요구됨. 같은 값을 입력하지 않는다는 전제하에
// 위의 code에선 goal을 key값으로 사용해도됨.