/**
 * Created by fisher at 22:05 on 3/14/17.
 */

'use strict';

const JWC = require('./../index');

JWC.newsesList().then(newses => {
	console.log('newses: ', newses);
}).catch(err => {
	console.error(err);
});
