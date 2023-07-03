module.exports = {
	presets: ["@babel/preset-env", "@babel/preset-typescript", 'module:metro-react-native-babel-preset'],
	plugins: [
		["@babel/plugin-transform-runtime"],
		["@babel/plugin-proposal-class-properties"]
	]
}
