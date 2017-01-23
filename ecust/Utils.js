/**
 * Created by fisher at 5:59 PM on 1/23/17.
 */

'use strict';

require('whatwg-fetch');

let toJSON = (response) => response.json();

exports.doFetch = (path) => {
	return fetch(path, {
		credentials: 'include'
	}).then(toJSON);
};
