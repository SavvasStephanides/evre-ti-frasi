command=$1
docker run -it --rm -v $PWD:/evre-ti-frasi -w /evre-ti-frasi -p 5173:5173 node:23-alpine3.19 $1