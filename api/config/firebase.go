package config

import (
	"context"
	"log"

	firebase "firebase.google.com/go/v4"
	"firebase.google.com/go/v4/auth"
)

func NewFirebase() *auth.Client {
	app, err := firebase.NewApp(context.Background(), nil)
	if err != nil {
		log.Fatalf("error initializing app: %v\n", err)
	}

	appAuth, err := app.Auth(context.Background())
	if err != nil {
		log.Fatalf("Firebase load error: %v\n", err)
	}

	return appAuth
}
