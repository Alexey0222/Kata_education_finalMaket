const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Входной файл
  entry: [
    './src/js/index.js'
  ],

  // Выходной файл
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/bundle.js',
    publicPath: ''
  },

  // Source maps для удобства отладки
  devtool: "source-map",

  module: {
    rules: [
      // Транспилируем js с babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },

      // Компилируем SCSS в CSS
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          'css-loader', // translates CSS into CommonJS
          'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },

      // Подключаем шрифты из css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './fonts/[name].[ext]', // путь для файлов шрифтов
              outputPath: 'fonts', // куда складывать файлы шрифтов
            },
          },
        ],
      },

      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './img/[name].[ext]',
              outputPath: 'img', // папка, куда файлы будут копироваться
            },
          },
        ],
      },

      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './img/icons/[name].[ext]',
              outputPath: './img/icons', // папка, куда файлы будут копироваться
            },
          },
        ],
      },

      // Подключаем картинки из css
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: 'file-loader?name=./static/[name].[ext]'
          },
        ]
      },
    ],
  },
  plugins: [
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      title: 'Webpack 4 Starter',
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
      scriptLoading: 'defer',
    }),

    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),

    // Копируем картинки
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/img', to: 'img' },
        { from: './src/img/icons', to: 'img/icons' },
      ]
    })
  ],
};