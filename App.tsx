import React from 'react'
import TestComponent from './src/TestComponent'
import {
	StyleSheet,
	SafeAreaView,
	View
} from 'react-native'
import TestButton from './src/TestButton'


const App = () => {

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<TestComponent name='Hello World' />
				<TestButton onPress={() => console.log('Button Pressed')} />
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		
	}
})

export default App