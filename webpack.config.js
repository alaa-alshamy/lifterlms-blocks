/**
 * Webpack config
 *
 * @package LifterLMS_Blocks/Scripts/Dev
 *
 * @since 1.8.0
 * @version 1.10.0
 */

const
	generate = require( '@lifterlms/scripts/config/webpack.config' ),
	config   = generate( {
		css: [ 'blocks' ],
		js: [ 'blocks' ],
	} );

config.module.rules.forEach( rule => {

	if ( '\\.(sc|sa)ss$' === rule.test.source ) {
		rule.use[ 3 ].options.prependData = '@import "./src/scss/_vars.scss";\n';
	}

} );

module.exports = config;
