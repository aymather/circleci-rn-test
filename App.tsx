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
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<TestComponent name='Hello World' />
				<TestButton onPress={() => console.log('Button Pressed')} />
				<Text style={styles.text}>{Config.ENV}</Text>
				<Text style={styles.text}>{Config.API_URL}</Text>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 20,
		color: '#333'
	}
})

export default App