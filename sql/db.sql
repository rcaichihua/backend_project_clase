CREATE TABLE grade
(
    id        SERIAL PRIMARY KEY,
    grade     INTEGER     NOT NULL,
    level     VARCHAR(20) NOT NULL,
    updatedAt TIMESTAMP   NOT NULL,
    createdAt TIMESTAMP   NOT NULL
);

ALTER TABLE grade RENAME COLUMN updatedat TO "updatedAt";
ALTER TABLE grade RENAME COLUMN createdat TO "createdAt";

CREATE TABLE gender
(
    id        SERIAL PRIMARY KEY,
    name      VARCHAR(25) NOT NULL,
    updatedAt TIMESTAMP   NOT NULL,
    createdAt TIMESTAMP   NOT NULL
);

ALTER TABLE gender RENAME COLUMN updatedat TO "updatedAt";
ALTER TABLE gender RENAME COLUMN createdat TO "createdAt";

CREATE TABLE users
(
    id        SERIAL PRIMARY KEY,
    name      VARCHAR(30)  NOT NULL,
    email     VARCHAR(30)  NOT NULL,
    password  VARCHAR(250) NOT NULL,
    lastLogin DATE         NOT NULL,
    updatedAt TIMESTAMP    NOT NULL,
    createdAt TIMESTAMP    NOT NULL
);

ALTER TABLE users RENAME COLUMN lastLogin TO "lastLogin";
ALTER TABLE users RENAME COLUMN updatedat TO "updatedAt";
ALTER TABLE users RENAME COLUMN createdat TO "createdAt";

CREATE TABLE guardian
(
    id        SERIAL PRIMARY KEY,
    dni       VARCHAR(20) UNIQUE NOT NULL,
    lastname  VARCHAR(150)       NOT NULL,
    name      VARCHAR(70)        NOT NULL,
    email     VARCHAR(200)       NOT NULL,
    phone     INTEGER            NOT NULL,
    updatedAt TIMESTAMP          NOT NULL,
    createdAt TIMESTAMP          NOT NULL,
    idGender  INTEGER REFERENCES gender (id) ON UPDATE CASCADE
);

ALTER TABLE guardian RENAME COLUMN lastname TO "lastName";
ALTER TABLE guardian RENAME COLUMN updatedat TO "updatedAt";
ALTER TABLE guardian RENAME COLUMN createdat TO "createdAt";
ALTER TABLE guardian RENAME COLUMN idGender TO "idGender";

CREATE TABLE student
(
    id         SERIAL PRIMARY KEY,
    dni        VARCHAR(15) UNIQUE NOT NULL,
    lastname   VARCHAR(150)       NOT NULL,
    name       VARCHAR(70)        NOT NULL,
    birthday   DATE               NOT NULL,
    status     BOOLEAN DEFAULT TRUE,
    updatedAt  TIMESTAMP          NOT NULL,
    createdAt  TIMESTAMP          NOT NULL,
    idGender   INTEGER REFERENCES gender (id) ON UPDATE CASCADE,
    idGuardian INTEGER REFERENCES guardian (id) ON UPDATE CASCADE,
    idUser     INTEGER REFERENCES users (id) ON UPDATE CASCADE
);

ALTER TABLE student RENAME COLUMN lastname TO "lastName";
ALTER TABLE student RENAME COLUMN updatedat TO "updatedAt";
ALTER TABLE student RENAME COLUMN createdat TO "createdAt";
ALTER TABLE student RENAME COLUMN idGender TO "idGender";
ALTER TABLE student RENAME COLUMN idGuardian TO "idGuardian";
ALTER TABLE student RENAME COLUMN idUser TO "idUser";

CREATE TABLE area
(
    id        SERIAL PRIMARY KEY,
    name      VARCHAR(25) NOT NULL,
    updatedAt TIMESTAMP   NOT NULL,
    createdAt TIMESTAMP   NOT NULL
);

ALTER TABLE area RENAME COLUMN updatedat TO "updatedAt";
ALTER TABLE area RENAME COLUMN createdat TO "createdAt";

CREATE TABLE criterion
(
    id        SERIAL PRIMARY KEY,
    name      VARCHAR(25),
    updatedAt TIMESTAMP NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    idArea INTEGER REFERENCES area(id) ON UPDATE CASCADE
);

ALTER TABLE criterion RENAME COLUMN updatedat TO "updatedAt";
ALTER TABLE criterion RENAME COLUMN createdat TO "createdAt";
ALTER TABLE criterion RENAME COLUMN idarea TO "idArea";

CREATE TABLE employee
(
    id        SERIAL PRIMARY KEY,
    dni       VARCHAR(15) UNIQUE NOT NULL,
    lastname  VARCHAR(150)       NOT NULL,
    name      VARCHAR(70)        NOT NULL,
    birthday  DATE               NOT NULL,
    email     VARCHAR(200)       NOT NULL,
    phone     VARCHAR(11)        NOT NULL,
    status    BOOLEAN DEFAULT TRUE,
    updatedAt TIMESTAMP          NOT NULL,
    createdAt TIMESTAMP          NOT NULL,
    idUser    INTEGER REFERENCES users (id) ON UPDATE CASCADE
);

ALTER TABLE employee RENAME COLUMN lastname TO "lastName";
ALTER TABLE employee RENAME COLUMN updatedat TO "updatedAt";
ALTER TABLE employee RENAME COLUMN createdat TO "createdAt";
ALTER TABLE employee RENAME COLUMN idUser TO "idUser";

CREATE TABLE course
(
    id          SERIAL PRIMARY KEY,
    year        INTEGER   NOT NULL,
    shift       VARCHAR(50) NOT NULL,
    status      BOOLEAN DEFAULT TRUE,
    updatedAt   TIMESTAMP NOT NULL,
    createdAt   TIMESTAMP NOT NULL,
    idEmployee  INTEGER REFERENCES employee (id) ON UPDATE CASCADE,
    idCriterion INTEGER REFERENCES criterion (id) ON UPDATE CASCADE,
    idGrade     INTEGER REFERENCES grade (id) ON UPDATE CASCADE
);

ALTER TABLE course RENAME COLUMN updatedat TO "updatedAt";
ALTER TABLE course RENAME COLUMN createdat TO "createdAt";
ALTER TABLE course RENAME COLUMN idEmployee TO "idEmployee";
ALTER TABLE course RENAME COLUMN idCriterion TO "idCriterion";
ALTER TABLE course RENAME COLUMN idGrade TO "idGrade";

CREATE TABLE score
(
    id        SERIAL PRIMARY KEY,
    first     DECIMAL(4, 2) DEFAULT 0,
    second    DECIMAL(4, 2) DEFAULT 0,
    average   DECIMAL(4, 2) DEFAULT 0,
    bimester  INTEGER   NOT NULL,
    updatedAt TIMESTAMP NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    idCourse  INTEGER REFERENCES course (id) ON UPDATE CASCADE,
    idStudent INTEGER REFERENCES student (id) ON UPDATE CASCADE
);

ALTER TABLE score RENAME COLUMN updatedat TO "updatedAt";
ALTER TABLE score RENAME COLUMN createdat TO "createdAt";
ALTER TABLE score RENAME COLUMN idCourse TO "idCourse";
ALTER TABLE score RENAME COLUMN idStudent TO "idStudent";

CREATE TABLE payment
(
    id        SERIAL PRIMARY KEY,
    year      INTEGER       NOT NULL,
    march     DECIMAL(8, 2) NOT NULL,
    april     DECIMAL(8, 2) NOT NULL,
    may       DECIMAL(8, 2) NOT NULL,
    june      DECIMAL(8, 2) NOT NULL,
    july      DECIMAL(8, 2) NOT NULL,
    august    DECIMAL(8, 2) NOT NULL,
    september DECIMAL(8, 2) NOT NULL,
    october   DECIMAL(8, 2) NOT NULL,
    november  DECIMAL(8, 2) NOT NULL,
    december  DECIMAL(8, 2) NOT NULL,
    updatedAt TIMESTAMP     NOT NULL,
    createdAt TIMESTAMP     NOT NULL,
    idStudent INTEGER REFERENCES student (id) ON UPDATE CASCADE
);

ALTER TABLE payment RENAME COLUMN updatedat TO "updatedAt";
ALTER TABLE payment RENAME COLUMN createdat TO "createdAt";
ALTER TABLE payment RENAME COLUMN idStudent TO "idStudent";

CREATE TABLE rol
(
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(50)  NOT NULL,
    description VARCHAR(200) NOT NULL,
    updatedAt   TIMESTAMP    NOT NULL,
    createdAt   TIMESTAMP    NOT NULL
);

ALTER TABLE rol RENAME COLUMN updatedat TO "updatedAt";
ALTER TABLE rol RENAME COLUMN createdat TO "createdAt";

CREATE TABLE rol_user
(
    id        SERIAL PRIMARY KEY,
    updatedAt TIMESTAMP NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    idRol     INTEGER REFERENCES rol (id) ON UPDATE CASCADE,
    idUser    INTEGER REFERENCES users (id) ON UPDATE CASCADE
);

ALTER TABLE rol_user RENAME COLUMN updatedat TO "updatedAt";
ALTER TABLE rol_user RENAME COLUMN createdat TO "createdAt";
ALTER TABLE rol_user RENAME COLUMN idRol TO "idRol";
ALTER TABLE rol_user RENAME COLUMN idUser TO "idUser";

CREATE TABLE student_course
(
    id        SERIAL PRIMARY KEY,
    updatedAt TIMESTAMP NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    idCourse  INTEGER REFERENCES course (id) ON UPDATE CASCADE,
    idStudent INTEGER REFERENCES student (id) ON UPDATE CASCADE
);

ALTER TABLE student_course RENAME COLUMN updatedat TO "updatedAt";
ALTER TABLE student_course RENAME COLUMN createdat TO "createdAt";
ALTER TABLE student_course RENAME COLUMN idCourse TO "idCourse";
ALTER TABLE student_course RENAME COLUMN idStudent TO "idStudent";

CREATE TABLE attendance
(
    id        SERIAL PRIMARY KEY,
    day       DATE      NOT NULL,
    status    BOOLEAN DEFAULT FALSE,
    updatedAt TIMESTAMP NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    idCourse  INTEGER REFERENCES course (id) ON UPDATE CASCADE,
    idStudent INTEGER REFERENCES student (id) ON UPDATE CASCADE
);

ALTER TABLE attendance RENAME COLUMN updatedat TO "updatedAt";
ALTER TABLE attendance RENAME COLUMN createdat TO "createdAt";
ALTER TABLE attendance RENAME COLUMN idCourse TO "idCourse";
ALTER TABLE attendance RENAME COLUMN idStudent TO "idStudent";
