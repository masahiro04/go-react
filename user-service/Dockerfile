FROM golang:1.15.2-alpine

RUN apk add --no-cache curl

RUN mkdir /go/src/app
WORKDIR /go/src/app
ADD . /go/src/app

RUN go get -u github.com/cosmtrek/air && \
  go build -o /go/bin/air github.com/cosmtrek/air

CMD air
