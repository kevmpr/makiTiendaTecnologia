import mysql from "mysql2";
import { config } from "../db/mysql.config.js";

export const connection = mysql.createPool(config);

/*
connection.query('DROP TABLE products')

connection.query(`
CREATE TABLE IF NOT EXISTS users(
    idUsers INT AUTO_INCREMENT PRIMARY KEY,
    nameUsers VARCHAR(50) NOT NULL,
    lastNameUsers VARCHAR(50) NOT NULL,
   	emailUsers VARCHAR(50) NOT NULL,
   	passwordUsers VARCHAR(50) NOT NULL,
    genderUsers ENUM('Masculino', 'Femenino', 'Otro') NULL,
    telUsers INT NULL,
    imageUsers INT NULL
);

INSERT INTO users (nameUsers, lastNameUsers, emailUsers, passwordUsers, genderUsers, telUsers, imageUsers)
	VALUES	('Pablo', 'Ganes', 'pabloganes@gmail.com', '123', 'Masculino', 1140294816, 'img1'), 
			('Gabriel', 'Medina', 'gabrielmedina@gmail.com', '123', 'Masculino', 1130292240, 'img2'),
    		('Sofia', 'Rodriguez', 'sofiarodriguez@gmail.com', '123', 'Femenino', 1109221292, 'img3'), 
			('Micaela', 'Aquino', 'micaelaaquino@gmail.com', '123', 'Femenino', 1138837654, 'img4'),
            ('Alex', 'Perez', 'alexperez@gmail.com', '123', 'Otro', 1123463728, 'img5'),
            ('Charly', 'Divino', 'charlydivino@gmail.com', '123', 'Otro', 1144509908, 'img6');

CREATE TABLE IF NOT EXISTS products(
	idProducts INT AUTO_INCREMENT PRIMARY KEY,
    nameProducts VARCHAR(50) NOT NULL,
    priceProducts FLOAT NOT NULL,
    stockProducts INT NOT NULL,
    imageProducts INT NULL,
    categoryProducts ENUM('TV', 'Movil', 'Computacion')
);

INSERT INTO products (nameProducts, priceProducts, stockProducts, imageProducts, categoryProducts)
	VALUES	('Smart TV 55', 6580000, 89, 'img1', 'TV'), 
			('OLED 64 SAMSUNG', 87300000, 40, 'img2', 'TV'),
    		('Samsung A52', 580000, 20, 'img1', 'Movil'), 
			('iPhone 15', 2500000, 10, 'img2', 'Movil'),
            ('Notebook ASUS', 4200000, 50, 'img5', 'Computacion'),
            ('Notebook MSI', 3700000, 38, 'img6', 'Computacion');

CREATE TABLE IF NOT EXISTS orders(
	idOrders INT AUTO_INCREMENT PRIMARY KEY,
	idUsers INT,
    dateOrders VARCHAR(50) NULL,
    stateOrders ENUM('Entregado', 'En espera', 'Cancelado'),
    FOREIGN KEY (idUsers) REFERENCES users(idUsers)
);

INSERT INTO orders (idUsers, dateOrders, stateOrders) VALUES
	(1, '04-07-24', 'Entregado'),
    (2, '04-07-24', 'Entregado'),
    (3, '04-07-24', 'En espera'),
    (4, '04-07-24', 'En espera'),
    (5, '04-07-24', 'Cancelado'),
    (6, '04-07-24', 'Cancelado');

CREATE TABLE IF NOT EXISTS ordersxproducts(
	idOrders INT,
	idProducts INT,
    quantityOxp INT NULL,
    priceOxp FLOAT NULL,
    FOREIGN KEY (idOrders) REFERENCES orders(idOrders),
    FOREIGN KEY (idProducts) REFERENCES products(idProducts)
);

INSERT INTO ordersxproducts VALUES
	(1, 1, 3, NULL),
    (1, 2, 4, NULL),
    (1, 3, 30, NULL),
    (2, 4, 21, NULL),
    (2, 5, 12, NULL),
    (3, 6, 1, NULL);
`)
*/
