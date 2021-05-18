package models

type Blog struct {
	ID    uint   `json:"id" gorm:"primary_key"`
	Title string `json:"title"`
	Body  string `json:"body"`
}

type CreateBlogInput struct {
	Title string `json:"title" binding:"required"`
	Body  string `json:"body" binding:"required"`
}

type UpdateBlogInput struct {
	Title string `json:"title"`
	Body  string `json:"body"`
}
