FROM segment/chamber:2 AS chamber

FROM node:16 AS backend
COPY --from=chamber /chamber /bin/chamber
WORKDIR /usr/src/app
COPY . .
EXPOSE 3000
CMD [ "sh", "-c", "/bin/chamber exec env-stage-backend -- node server.js" ]
#CMD ["./scripts/run.sh"]