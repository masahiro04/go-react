FROM golang:1.15.2-alpine

ENV LANG ja_JP.UTF-8
ENV TZ Asia/TOKYO

RUN apk add --update --no-cache ca-certificates git

WORKDIR /src
COPY go.mod .
COPY go.sum .

RUN go mod download
COPY . .

RUN CGO_ENABLED=0 go build -o /go/bin/air github.com/cosmtrek/air

CMD air
