# ActivityIndicator
- 데이터 또는 모듈 로딩 시, 원의 형태로 돌아가는것 (사이즈 , 컬러 설정가능)

# View 
- html, <div>

# Text 
- html, <input type='text'>

# TextInput
- html, <textarea>
- If we only use number in the TextInput, keyboardType='numeric' or 'number-pad'
- 'BlurOnSubmit' prop
: When we click the submit button, then the keyboard fade (In Android)

# StyleSheet
- flex : 1 -> 1은 화면 전체를 의미하고 주로 container로 쓰임 / 숫자가 커질 수록 그 화면 차지 비율이 감소
- flexDirection: 'row' -> 가로로 정렬 / 'column' -> 세로로 정렬
- justifyContent: 'space-around' -> 화면의 일정 부분의 가로열에 배치

# Button 
- html 에서도 사용되는 button 기능과 유사 
- title : "title : ~ " 라고 버튼안에 글상자를 만들 수 있음.
- disabled : "disabled" 해주면 버튼을 못 누르게 설정 가능
- marginVertical 이나 marginHorizontal 로 위아래 나 양옆 공백을 만들어주자
- onPress : onPress={() => ''' } 를 통해 버튼 입력 시 이후의 행동을 만들어 줄 수 있음.
- 여기 있는 View 나 Button 뭐 등등들은 각각의 함수 이므로 새로운 구동을 하는 함수 또한 만들어
줄 수 있음. 
- ex) function Separator() {
  return <View style={styles.separator} />;
}
-> 위 처럼 Separator 함수를 만들어서 styles.separator를 보여주게(View) 만들 수 있음. 
위 styles.separator 의 separator는 유저가 스타일 만들어주는 것 ~
- 이때 separator 에는 borderBottomColor 나 borderBottomWidth 을 설정해주어 separator를 꾸며주는 것도 좋은 생각

# SafeAreaView 
- 주로 IOS 에서 사용되는 데, 컴포넌트가 IOS 스크린의 범주를 벗어나는 상황이 종종 있는데 그 때 사용됨.

# ImageBackground
- 백그라운드 이미지 핸들. props는 Image 컴포넌트와 동일

# InputAccessoryView
- 키보드 자동완성기능을 가능케 하는 컴포넌트임. IOS에서 사용됨.

# KeyboardAvoidingView
- 검색창을 눌러서 키보드가 생성됨으로써 화면창에 있는 View 들이 키보드에 의해 방해되는 현상을 막기 위해 사용되는 컴포넌트임.
- props
- behavior =“ ” -> 스크린이 키보드를 피하는 행동을 어떻게 ~

# ProgerssBarAndroid
- 상태 바 -> 진행 중인 상태를 표기하는 ~ ActivityIndicator와 비슷한 역할

# Touchable Components
: View의 props들 중 onTouchEnd , onTouchStart 가 있는데 그 사이의 시간을 정해서 누르고 있는 시간만큼에 따라 다른 활성화를 시켜줄 수 있다.
- onTouchStart : 누르자 마자
- onTouchEnd : 설정한 시간이상 만큼 눌렀을 경우(활성화)
-> 근데 위는 너무 코드가 복잡해져서 not ideal

- 그래서 <TouchableOpacity> 로 감싸서 onPress 또는 onLongPress를 사용함!
- <TouchableOpacity> 의 ‘activeOpacity’ prop을 사용하면 눌렀을 때의 투명도를 설정해 줄수 있음 ex) activeOpacity={0.8} 
- Touchable components 들은 모든 컴포넌트에 씌워서 버튼처럼 사용할 수 있음!