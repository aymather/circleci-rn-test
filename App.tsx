import React from 'react'
import TestComponent from './src/TestComponent'
import {
	StyleSheet,
	View
} from 'react-native'


const App = () => {

	return (
		<View style={styles.container}>
			<TestComponent name='Hello World' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		
	}
})

export default App