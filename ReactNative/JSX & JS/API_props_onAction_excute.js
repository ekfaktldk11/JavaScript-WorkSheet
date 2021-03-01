/* onSomeAction function excute */

const inputHandler = (text) => {
    ...
}

<TextInput onChangeText={inputHandler} />

/* 

여기서 {inputHandler()} 로 변경하면, code가 파싱 되자마자
excute 되기 때문에 모든 keystroke 마다 excute 하고 싶으면 함수 이름만 적어 놓아야 함
즉, func()를 파싱하면 컴파일 후 바로 excute됨(렌더링 시 바로)

**만약 onChangeText={(text) => InputHandler(text)} 이처럼 anonymous arrow func 형태로도
컴파일 후 바로 excute되는 현상을 방지할 수 있음

*/

// !! map 함수를 사용해서 컴포넌트를 반복시킬 때, 반복시키는 최상위의 component 에 key값을 할당해야함
// <MasterComponent key = {} />