import React from 'react'
import { render } from '@testing-library/react-native'
import TestComponent from '../src/TestComponent'


describe('TestComponent', () => {

    it('renders correctly', () => {

        const rendered = render(<TestComponent name='Hi' />)
        expect(rendered.getByText('Hi')).toBeDefined()

    })

})