const CleanPlugin = require('clean-webpack-plugin');
const path = require('path'); //to import path module

module.exports = {
	mode : 'production',
	entry: './src/app.ts',
	devServer: {
		static: [
		  {
			directory: path.join(__dirname),
		  },
		],
	  },
	output: {
		filename : 'bundle.js',
		path     : path.resolve(__dirname, 'dist'), //create an absolute path to dist
	},
	module:{
	rules:[
	    {
	      test : /\.ts$/, //Look for .ts files
	      use  : 'ts-loader', // Let ts-loader handles those files
	     exclude: /node_modules/
	   }
	]
   },
    resolve:{
	    extensions:['.ts', '.js']
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]
};