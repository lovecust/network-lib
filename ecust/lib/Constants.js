/**
 * Created by fisher at4:33 PM on 1/7/17.
 *
 * Lovecust.Ecust module Constant fields.
 */

'use strict';

const LovecustConstants = require('./../../Constants');

exports.PATH_ECUST_LIBRARY = LovecustConstants.PATH_ECUST + '/library';
exports.URL_LIBRARY_STATUS = exports.PATH_ECUST_LIBRARY + '/status';
exports.URL_LIBRARY_STATUS_STATISTICS = exports.URL_LIBRARY_STATUS + '/statistics?interval=1&limit=500';
