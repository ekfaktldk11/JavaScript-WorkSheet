/* Modal */

// 어떠한 content 에 대한 정보를 여/닫기 하는 기본적인 방법이다.

const ModalDisplay = props => {
    const [modalVisible, setModalVisible] = useState(false);

    const modalVisibleHandler = () => {
        setModalVisible(!!modalVisible);
    }

    return (
        <View style={{ marginTop: 22 }}>
            <Modal
                animationtype="slide"
                transparent={false} // if true -> position will be concated
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={{ marginTop: 22 }}>
                    <View>
                        <Text>Hello World!</Text>
                        <TouchableHighlight onPress={modalVisibleHandler}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
            <TouchableHighlight
                onPress={modalVisibleHandler}>
                <Text>Show Modal</Text>
            </TouchableHighlight>
        </View>
    )
}
// Note : If you need more control over how to present modals over the rest of your app, then consider using a top-level Navigator.
// Modal과 Touchable한 컴포넌트랑 같이 사용되어 touchable을 사용하여 modal을 열거나 닫음