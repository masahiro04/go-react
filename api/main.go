package main

import (
	"api/infrastructure"
)

func main() {
	db := infrastructure.NewDB()
	r := infrastructure.NewRouting(db)
	r.Run()
}
