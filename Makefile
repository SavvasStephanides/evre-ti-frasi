container:
	docker run -it --rm -v ${PWD}:/evre-ti-frasi -w /evre-ti-frasi -p 5173:5173 node:23-alpine3.19 sh

run-dev:
	docker run -it --rm -v ${PWD}:/evre-ti-frasi -w /evre-ti-frasi -p 5173:5173 node:23-alpine3.19 npm run dev

populate:
	docker run -it --rm -v ${PWD}:/evre-ti-frasi -w /evre-ti-frasi -p 5173:5173 node:23-alpine3.19 node scripts/populateDailyPhrase.v2.js

add-phrase:
	docker run -it --rm -v ${PWD}:/evre-ti-frasi -w /evre-ti-frasi -p 5173:5173 node:23-alpine3.19 node scripts/addPhraseToDatabase.js

test:
	docker run -it --rm -v ${PWD}:/evre-ti-frasi -w /evre-ti-frasi -p 5173:5173 node:23-alpine3.19 npm test

checks:
	docker run -it --rm -v ${PWD}:/evre-ti-frasi -w /evre-ti-frasi -p 5173:5173 node:23-alpine3.19 node scripts/runChecks.js

build-preview:
	rm -rf build
	docker run -it --rm -v ${PWD}:/evre-ti-frasi -w /evre-ti-frasi -p 5173:5173 node:23-alpine3.19 npm run build
	docker run --name evretifrasi-nginx -p 80:80 -v ${PWD}/build:/usr/share/nginx/html/evretifrasi:ro -d nginx:1.27.4-alpine
	echo "Preview ready: http://localhost/evretifrasi"

build-preview-stop:
	docker stop evretifrasi-nginx

push-changes:
	docker run -it --rm -v ${PWD}:/evre-ti-frasi -w /evre-ti-frasi -p 5173:5173 node:23-alpine3.19 sh -c "apk add git && git config --global user.email savvascyp@hotmail.com && git add -A && git commit -m '${message}' && git push"