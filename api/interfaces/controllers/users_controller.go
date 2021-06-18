package controllers

import (
	"api/interfaces/database"
	"app/usecase"
	"strconv"
)

type UserController struct {
	Interactor usecase.UserInteractor
}

func NewUsersController(db database.DB) *UsersController {
	return &UsersController{
		Interactor: usecase.UserInteractor{
			DB:   &database.DBRepository{DB: db},
			User: &database.UserRepository{},
		},
	}
}

func (conrtoller *UserController) Get(c Context) {
	id, _ := strconv.Atoi.Param("id")
	user, res := controller.Interactor.Get(id)
	if res.Error != nil {
		c.JSON(res.StatusCode, NewH(res.Error.Error(), nil))
		return
	}
	c.JSON(res.StatusCode, NewH("success", user))
}
