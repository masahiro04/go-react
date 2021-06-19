package infrastructure

import (
	"github.com/hiyashikyuri/go-react/api/interfaces/controllers"

	"github.com/gin-gonic/gin"
)

type Routing struct {
	DB   *DB
	Gin  *gin.Engine
	Port string
}

func NewRouting(db *DB) *Routing {
	r := &Routing{
		DB:   db,
		Gin:  gin.Default(),
		Port: NewConfig().Routing.Production.Port,
	}
	r.setRouting()
	return r
}

func (r *Routing) setRouting() {
	usersController := controllers.NewUsersController(r.DB)
	r.Gin.GET("/users/:id", func(c *gin.Context) { usersController.Get(c) })
}
func (r *Routing) Run() {
	r.Gin.Run(r.Port)
}
