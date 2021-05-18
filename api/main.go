package main

import (
	controllers "api/controllers"
	"api/models"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	db := models.SetupModels()

	r.Use(func(c *gin.Context) {
		c.Set("db", db)
		c.Next()
	})

	r.GET("/blogs", controllers.FindBlogs)
	r.POST("/blogs", controllers.CreateBlog)
	r.GET("/blogs/:id", controllers.FindBlog)
	r.PATCH("/blogs/:id", controllers.UpdateBlog)
	r.DELETE("/blogs/:id", controllers.DeleteBlog)
	r.Run()
}
