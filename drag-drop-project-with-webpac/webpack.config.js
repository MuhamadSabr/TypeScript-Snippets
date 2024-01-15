const path = require('path'); //to import path module
module.exports = {
	entry: './src/app.ts',
	output: {
		filename : 'bundle.js',
		path     : path.resolve(__dirname, 'dist') //create an absolute path to dist
	},
	devtools: 'inline-source-map',
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