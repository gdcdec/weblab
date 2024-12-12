const path = require('path'); // Импортируем модуль "path" для работы
с путями файлов
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
            template: './src/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
        }),
    ],

    devServer: {
        static: {
            // Каталог для статики
            directory: path.join(__dirname, 'dist'),
    },

    open: true, // Автоматически открывать браузер
    },

    mode: 'development', // Режим сборки
};
