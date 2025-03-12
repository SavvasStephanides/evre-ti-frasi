container:
	docker run -it --rm -v ${PWD}:/evre-ti-frasi -w /evre-ti-frasi -p 5173:5173 node:23-alpine3.19 sh

run-dev:
	docker run -it --rm -v ${PWD}:/evre-ti-frasi -w /evre-ti-frasi -p 5173:5173 node:23-alpine3.19 npm run dev

populate:
	docker run -it --rm -v ${PWD}:/evre-ti-frasi -w /evre-ti-frasi -p 5173:5173 node:23-alpine3.19 node scripts/populateDailyPhrase.v2.js

add-phrase:
	docker run -it --rm -v ${PWD}:/evre-ti-frasi -w /evre-ti-frasi -p 5173:5173 node:23-alpine3.19 node scripts/addPhraseToDatabase.js

checks:
	docker run -it --rm -v ${PWD}:/evre-ti-frasi -w /evre-ti-frasi -p 5173:5173 node:23-alpine3.19 node scripts/runChecks.js

push-changes:
	docker run -it --rm -v ${PWD}:/evre-ti-frasi -w /evre-ti-frasi -p 5173:5173 node:23-alpine3.19 sh -c "apk add git && git config --global user.email savvascyp@hotmail.com && git add -A && git commit -m 'Updates' && git push"