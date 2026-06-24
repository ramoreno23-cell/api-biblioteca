CREATE DATABASE biblioteca_api;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE autores (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    nacionalidad VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE libros (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    editorial VARCHAR(100),
    anio_publicacion INT,
    autor_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_autor
    FOREIGN KEY (autor_id)
    REFERENCES autores(id)
    ON DELETE CASCADE
);


--insercion de datos dummy
INSERT INTO autores(nombre, nacionalidad)
VALUES
('Gabriel García Márquez','Colombiano'),
('Julio Verne','Francés'),
('Stephen King','Estadounidense');


INSERT INTO libros(titulo, editorial, anio_publicacion, autor_id)
VALUES
('Cien años de soledad','Sudamericana',1967,1),
('Viaje al centro de la Tierra','Pierre-Jules Hetzel',1864,2),
('It','Viking Press',1986,3);

INSERT INTO usuarios(nombre, correo, password)
VALUES
('Ricardo','ricardo@gmail.com','123456'),
('Admin','admin@gmail.com','admin123');

--Modificacion de contraseña a una encriptada para que funcione con bycrypt
UPDATE usuarios
SET password = '$2b$10$jVZvTiCbtUScc53zWbmBveLUqeciM0sAB7.XPQSv/C.0B8Zs7CEUi'
WHERE password = '123456'; 

