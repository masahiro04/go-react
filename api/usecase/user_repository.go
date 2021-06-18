package usecase

import (
	"api/domain"

	"github.com/jinzhu/gorm"
)

type UserRepository interface {
	FindById(db *gorm.DB, id int) (user domain.Users, err error)
}
