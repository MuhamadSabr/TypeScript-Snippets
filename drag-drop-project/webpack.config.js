const path = require('path'); //to import path module
module.exports = {
	mode : 'development',
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
		publicPath: '/dist/'
	},
	devtool: 'inline-source-map',
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
    }
};