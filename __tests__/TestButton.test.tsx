import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import TestButton from '../src/TestButton'


describe('TestButton', () => {

    it('renders correctly', () => {

        const fn = jest.fn()
        const rendered = render(<TestButton onPress={fn} />)
        expect(rendered.getByText('Test Button')).toBeDefined()

        // Validate that the onPress prop is called when the button is pressed
        fireEvent.press(rendered.getByText('Test Button'))
        expect(fn).toHaveBeenCalled()

    })

})