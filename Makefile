docker := docker run -it --rm -v ${PWD}:/evre-ti-frasi -w /evre-ti-frasi -p 5173:5173 node:23-alpine3.19

container:
	$(docker) sh

install:
	$(docker) npm i

run-dev:
	$(docker) npm run dev

populate:
	$(docker) node scripts/populateDailyPhrase.v2.js

add-phrase:
	$(docker) node scripts/addPhraseToDatabase.js

test:
	$(docker) npm test

checks:
	$(docker) node scripts/runChecks.js

build-preview:
	rm -rf build
	$(docker) npm run build
	docker run --name evretifrasi-nginx -p 80:80 -v ${PWD}/build:/usr/share/nginx/html/evretifrasi:ro -d nginx:1.27.4-alpine
	open "http://localhost/evretifrasi"

build-preview-stop:
	docker stop evretifrasi-nginx
	docker rm evretifrasi-nginx

push-changes:
	$(docker) sh -c "apk add git && git config --global user.email savvascyp@hotmail.com && git add -A && git commit -m '${message}' && git push"