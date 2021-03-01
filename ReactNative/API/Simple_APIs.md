# ActivityIndicator
- 데이터 또는 모듈 로딩 시, 원의 형태로 돌아가는것 (사이즈 , 컬러 설정가능)

# View 
- html, <div>

# Text 
- html, <input type='text'>

# TextInput
- html, <textarea>

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

# Image
- 서로 다른 타입의 이미지들을 전시하는 컴포넌트로, 네트워크 이미지, 스태틱 리소스, 일시적 로컬 이미지 그리고 카메라 roll과 같은 로컬 디스크에서 가져온 미지가 있음.
- source : 이미지를 어디서 가져오는지.. 메모리 내이미지, uri 이미지

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