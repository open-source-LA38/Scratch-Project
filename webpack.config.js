module.exports = {
  mode: 'development', 
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
module: {
  rules: [
    {
     test: /\.jsx?/,
     use:{
       loader: "babel-loader",
       options: {
         presets: ['@babel/preset-env', '@babel/preset-react']
       } 
     }, 
     exclude: "node_modules"      
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
  ]
 }

}