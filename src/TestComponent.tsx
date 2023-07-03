import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'


interface TestComponentProps {
    name: string;
}

const TestComponent: React.FC<TestComponentProps> = ({ name }) => {

    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default TestComponent