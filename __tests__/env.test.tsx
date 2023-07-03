import Config from 'react-native-config'

describe('Environment Variables', () => {
    it('API_URL is set correctly', () => {
        expect(Config.API_URL).toBe(undefined)
    })
    it('TEST is set correctly', () => {
        expect(Config.TEST).toBe(undefined)
    })
})