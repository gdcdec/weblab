 // Импортируем модуль "path" для работы с путями файлов
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Точка входа для сборки проекта
    entry: './src/index.js',

    output: {
        // Имя выходного файла сборки
        filename: 'bundle.js',
        // Путь для выходного файла сборки
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                // Регулярное выражение для обработки
                // файлов с расширением .css
                test: /\.css$/,
                // Загрузчики, используемые для обработки CSS-файлов
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/about.html',
            inject: true,
            chunks: ['index'],
            filename: 'about.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/projects.html',
            inject: true,
            chunks: ['index'],
            filename: 'projects.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/tasks.html',
            inject: true,
            chunks: ['index'],
            filename: 'tasks.html'
        }),
    ],

    devServer: {
        static: {
            // Каталог для статики
            directory: path.join(__dirname, 'dist'),
        },

        open: {
            app: {
                name: 'chromium'
            }
        }
    },

    mode: 'development', // Режим сборки
};
