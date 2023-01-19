DROP DATABASE desafio;
CREATE DATABASE IF NOT EXISTS desafio;
USE desafio;

CREATE TABLE IF NOT EXISTS tipo_documentos(
        id INT AUTO_INCREMENT,
		tipo_documento_ext VARCHAR(30),
        tipo_documento_short VARCHAR(10),
        
        PRIMARY KEY(id)
);

INSERT INTO tipo_documentos VALUES (null, 'dni','dni');
INSERT INTO tipo_documentos VALUES (null, 'pasaporte','pasaporte');
INSERT INTO tipo_documentos VALUES (null, 'nie','nie');
    
CREATE TABLE IF NOT EXISTS users(
        id INT AUTO_INCREMENT,
        user_rol VARCHAR(15),
        descripcion VARCHAR(500),
        password VARCHAR (65),
        fecha_alta DATETIME,
        nombre VARCHAR(20), 
        apellido_1 VARCHAR(20), 
        apellido_2 VARCHAR (20),
        fecha_nac DATE,
        tipo_doc INT ,
        num_doc CHAR(10),
        sexo VARCHAR(20),
        prefijo VARCHAR(5),
        telefono INT,
        idioma_com VARCHAR(20),
        email VARCHAR(50),
        acepta_envio_comunic TINYINT,
        tipo_via VARCHAR(12),
        direccion VARCHAR(30),
        numero INT,
        piso INT,
        dir_info_adicional VARCHAR(30),
        cp INT,
        provincia VARCHAR(20),
        localidad VARCHAR(50),
        nivel_estudios VARCHAR(30),
        titulo_principal VARCHAR(30),
        situacion_actual VARCHAR(30),
        profesion_actual VARCHAR(80),
        int_area_organizacion INT,
        int_area_internacional INT,
        int_area_redes_social INT,
		int_area_educacion INT,
        int_area_empleo INT,
        int_area_inc_social INT,
        int_area_med_ambiente INT,
        int_area_salud INT,
        int_area_socorros INT,
        preca_labol_in TINYINT,
        discap_in TINYINT,
        problem_salud_in TINYINT,
        general_in TINYINT,
        infancia_in TINYINT,
        inmigrantes_in TINYINT,
        jovenes_in TINYINT,
        mayores_in TINYINT,
        mujeres_in TINYINT,
        otros_in TINYINT,
        reclusos_in TINYINT,
        refugiados_in TINYINT,
        vulnerables_in TINYINT,
        int_act_traslado INT,
        int_act_apoyo INT,
        int_act_alojamiento INT,
        int_act_donaciones INT,
        int_act_repartir INT,
        int_act_informar INT,
        int_act_acc_comunicacion INT,
        int_act_compania INT,
		int_act_rehab_medio INT,
		int_act_trabajo_red INT,
        int_act_orientar INT,
		int_act_ensenar INT,
        idioma VARCHAR(15),
        carnet VARCHAR (8),
        disponibilidad VARCHAR(60),
        horario VARCHAR(30),
        otras_habilidades VARCHAR(150),
        image VARCHAR (100),
        
        PRIMARY KEY(id),
        FOREIGN KEY (tipo_doc) REFERENCES tipo_documentos(id)
);

CREATE TABLE IF NOT EXISTS eventos(
        id INT AUTO_INCREMENT,
        titulo VARCHAR(100),
        descripcion VARCHAR(1500),
        localizacion VARCHAR(64),
        categoria VARCHAR(12),
        plazas INT,
        inscripciones INT,
        coordinador INT,
		fecha_ini DATE,
        fecha_fin DATE,
        hora_empezar VARCHAR(6),
        hora_terminar VARCHAR(6),
        modalidad VARCHAR(20),
        tematica VARCHAR(50),
        colectivo VARCHAR(60),
        municipio VARCHAR(100),
        image VARCHAR (100),
        
        PRIMARY KEY(id),
        FOREIGN KEY (coordinador) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS valoraciones(
        id INT AUTO_INCREMENT,
		valoracion INT,
        fk_id_user INT,
        fk_id_actividad INT,
        
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_user) REFERENCES users(id),
        FOREIGN KEY (fk_id_actividad) REFERENCES eventos(id)

);

CREATE TABLE IF NOT EXISTS inscripciones(
        id INT AUTO_INCREMENT,
        fk_id_user INT,
        fk_id_actividad INT,
        
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_user) REFERENCES users(id),
        FOREIGN KEY (fk_id_actividad) REFERENCES eventos(id)
);

CREATE TABLE IF NOT EXISTS interesados(
        id INT AUTO_INCREMENT,
        fk_id_user INT,
        fk_id_actividad INT,
        
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_user) REFERENCES users(id),
        FOREIGN KEY (fk_id_actividad) REFERENCES eventos(id)
); 


CREATE TABLE IF NOT EXISTS solicitudes_inscripciones(
        id INT AUTO_INCREMENT,
        fk_id_user INT,
        fk_id_actividad INT,
        estado VARCHAR(10),
        
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_user) REFERENCES users(id),
        FOREIGN KEY (fk_id_actividad) REFERENCES eventos(id)
); 

CREATE TABLE IF NOT EXISTS tematicas(
        id INT AUTO_INCREMENT,
        nombre VARCHAR(16),
        PRIMARY KEY(id)
);
INSERT INTO tematicas VALUES (null, 'Educación');
INSERT INTO tematicas VALUES (null, 'Empleo');
INSERT INTO tematicas VALUES (null, 'Inclusión Social');
INSERT INTO tematicas VALUES (null, 'Medio Ambiente');
INSERT INTO tematicas VALUES (null, 'Salud');
INSERT INTO tematicas VALUES (null, 'Socorros');

CREATE TABLE IF NOT EXISTS actividades_carrusels(
        id INT AUTO_INCREMENT,
        titulo VARCHAR(100),
        descripcion VARCHAR(1000),
        localizacion VARCHAR(64),
		fecha_ini DATETIME,
        hora_empezar VARCHAR(6),
        image VARCHAR(500),
        coordinador INT,

        PRIMARY KEY(id)
);

INSERT INTO actividades_carrusels VALUES (null,'Medios de rescate','Rescate a necesitados','Rascafría' ,'2023-02-10',"10:00", "rescate.jpg","2");
INSERT INTO actividades_carrusels VALUES (null,'Actuación con menores','Ayuda a menores','Canencia' ,'2023-03-07',"12:00","menores.jpg","2");
INSERT INTO actividades_carrusels VALUES (null,'Reparto de medicinas','Repartir medicinas','Buitrago de Lozoya' ,'2023-04-21',"10:00","medicinas.jpg","2");
INSERT INTO actividades_carrusels VALUES (null,'Apoyo en gestión','Gestionar','Madrid' ,'2023-04-21',"10:00","gestion.jpg","2");
INSERT INTO actividades_carrusels VALUES (null,'Batidas de limpieza','Limpieza','Madrid' ,'2023-04-21',"12:00","limpieza.jpg","2");
INSERT INTO actividades_carrusels VALUES (null,'Reparto de alimentos','Repartir alimentos','Madrid' ,'2023-04-21',"18:00","alimentos.jpg","2");
