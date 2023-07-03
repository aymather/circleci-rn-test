import Config from 'react-native-config'

describe('Environment Variables', () => {
    it('API_URL is set correctly', () => {
        expect(Config.API_URL).toBe('http://localhost:3000')  // replace 'expected value' with the expected value of your variable
    })
})