package controllers

import (
	models "api/models"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	"net/http"
)

func FindBlogs(c *gin.Context) {
	// DBに接続
	db := c.MustGet("db").(*gorm.DB)

	var blogs []models.Blog
	db.Find(&blogs)

	c.JSON(http.StatusOK, gin.H{"data": blogs})
}

func CreateBlog(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)
	var input models.CreateBlogInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	blog := models.Blog{Title: input.Body, Body: input.Body}
	db.Create(&blog)

	c.JSON(http.StatusOK, gin.H{"data": blog})
}

func FindBlog(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)

	var blog models.Blog
	if err := db.Where("id = ?", c.Param("id")).First(&blog).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": blog})
}

func UpdateBlog(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)

	var blog models.Blog
	if err := db.Where("id = ?", c.Param("id")).First(&blog).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var input models.UpdateBlogInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	db.Model(&blog).Updates(input)

	c.JSON(http.StatusOK, gin.H{"data": blog})
}

func DeleteBlog(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)

	var blog models.Blog
	if err := db.Where("id = ?", c.Param("id")).First(&blog).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
		return
	}

	db.Delete(&blog)

	c.JSON(http.StatusOK, gin.H{"data": true})
}
