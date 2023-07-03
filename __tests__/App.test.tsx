import React from 'react'
import { render } from '@testing-library/react-native'
import App from '../App'

describe('App', () => {

	it('renders correctly', () => {

		const rendered = render(<App />)
		expect(rendered.getByText('Hello World')).toBeDefined()
		expect(rendered.getByText('Test Button')).toBeDefined()
		expect(rendered.getByText('dev')).toBeDefined()

	})

})
