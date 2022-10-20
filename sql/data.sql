INSERT INTO rol("name", "description", "updatedAt", "createdAt")
VALUES ('Administrador', 'Acceso a todo', '2022-10-01T21:42:28.444Z', '2022-10-01T21:42:28.444Z');

INSERT INTO rol("name", "description", "updatedAt", "createdAt")
VALUES ('Profesor', 'Acceso a notas', '2022-10-01T21:42:28.444Z', '2022-10-01T21:42:28.444Z');

INSERT INTO rol("name", "description", "updatedAt", "createdAt")
VALUES ('Secretaria', 'Acceso a pagos', '2022-10-01T21:42:28.444Z', '2022-10-01T21:42:28.444Z');

INSERT INTO rol("name", "description", "updatedAt", "createdAt")
VALUES ('Alumno', 'Consultar notas y pagos', '2022-10-01T21:42:28.444Z', '2022-10-01T21:42:28.444Z');


INSERT INTO users("name", "email", "password", "lastLogin", "updatedAt", "createdAt")
VALUES ('Luis Alva', 'luis.alva@gmail.com', '1234', '2022-10-02T21:42:28.444Z', '2022-10-01T21:42:28.444Z', '2022-10-01T21:42:28.444Z');

INSERT INTO users("name", "email", "password", "lastLogin", "updatedAt", "createdAt")
VALUES ('Eduardo Baldovino', 'eduardo.baldovino@gmail.com', '2345', '2022-10-02T21:42:28.444Z', '2022-10-01T21:42:28.444Z',
        '2022-10-01T21:42:28.444Z');

INSERT INTO users("name", "email", "password", "lastLogin", "updatedAt", "createdAt")
VALUES ('Hans', 'hans@gmail.com', '7896', '2022-10-02T21:42:28.444Z', '2022-10-01T21:42:28.444Z', '2022-10-01T21:42:28.444Z');

INSERT INTO users("name", "email", "password", "lastLogin", "updatedAt", "createdAt")
VALUES ('jolaya', 'jolaya@gmail.com', '1111', '2022-10-02T21:42:28.444Z', '2022-10-01T21:42:28.444Z', '2022-10-01T21:42:28.444Z');


INSERT INTO rol_user("updatedAt", "createdAt", "idRol", "idUser")
VALUES ('2022-10-01T21:42:28.444Z', '2022-10-01T21:42:28.444Z', 2, 1);

INSERT INTO rol_user("updatedAt", "createdAt", "idRol", "idUser")
VALUES ('2022-10-01T21:42:28.444Z', '2022-10-01T21:42:28.444Z', 3, 2);

INSERT INTO rol_user("updatedAt", "createdAt", "idRol", "idUser")
VALUES ('2022-10-01T21:42:28.444Z', '2022-10-01T21:42:28.444Z', 4, 3);

INSERT INTO rol_user("updatedAt", "createdAt", "idRol", "idUser")
VALUES ('2022-10-01T21:42:28.444Z', '2022-10-01T21:42:28.444Z', 2, 4);


INSERT INTO area("name", "updatedAt", "createdAt")
VALUES ('Matematicas', '2022-10-01T21:42:28.444Z', '2022-10-01T21:42:28.444Z');

INSERT INTO area("name", "updatedAt", "createdAt")
VALUES ('Comunicacion', '2022-10-01T21:42:28.444Z', '2022-10-01T21:42:28.444Z');

INSERT INTO area("name", "updatedAt", "createdAt")
VALUES ('Ciencia y tecnologia', '2022-10-01T21:42:28.444Z', '2022-10-01T21:42:28.444Z');


INSERT INTO criterion("name", "updatedAt", "createdAt", "idArea")
VALUES ('Algebra', '2022-10-01T21:42:28.444Z', '2022-10-01T21:42:28.444Z', 1);

INSERT INTO criterion("name", "updatedAt", "createdAt", "idArea")
VALUES ('Geometria', '2022-10-01T21:42:28.444Z', '2022-10-01T21:42:28.444Z', 1);

INSERT INTO criterion("name", "updatedAt", "createdAt", "idArea")
VALUES ('Trigonometria', '2022-10-01T21:42:28.444Z', '2022-10-01T21:42:28.444Z', 1);

INSERT INTO criterion("name", "updatedAt", "createdAt")
VALUES ('Comprension Lectora', '2022-10-01T21:42:28.444Z', '2022-10-01T21:42:28.444Z');

INSERT INTO criterion("name", "updatedAt", "createdAt")
VALUES ('Lenguaje', '2022-10-01T21:42:28.444Z', '2022-10-01T21:42:28.444Z');

INSERT INTO criterion("name", "updatedAt", "createdAt")
VALUES ('Quimica', '2022-10-01T21:42:28.444Z', '2022-10-01T21:42:28.444Z');

INSERT INTO criterion("name", "updatedAt", "createdAt")
VALUES ('Fisica', '2022-10-01T21:42:28.444Z', '2022-10-01T21:42:28.444Z');


INSERT INTO gender("name", "updatedAt", "createdAt")
VALUES ('Masculino', '2022-10-02T21:53:39.998Z', '2022-10-02T21:53:39.998Z');

INSERT INTO gender("name", "updatedAt", "createdAt")
VALUES ('Femenino', '2022-10-02T21:53:39.998Z', '2022-10-02T21:53:39.998Z');

INSERT INTO gender("name", "updatedAt", "createdAt")
VALUES ('No binario', '2022-10-02T21:53:39.998Z', '2022-10-02T21:53:39.998Z');


INSERT INTO grade("grade", "level", "updatedAt", "createdAt")
VALUES (1, 'primaria', '2022-10-02T21:53:39.998Z', '2022-10-02T21:53:39.998Z');

INSERT INTO grade("grade", "level", "updatedAt", "createdAt")
VALUES (2, 'primaria', '2022-10-02T21:53:39.998Z', '2022-10-02T21:53:39.998Z');

INSERT INTO grade("grade", "level", "updatedAt", "createdAt")
VALUES (1, 'secundaria', '2022-10-02T21:53:39.998Z', '2022-10-02T21:53:39.998Z');

INSERT INTO grade("grade", "level", "updatedAt", "createdAt")
VALUES (2, 'secundaria', '2022-10-02T21:53:39.998Z', '2022-10-02T21:53:39.998Z');


INSERT INTO guardian("dni", "lastName", "name", "email", "phone", "updatedAt", "createdAt", "idGender")
VALUES ('08232082', 'Baldovino Paz', 'Eduardo Alvaro', 'ebaldo@hotmail.com', 978571741, '2022-10-02T21:53:39.998Z',
        '2022-10-02T21:53:39.998Z', 1);

INSERT INTO guardian("dni", "lastName", "name", "email", "phone", "updatedAt", "createdAt", "idGender")
VALUES ('12345678', 'Rodriguez Romero', 'Alejandro', 'romero@hotmail.com', 999888777, '2022-10-02T21:53:39.998Z',
        '2022-10-02T21:53:39.998Z', 1);


INSERT INTO employee("dni", "lastName", "name", "birthday", "email", "phone", "status", "updatedAt", "createdAt",
                     "idUser")
VALUES ('78945612', 'Olaya Regortas', 'Jose', '1/8/1999', 'jolaya@gmail.com', '963258741', true,
        '2022-10-02T21:53:39.998Z', '2022-10-02T21:53:39.998Z', 4);


INSERT INTO student("dni", "lastName", "name", "birthday", "status", "updatedAt", "createdAt", "idGender", "idGuardian", "idUser")
VALUES ('76793048', 'Baldovino Montes', 'Eduardo Raul Jesus', '8/12/1995', true, '2022-10-02T21:53:39.998Z',
        '2022-10-02T21:53:39.998Z', 1, 2, 2);


INSERT INTO course("year", "status", "shift", "updatedAt", "createdAt", "idEmployee", "idCriterion", "idGrade")
VALUES (2022, true, 'Tarde', '2022-10-02T21:53:39.998Z', '2022-10-02T21:53:39.998Z', 1, 1, 1);


INSERT INTO student_course("updatedAt", "createdAt", "idCourse", "idStudent")
VALUES ('2022-10-02T21:53:39.998Z', '2022-10-02T21:53:39.998Z', 1, 1);


INSERT INTO payment("year", "march", "april", "may",
                    "june", "july", "august", "september", "october", "november", "december", "updatedAt", "createdAt",
                    "idStudent")
VALUES ('2022', 200, 200, 0, 0, 0, 0, 0, 0, 0, 0, '2022-10-02T21:53:39.998Z', '2022-10-02T21:53:39.998Z', 1);


INSERT INTO score("first", "second", "average", "bimester", "updatedAt", "createdAt", "idCourse", "idStudent")
VALUES (12, 11, 12, 1, '2022-10-02T21:53:39.998Z', '2022-10-02T21:53:39.998Z', 1, 1);


INSERT INTO attendance("day", "status", "updatedAt", "createdAt", "idCourse", "idStudent")
VALUES ('09-27-2022', true, '2022-10-02T21:53:39.998Z', '2022-10-02T21:53:39.998Z', 1, 1);

INSERT INTO attendance("day", "status", "updatedAt", "createdAt", "idCourse", "idStudent")
VALUES ('09-28-2022', true, '2022-10-02T21:53:39.998Z', '2022-10-02T21:53:39.998Z', 1, 1);

