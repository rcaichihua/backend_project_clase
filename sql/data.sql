INSERT INTO rol("name","description","updatedAt","createdAt") VALUES
    ('Administrador','Acceso a todo','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z');

INSERT INTO rol("name","description","updatedAt","createdAt") VALUES
    ('Profesor','Acceso a notas','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z');

INSERT INTO rol("name","description","updatedAt","createdAt") VALUES
    ('Secretaria','Acceso a pagos','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z');

INSERT INTO rol("name","description","updatedAt","createdAt") VALUES
    ('Alumno','Consultar notas y pagos','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z');


INSERT INTO users("name","password","lastLogin","updatedAt","createdAt") VALUES
    ('Luis Alva','1234','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z');

INSERT INTO users("name","password","lastLogin","updatedAt","createdAt") VALUES
    ('Eduardo Baldovino','2345','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z');

INSERT INTO users("name","password","lastLogin","updatedAt","createdAt") VALUES
    ('Hans','7896','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z');

INSERT INTO users("name","password","lastLogin","updatedAt","createdAt") VALUES
    ('jolaya','1111','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z');


INSERT INTO rol_user("updatedAt","createdAt","idRol","idUser") VALUES
    ('2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z',2,1);

INSERT INTO rol_user("updatedAt","createdAt","idRol","idUser") VALUES
    ('2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z',3,2);

INSERT INTO rol_user("updatedAt","createdAt","idRol","idUser") VALUES
    ('2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z',4,3);

INSERT INTO rol_user("updatedAt","createdAt","idRol","idUser") VALUES
    ('2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z',2,4);


INSERT INTO area("name","updatedAt","createdAt") VALUES
    ('Matematicas','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z');

INSERT INTO area("name","updatedAt","createdAt") VALUES
    ('Comunicacion','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z');

INSERT INTO area("name","updatedAt","createdAt") VALUES
    ('Ciencia y tecnologia','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z');


INSERT INTO criterion("name","updatedAt","createdAt") VALUES
    ('Algebra','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z');

INSERT INTO criterion("name","updatedAt","createdAt") VALUES
    ('Geometria','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z');

INSERT INTO criterion("name","updatedAt","createdAt") VALUES
    ('Trigonometria','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z');

INSERT INTO criterion("name","updatedAt","createdAt") VALUES
    ('Comprension Lectora','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z');

INSERT INTO criterion("name","updatedAt","createdAt") VALUES
    ('Lenguaje','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z');

INSERT INTO criterion("name","updatedAt","createdAt") VALUES
    ('Quimica','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z');

INSERT INTO criterion("name","updatedAt","createdAt") VALUES
    ('Fisica','2021-12-04T00:47:07.238Z','2021-12-04T00:47:07.238Z');


INSERT INTO gender("name","updatedAt","createdAt") VALUES
    ('Masculino','2021-12-04T00:47:07.238Z','2022-12-04T00:47:07.238Z');

INSERT INTO gender("name","updatedAt","createdAt") VALUES
    ('Fenenino','2021-12-04T00:47:07.238Z','2022-12-04T00:47:07.238Z');

INSERT INTO gender("name","updatedAt","createdAt") VALUES
    ('No binario','2021-12-04T00:47:07.238Z','2022-12-04T00:47:07.238Z');


INSERT INTO grade("grade","level","updatedAt","createdAt") VALUES
    (1,'primaria','2021-12-04T00:47:07.238Z','2022-12-04T00:47:07.238Z');

INSERT INTO grade("grade","level","updatedAt","createdAt") VALUES
    (2,'primaria','2021-12-04T00:47:07.238Z','2022-12-04T00:47:07.238Z');

INSERT INTO grade("grade","level","updatedAt","createdAt") VALUES
    (1,'secundaria','2021-12-04T00:47:07.238Z','2022-12-04T00:47:07.238Z');

INSERT INTO grade("grade","level","updatedAt","createdAt") VALUES
    (2,'secundaria','2021-12-04T00:47:07.238Z','2022-12-04T00:47:07.238Z');


INSERT INTO guardian("dni","lastName","name","email","phone","updatedAt","createdAt","idGender")VALUES
    ('08232082','Baldovino Paz','Eduardo Alvaro','ebaldo@hotmail.com',978571741,'2022-12-04T00:47:07.238Z','2022-12-04T00:47:07.238Z',1);

INSERT INTO guardian("dni","lastName","name","email","phone","updatedAt","createdAt","idGender")VALUES
    ('12345678','Rodriguez Romero','Alejandro','romero@hotmail.com',999888777,'2022-12-04T00:47:07.238Z','2022-12-04T00:47:07.238Z',1);


INSERT INTO employee("dni","lastName","name","birthday","email","phone","status","updatedAt","createdAt","idUser")VALUES
    ('78945612','Olaya Regortas','Jose','1/8/1999','jolaya@gmail.com','963258741',true,'2022-12-04T00:47:07.238','2022-12-04T00:47:07.238',4);


INSERT INTO student("dni","lastName","name","birthday","status","updatedAt","createdAt","idGender","idGuardian","idGrade","idUser")VALUES
    ('76793048','Baldovino Montes','Eduardo Raul Jesus','8/12/1995',true,'2022-12-04T00:47:07.238','2022-12-04T00:47:07.238',1,2,2,2);


INSERT INTO shift("name","updatedAt","createdAt")VALUES
    ('Mañana','2022-12-04T00:47:07.238','2022-12-04T00:47:07.238');


INSERT INTO course("year","status","updatedAt","createdAt","idEmployee","idCriterion","idArea","idGrade","idShift")VALUES
    (2022,true,'2022-12-04T00:47:07.238','2022-12-04T00:47:07.238',1,1,1,2,1);


INSERT INTO area_employee("updatedAt","createdAt","idEmployee","idArea")VALUES
    ('2022-12-04T00:47:07.238','2022-12-04T00:47:07.238',1,1);


INSERT INTO student_course("updatedAt","createdAt","idCourse","idStudent")VALUES
    ('2022-12-04T00:47:07.238','2022-12-04T00:47:07.238',1,1);


INSERT INTO payment("year","march","april","may",
                    "june","july","august","september","october","november","december","updatedAt","createdAt","idStudent")VALUES
    ('2022',200,200,0,0,0,0,0,0,0,0,'2022-12-04T00:47:07.238','2022-12-04T00:47:07.238',1);


INSERT INTO score("first","second","average","bimester","updatedAt","createdAt","idCourse","idStudent")VALUES
    (12,11,12,1,'2022-12-04T00:47:07.238','2022-12-04T00:47:07.238',1,1);


INSERT INTO attendance("day","status","updatedAt","createdAt","idCourse","idStudent")VALUES
    ('09-27-2022',true,'2022-12-04T00:47:07.238','2022-12-04T00:47:07.238',1,1);

INSERT INTO attendance("day","status","updatedAt","createdAt","idCourse","idStudent")VALUES
    ('09-28-2022',true,'2022-12-04T00:47:07.238','2022-12-04T00:47:07.238',1,1);

