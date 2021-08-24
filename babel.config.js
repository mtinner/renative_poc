module.exports = {
    retainLines: true,
    presets: ['@babel/preset-react',
        '@babel/preset-typescript','module:metro-react-native-babel-preset'],
    plugins: [
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                root: ['.'],
            },
        ],
    ],
};
