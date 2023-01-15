#DROP DATABASE desafio;
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
        contraseña VARCHAR (65),
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
        direccion VARCHAR(12),
        numero INT,
        piso INT,
        dir_info_adicional VARCHAR(30),
        cp INT,
        provincia VARCHAR(20),
        localidad VARCHAR(20),
        nivel_estudios VARCHAR(20),
        titulo_principal VARCHAR(20),
        situacion_actual VARCHAR(20),
        profesion_actual VARCHAR(30),
        int_area_organizacion INT,
        int_area_internacional INT,
        int_area_redes_social INT,
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
		int_act_enseñar INT,
        idioma VARCHAR(15),
        carnet VARCHAR (8),
        disponibilidad VARCHAR(30),
        horario VARCHAR(30),
        otras_habilidades INT,
        
        PRIMARY KEY(id),
        FOREIGN KEY (tipo_doc) REFERENCES tipo_documentos(id)
);

CREATE TABLE IF NOT EXISTS modalidades(
        id INT AUTO_INCREMENT,
        nombre VARCHAR(13),
        
        PRIMARY KEY(id)
);

INSERT INTO modalidades VALUES (null, 'Presencial');
INSERT INTO modalidades VALUES (null, 'No Presencial');

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

CREATE TABLE IF NOT EXISTS colectivos(
        id INT AUTO_INCREMENT,
        nombre VARCHAR(48),
        
        PRIMARY KEY(id)
);

INSERT INTO colectivos VALUES (null, 'Desempleadas o Precariedad Laboral');
INSERT INTO colectivos VALUES (null, 'Infancia');
INSERT INTO colectivos VALUES (null, 'Jóvenes');
INSERT INTO colectivos VALUES (null, 'Mujeres en dificultad social');
INSERT INTO colectivos VALUES (null, 'Personas con problemas de salud');
INSERT INTO colectivos VALUES (null, 'Personas en situación de extrema vulnerabilidad');
INSERT INTO colectivos VALUES (null, 'Personas inmigrantes');
INSERT INTO colectivos VALUES (null, 'Personas mayores y cuidadores');
INSERT INTO colectivos VALUES (null, 'Personas reclusas y exreclusas');
INSERT INTO colectivos VALUES (null, 'Población en general');
INSERT INTO colectivos VALUES (null, 'Solicitantes de asilo y refugio');


CREATE TABLE IF NOT EXISTS tipos_actividades(
        id INT AUTO_INCREMENT,
        nombre VARCHAR(60),
        
        PRIMARY KEY(id)
); 

INSERT INTO tipos_actividades VALUES (null, 'Colaborar en el traslado de personas que no pueden solas');
INSERT INTO tipos_actividades VALUES (null, 'Apoyar, asistir y mediar para mejorar las dificultades');
INSERT INTO tipos_actividades VALUES (null, 'Participar en albergues, pisos y alojamientos de Cruz Roja');
INSERT INTO tipos_actividades VALUES (null, 'Ayudar a conseguir y organizar los recursos donados');
INSERT INTO tipos_actividades VALUES (null, 'Repartir ayudas y productos de primera necesidad');
INSERT INTO tipos_actividades VALUES (null, 'Sencibilizar a la población');
INSERT INTO tipos_actividades VALUES (null, 'Comunicar y difundir');
INSERT INTO tipos_actividades VALUES (null, 'Hacer compañía cuando te necesiten');
INSERT INTO tipos_actividades VALUES (null, 'Proteger y rehabilitar el medio');
INSERT INTO tipos_actividades VALUES (null, 'Coopear en red y generar alianzas');
INSERT INTO tipos_actividades VALUES (null, 'Escuchar y orientar a las personas');
INSERT INTO tipos_actividades VALUES (null, 'Enseñar y capacitar');

CREATE TABLE IF NOT EXISTS comunidades_autonomas(
        id INT AUTO_INCREMENT,
        nombre VARCHAR(26),
        
        PRIMARY KEY(id)
);    

INSERT INTO comunidades_autonomas VALUES (null, 'Andalucía');
INSERT INTO comunidades_autonomas VALUES (null, 'Aragón');
INSERT INTO comunidades_autonomas VALUES (null, 'Principado de Asturias');
INSERT INTO comunidades_autonomas VALUES (null, 'Islas Baleares');
INSERT INTO comunidades_autonomas VALUES (null, 'Canarias');
INSERT INTO comunidades_autonomas VALUES (null, 'Cantabria');
INSERT INTO comunidades_autonomas VALUES (null, 'Castilla y León');
INSERT INTO comunidades_autonomas VALUES (null, 'Castilla-La Mancha');
INSERT INTO comunidades_autonomas VALUES (null, 'Cataluña');
INSERT INTO comunidades_autonomas VALUES (null, 'Comunidad Valenciana');
INSERT INTO comunidades_autonomas VALUES (null, 'Extremadura');
INSERT INTO comunidades_autonomas VALUES (null, 'Galicia');
INSERT INTO comunidades_autonomas VALUES (null, 'Comunidad de Madrid');
INSERT INTO comunidades_autonomas VALUES (null, 'Región de Murcia');
INSERT INTO comunidades_autonomas VALUES (null, 'Comunidad Foral de Navarra');
INSERT INTO comunidades_autonomas VALUES (null, 'País Vasco');
INSERT INTO comunidades_autonomas VALUES (null, 'La Rioja');
INSERT INTO comunidades_autonomas VALUES (null, 'Ciudad Autónoma de Ceuta');
INSERT INTO comunidades_autonomas VALUES (null, 'Ciudad Autónoma de Melilla'); 

CREATE TABLE IF NOT EXISTS actividades(
        id INT AUTO_INCREMENT,
        titulo VARCHAR(100),
        descripcion VARCHAR(1000),
        localizacion VARCHAR(64),
        categoria VARCHAR(12),
        plazas INT,
        inscripciones INT,
        coordinador INT,
        fecha_ini DATETIME,
		fecha_fin DATETIME,
        fk_id_modalidad INT,
        fk_id_tematica INT,
        fk_id_colectivo INT,
        fk_id_tipo_actividad INT,
        fk_id_comunidad_autonoma INT,
        provincia VARCHAR(30),
        municipio VARCHAR(30),
        nombre_actividades VARCHAR(80),
        
        PRIMARY KEY(id),
        FOREIGN KEY (coordinador) REFERENCES users(id),
        FOREIGN KEY (fk_id_modalidad) REFERENCES modalidades(id),
        FOREIGN KEY (fk_id_tematica) REFERENCES tematicas(id),
        FOREIGN KEY (fk_id_colectivo) REFERENCES colectivos(id),
        FOREIGN KEY (fk_id_tipo_actividad) REFERENCES tipos_actividades(id),
        FOREIGN KEY (fk_id_comunidad_autonoma) REFERENCES comunidades_autonomas(id)
); 

CREATE TABLE IF NOT EXISTS eventos(
        id INT AUTO_INCREMENT,
		fecha_ini DATE,
        fecha_fin DATE,
        hora_empezar VARCHAR(6),
        hora_terminar VARCHAR(6),
        modalidad VARCHAR(20),
        tematica VARCHAR(50),
        colectivo VARCHAR(60),
        
        PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS valoraciones(
        id INT AUTO_INCREMENT,
		valoracion INT,
        fk_id_user INT,
        fk_id_actividad INT,
        
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_user) REFERENCES users(id),
        FOREIGN KEY (fk_id_actividad) REFERENCES actividades(id)

);

CREATE TABLE IF NOT EXISTS inscripciones(
        id INT AUTO_INCREMENT,
        fk_id_user INT,
        fk_id_actividad INT,
        
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_user) REFERENCES users(id),
        FOREIGN KEY (fk_id_actividad) REFERENCES actividades(id)
);

CREATE TABLE IF NOT EXISTS interesados(
        id INT AUTO_INCREMENT,
        fk_id_user INT,
        fk_id_actividad INT,
        
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_user) REFERENCES users(id),
        FOREIGN KEY (fk_id_actividad) REFERENCES actividades(id)
); 


CREATE TABLE IF NOT EXISTS solicitudes_inscripciones(
        id INT AUTO_INCREMENT,
        fk_id_user INT,
        fk_id_actividad INT,
        estado VARCHAR(10),
        
        PRIMARY KEY(id),
        FOREIGN KEY (fk_id_user) REFERENCES users(id),
        FOREIGN KEY (fk_id_actividad) REFERENCES actividades(id)
); 