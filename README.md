# Lovecust Network API Library Based on NodeJs/JavaScript.

<!-- > Created by Fisher at 21:29 on 2017-01-23. -->

Lovecust Network API used both for backend([node-fetch][github-bitinn-node-fetch]) and frontend([window.fetch][github-github-fetch]).

## API Routes Summary

- ecust
	- jwc
		- newses
			- {{news-id}}
				- comments
	- library
		- status
			- statistics

## Ecust APIs

- Ecust JWC Newses
	- [*GET* Ecust JWC Newses List][api-ecust-jwc-newses]
	- JWC News
		- [*GET* JWC News Detail][api-ecust-jwc-news]
		- Ecust JWC News Detail
			- [*GET* JWC News Comments List][api-ecust-jwc-news-comments]
			- *POST* a News Comment
- Ecust Library
	- [*GET* Library Status][api-ecust-library-status]
	- Library Status Statistics
		- [*GET* Library Status Statistics][api-ecust-library-status-statistics]


[github-github-fetch]: https://github.com/github/fetch "Github: Github/fetch"
[github-bitinn-node-fetch]: https://github.com/bitinn/node-fetch "Github: bitinn/node-fetch"
[api-ecust-jwc-newses]: http://apis.lovecust.com/apis/ecust/jwc/newses "API: Get Ecust Newses List"
[api-ecust-jwc-news]: http://apis.lovecust.com/apis/ecust/jwc/newses/29ba220583cae79ff0005e8804d676ab "API: Get Ecust JWC News Detail"
[api-ecust-jwc-news-comments]: http://apis.lovecust.com/apis/ecust/jwc/newses/29ba220583cae79ff0005e8804d676ab/comments "API: Get JWC News Comments"
[api-ecust-library-status]: http://apis.lovecust.com/apis/ecust/library/status "API: Get Ecust Library Status"
[api-ecust-library-status-statistics]: http://apis.lovecust.com/apis/ecust/library/status/statistics?interval=1&limit=100 "API: Get Library Status Statistics"

