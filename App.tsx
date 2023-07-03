import React from 'react'
import Config from 'react-native-config'
import TestComponent from './src/TestComponent'
import TestButton from './src/TestButton'
import {
	StyleSheet,
	SafeAreaView,
	Text,
	View
} from 'react-native'


const App = () => {

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<TestComponent name='Hello World' />
				<TestButton onPress={() => console.log('Button Pressed')} />
				<Text>{Config.ENV}</Text>
				<Text>{Config.API_URL}</Text>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		
	}
})

export default App