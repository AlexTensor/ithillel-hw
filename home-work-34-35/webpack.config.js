const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

const optimization = {
    splitChunks: {
        chunks: 'all', // Оптимізація загального коду для всіх типів чанків
    },
    minimizer: [
        new TerserPlugin() // Мінімізація JS файлів
    ]
}

const rules = [
    {
        test: /\.s[ac]ss$/,
        use: [
            { loader: MiniCssExtractPlugin.loader },
            'css-loader',
            'sass-loader'
        ]
    },
    {
        test: /\.(png|jpg|jpeg|svg|gif|webp)$/,
        type: 'asset/resource'
    },
    {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource'
    },
    {
        test: /\.html$/i,
        loader: "html-loader",
    },
    {
        test: /\.js$/, // Відповідає усім .js файлам
        exclude: /node_modules/, // Виключає папку node_modules
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'] // Використовує preset-env для транспіляції сучасного JS
            }
        }
    },
    {
        test: /\.ts$/, // Вказуємо, що файл з розширенням .ts повинен бути оброблений
        exclude: /node_modules/, // Виключаємо директорію node_modules з обробки
        use: {
            loader: 'babel-loader', // Використовуємо babel-loader для компіляції
            options: {
                presets: [
                    '@babel/preset-env', // Перетворення ES6+ у сумісний код JavaScript
                    '@babel/preset-typescript' // Додавання підтримки TypeScript
                ]
            }
        }
    }
]
const plugins = [
    new HTMLWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
        patterns: [
            {
                from: path.resolve(__dirname, './src/favicon.png'),
                to: path.resolve(__dirname, 'dist'),
            }
        ]
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
    }),
    new EslintWebpackPlugin({
        extensions: ['js'], // Визначаємо розширення файлів для перевірки
        fix: true, // Вмикаємо автоматичне виправлення помилок
        configType: 'eslintrc'
    })
]

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        external: './src/external.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle-[contenthash].js',
    },
    plugins,
    module: {
        rules
    },
    target: 'web',
    devServer: {
        port: 4200,
        hot: false
    },
    optimization
};