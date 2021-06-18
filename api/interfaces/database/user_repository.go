package database

import (
	"api/domain"
	"errors"

	"github.com/jinzhu/gorm"
)

type UserRepository struct{}

func (repo *UserRepository) FindById(db *gorm.DB, id int) (user domain.Users, err error) {
	user := domain.Users{}
	db.First(&user, id)
	if user.ID <= 0 {
		return domain.Users{}, errors.New("use is not found")
	}
	return user, nil
}
