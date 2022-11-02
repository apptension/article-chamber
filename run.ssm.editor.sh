docker-compose build ssmeditor
CHAMBER_ENV=stage CHAMBER_SERVICE=backend docker-compose run --rm ssmeditor


docker run --env CHAMBER_ENV=stage \
--env CHAMBER_SERVICE=backend \
--env AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID} \
--env AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY} \
--env AWS_DEFAULT_REGION=${AWS_DEFAULT_REGION} \
--env AWS_SESSION_TOKEN=${AWS_SESSION_TOKEN} \
--env AWS_SECURITY_TOKEN=${AWS_SECURITY_TOKEN} \
--env AWS_SESSION_EXPIRATION=${AWS_SESSION_EXPIRATION} --rm ssmeditor

