package infrastructure

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type DB struct {
	Host       string
	Username   string
	Password   string
	DBName     string
	Connection *gorm.DB
}

func NewDB() *DB {
	c := NewConfig()
	return newDB(&DB{
		Host:     c.DB.Production.Host,
		Username: c.DB.Production.Username,
		Password: c.DB.Production.Password,
		DBName:   c.DB.Production.DBName,
	})
}

func newDB(d *DB) *DB {
	dsn := "host=" + d.Host + " user=" + d.Username + " password=" + d.Password + " dbname=" + d.DBName + " port=5432"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err.Error())
	}
	d.Connection = db
	return d
}

func (db *DB) Begin() *gorm.DB {
	return db.Connection.Begin()
}

func (db *DB) Connect() *gorm.DB {
	return db.Connection
}
