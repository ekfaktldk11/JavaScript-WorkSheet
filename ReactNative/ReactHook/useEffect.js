/* useEffect */

/*
    - 리액트 컴포넌트가 렌더링 될 때마다 *특정 작업을 수행하도록* 설정 할 수 있는 React Hook임
    - useEffect is executed after every cycle of rendering
    - not before, not stimultaneously, but After.

*/

// ex)
useEffect(() => {
    if(currentGuess === userChoice){
        onGameOver(rounds);
    }
}, [currentGuess, userChoice, onGameOver]);

/*
    - First argument is the function it should execute after rendering the component
    - Second argument you passed too useEffect if an array of dependencies of this function
    - Whenever a task changed after a render cycle, 'useEffect' will rerun...
    
    -> so the effect will now only rerun if one of 
    our dependencies changed( only rerun if dependencies(currentGuess, userChoice, onGameOver) has changed)
*/