/**
 * Created by fisher at 22:05 on 3/14/17.
 */

'use strict';

const JWC = require('./../index');
const assert = require('chai').assert;
const should = require('chai').should();
const expect = require('chai').expect;

/** @namespace news.attachments */

const isNewsValid = (news) => {
	expect(news.path).to.be.a('string').and.not.be.empty;
	expect(news.name).to.be.a('string').and.not.be.empty;
	expect(news.date).to.be.a('string').and.have.lengthOf(10);
	expect(news.md5).to.be.a('string').and.have.lengthOf(32);
	expect(news.tag).to.be.least(0).and.most(4);
	if (news.attachments) {
		expect(news.attachments).to.be.a('array');
		for (let j = 0; j < news.attachments.length; j++) {
			let attachment = news.attachments[j];
			expect(attachment.path).to.be.a('string').and.not.be.empty;
			expect(attachment.name).to.be.a('string').and.not.be.empty;
			expect(attachment.format).to.be.a('string').and.not.be.empty;
			if (attachment.path.startsWith('/')) {
				expect(attachment.size).to.be.least(0);
				expect(attachment.md5).to.be.a('string').and.have.lengthOf(32);
			}
		}
	}
};

describe('JWC Newses', function () {
	it('should return the valid newses.', function (done) {
		JWC.newsesList().then(newses => {
			assert.isArray(newses, 'Expected newses array!');
			newses.map(isNewsValid);
			done();
		}).catch(err => {
			console.error(err);
		});
	});
});
