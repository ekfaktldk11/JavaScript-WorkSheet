/* DrawerLayoutAndroid */

// 화면의 특정 영역에서 동적으로 열리고, 닫히는 사용자 인터페이스
// 평소에는 화면의 한 쪽에 숨겨져 있다가, 
// 사용자가 화면을 스와이프하거나 메뉴 버튼을 선택하면 화면에 표시되는 형태

render(){ // the things that showed in the real screen
    var navigationView = (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}> I'm in the Drawer!</Text>
        </View>
    );
    return (
        <DrawerLayoutAndroid drawerWidth={300} drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
                <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>World!</Text>
            </View>
        </DrawerLayoutAndroid>
    );
}

  // 변수 navigationView를 만들어 drawer를 꺼냈을 때 가동되는 기능을 추가함
  // drawerPosition은 drawer를 꺼내는 방향 (좌/우)
  // renderNavigationView(function)은 () => var을 통해 var을 띄움
  // 여기서 중요한 것은 DrawerLayoutAndroid <> 내에 있는 것들이 drawer에서 나오는 것이 아니라
  // var renderNavigationView를 이용하여 drawer의 내용물을 띄움

