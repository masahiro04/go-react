package controllers

import (
	domain "api/domain"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

func FindBlogs(c *gin.Context) {
	// DBに接続
	db := c.MustGet("db").(*gorm.DB)

	var blogs []domain.Blog
	db.Find(&blogs)

	c.JSON(http.StatusOK, gin.H{"data": blogs})
}

func CreateBlog(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)
	var input domain.CreateBlogInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	blog := domain.Blog{Title: input.Body, Body: input.Body}
	db.Create(&blog)

	c.JSON(http.StatusOK, gin.H{"data": blog})
}

func FindBlog(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)

	var blog domain.Blog
	if err := db.Where("id = ?", c.Param("id")).First(&blog).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": blog})
}

func UpdateBlog(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)

	var blog domain.Blog
	if err := db.Where("id = ?", c.Param("id")).First(&blog).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var input domain.UpdateBlogInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	db.Model(&blog).Updates(input)

	c.JSON(http.StatusOK, gin.H{"data": blog})
}

func DeleteBlog(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)

	var blog domain.Blog
	if err := db.Where("id = ?", c.Param("id")).First(&blog).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
		return
	}

	db.Delete(&blog)

	c.JSON(http.StatusOK, gin.H{"data": true})
}
