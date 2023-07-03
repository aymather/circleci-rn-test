import React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native'


interface TestButtonProps {
    onPress: () => void;
}

const TestButton: React.FC<TestButtonProps> = ({ onPress }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Text>Test Button</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default TestButton