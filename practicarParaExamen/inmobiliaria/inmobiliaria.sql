-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 12-08-2021 a las 12:56:59
-- Versión del servidor: 5.7.17-log
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `parcial`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `descripcion` text NOT NULL,
  `categoria_padre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `nombre`, `descripcion`, `categoria_padre`) VALUES
(1, 'Derecho Penal', 'Homicidios, Delitos sexuales, Violencia de género / Perimetrales, Delitos federales y económicos, Asistencia al imputado, Instrucción, Juicio oral, Defraudaciones y estafas, Delitos informáticos, ', 1),
(2, 'Derecho de Familia', 'Divorcio, \nViolencia, \nUniones convivenciales, \nRégimen comunicacional, \nAlimentos, \nAdopciones, \n', 1),
(3, 'Derecho Civil', '\nDaños y perjuicios,	\nContratos,	\nAccidentes de tránsito	\n', 1),
(4, 'Derecho Defensa del Consumidor', '\nStop debit,	\nVeraz,	\nCompanias', 1),
(5, 'Derecho Laboral', 'Trabajo en negro, \nAccidente de trabajo,\nEnfermedades laborales,\nDespidos, \nHoras extras impagas, \nIndemnización laboral, \nRenuncia forzada, \nMobbing – Acoso Laboral,\nPagos en Negro\n', 1),
(6, 'Derecho Previsional', 'Jubilación y Pensión con y sin Aportes, \nJubilación por Incapacidad o Discapacidad,\nANSES / IPS, \nReajuste de Haberes, \nFFAA / FFSS, \nReparaciones', 1),
(7, 'Derecho Comercial', 'Constitución de sociedad , \r\nConflictos societarios,\r\nFideicomisos,\r\nEjecución de deudas, \r\nQuiebras, \r\nConcursos y preventivos, \r\nContratos comerciales, \r\nPropiedad Intelectual\r\nTítulos ejecutivos como cheques y pagarés,\r\nRegistro de marcas', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

CREATE TABLE `empresa` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `telefono` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `archivo` varchar(100) NOT NULL,
  `latitud` varchar(100) NOT NULL,
  `longitud` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `instancia`
--

CREATE TABLE `instancia` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `descripcion` text NOT NULL,
  `imagen` text NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `empresa_id` int(11) NOT NULL,
  `ciudad` varchar(50) NOT NULL,
  `telefono` text NOT NULL,
  `email` text NOT NULL,
  `archivo` text NOT NULL,
  `latitud` text NOT NULL,
  `longitud` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `instancia`
--

INSERT INTO `instancia` (`id`, `nombre`, `descripcion`, `imagen`, `categoria_id`, `empresa_id`, `ciudad`, `telefono`, `email`, `archivo`, `latitud`, `longitud`) VALUES
(1, 'Martin García García', 'Especialista en brindar servicios jurídicos en el área corporativa, tributaria, laboral, societaria, acompañamiento a inversiones, contratación publica y litigios; así como servicios de comercio exterior. Es especialista en diseñar y establecer dialogos público –privado. Antes de establecer su firma, trabajó en la Federación Ecuatoriana de Exportadores –FEDEXPOR, quien fue su Presidente Ejecutivo por el lapso de 7 años. Adicionalmente, ha sido Presidente del Directorio de la Asociación de Bebidas No Alcohólicas del Ecuador AIBE, quien fue su promotor junto con las marcas reconocidas como COCA COLA, PEPSI, GATORADE entre otras; y en virtud de su gran prestigio dentro del área gremial y jurídica, asesoró a su vez a varios Gremios Nacionales, como lo es la Corporación Nacional de Avicultores del Ecuador, el Comité Empresarial Ecuatoriano en su calidad de ex Vicepresidente y actualmente también es Director de la Cámara de Comercio', 'prof1.jpg\r\n', 6, 0, '', '333333333', 'email@algo.com', '', '	-35.66192', '-63.7498'),
(2, 'Marcos García García', 'Especialista en brindar servicios jurídicos en el área corporativa, tributaria, laboral, societaria, acompañamiento a inversiones, contratación publica y litigios; así como servicios de comercio exterior. Es especialista en diseñar y establecer dialogos público –privado. Antes de establecer su firma, trabajó en la Federación Ecuatoriana de Exportadores –FEDEXPOR, quien fue su Presidente Ejecutivo por el lapso de 7 años. Adicionalmente, ha sido Presidente del Directorio de la Asociación de Bebidas No Alcohólicas del Ecuador AIBE, quien fue su promotor junto con las marcas reconocidas como COCA COLA, PEPSI, GATORADE entre otras; y en virtud de su gran prestigio dentro del área gremial y jurídica, asesoró a su vez a varios Gremios Nacionales, como lo es la Corporación Nacional de Avicultores del Ecuador, el Comité Empresarial Ecuatoriano en su calidad de ex Vicepresidente y actualmente también es Director de la Cámara de Comercio', 'prof2.jpg', 3, 0, '', '333333333', 'email@algo.com', '', '	-35.66192', '-63.7498'),
(3, 'Mirlo luis Garcia Garcia ', 'Especialista en brindar servicios jurídicos en el área corporativa, tributaria, laboral, societaria, acompañamiento a inversiones, contratación publica y litigios; así como servicios de comercio exterior. Es especialista en diseñar y establecer dialogos público –privado. Antes de establecer su firma, trabajó en la Federación Ecuatoriana de Exportadores –FEDEXPOR, quien fue su Presidente Ejecutivo por el lapso de 7 años. Adicionalmente, ha sido Presidente del Directorio de la Asociación de Bebidas No Alcohólicas del Ecuador AIBE, quien fue su promotor junto con las marcas reconocidas como COCA COLA, PEPSI, GATORADE entre otras; y en virtud de su gran prestigio dentro del área gremial y jurídica, asesoró a su vez a varios Gremios Nacionales, como lo es la Corporación Nacional de Avicultores del Ecuador, el Comité Empresarial Ecuatoriano en su calidad de ex Vicepresidente y actualmente también es Director de la Cámara de Comercio', 'prof3.jpg', 3, 0, '', '333333333', 'email@algo.com', '', '	-35.66192', '-63.7498'),
(4, 'Nicasio García García', 'Especialista en brindar servicios jurídicos en el área corporativa, tributaria, laboral, societaria, acompañamiento a inversiones, contratación publica y litigios; así como servicios de comercio exterior. Es especialista en diseñar y establecer dialogos público –privado. Antes de establecer su firma, trabajó en la Federación Ecuatoriana de Exportadores –FEDEXPOR, quien fue su Presidente Ejecutivo por el lapso de 7 años. Adicionalmente, ha sido Presidente del Directorio de la Asociación de Bebidas No Alcohólicas del Ecuador AIBE, quien fue su promotor junto con las marcas reconocidas como COCA COLA, PEPSI, GATORADE entre otras; y en virtud de su gran prestigio dentro del área gremial y jurídica, asesoró a su vez a varios Gremios Nacionales, como lo es la Corporación Nacional de Avicultores del Ecuador, el Comité Empresarial Ecuatoriano en su calidad de ex Vicepresidente y actualmente también es Director de la Cámara de Comercio', 'prof.jpg', 2, 0, '', '333333333', 'email@algo.com', '', '	-35.66192', '-63.7498'),
(5, 'Mariela García García', 'Especialista en brindar servicios jurídicos en el área corporativa, tributaria, laboral, societaria, acompañamiento a inversiones, contratación publica y litigios; así como servicios de comercio exterior. Es especialista en diseñar y establecer dialogos público –privado. Antes de establecer su firma, trabajó en la Federación Ecuatoriana de Exportadores –FEDEXPOR, quien fue su Presidente Ejecutivo por el lapso de 7 años. Adicionalmente, ha sido Presidente del Directorio de la Asociación de Bebidas No Alcohólicas del Ecuador AIBE, quien fue su promotor junto con las marcas reconocidas como COCA COLA, PEPSI, GATORADE entre otras; y en virtud de su gran prestigio dentro del área gremial y jurídica, asesoró a su vez a varios Gremios Nacionales, como lo es la Corporación Nacional de Avicultores del Ecuador, el Comité Empresarial Ecuatoriano en su calidad de ex Vicepresidente y actualmente también es Director de la Cámara de Comercio', 'profm.jpg\r\n\r\n', 4, 0, '', '333333333', 'email@algo.com', '', '-35.66192', '-63.7498'),
(6, 'Anacleta García García', 'Especialista en brindar servicios jurídicos en el área corporativa, tributaria, laboral, societaria, acompañamiento a inversiones, contratación publica y litigios; así como servicios de comercio exterior. Es especialista en diseñar y establecer dialogos público –privado. Antes de establecer su firma, trabajó en la Federación Ecuatoriana de Exportadores –FEDEXPOR, quien fue su Presidente Ejecutivo por el lapso de 7 años. Adicionalmente, ha sido Presidente del Directorio de la Asociación de Bebidas No Alcohólicas del Ecuador AIBE, quien fue su promotor junto con las marcas reconocidas como COCA COLA, PEPSI, GATORADE entre otras; y en virtud de su gran prestigio dentro del área gremial y jurídica, asesoró a su vez a varios Gremios Nacionales, como lo es la Corporación Nacional de Avicultores del Ecuador, el Comité Empresarial Ecuatoriano en su calidad de ex Vicepresidente y actualmente también es Director de la Cámara de Comercio', 'prof4.jpg', 2, 0, '', '333333333', 'email@algo.com', '', '-35.66192', '-63.7498'),
(7, 'Agustin García', 'Especialista en brindar servicios jurídicos en el área corporativa, tributaria, laboral, societaria, acompañamiento a inversiones, contratación publica y litigios; así como servicios de comercio exterior. Es especialista en diseñar y establecer dialogos público –privado. Antes de establecer su firma, trabajó en la Federación Ecuatoriana de Exportadores –FEDEXPOR, quien fue su Presidente Ejecutivo por el lapso de 7 años. Adicionalmente, ha sido Presidente del Directorio de la Asociación de Bebidas No Alcohólicas del Ecuador AIBE, quien fue su promotor junto con las marcas reconocidas como COCA COLA, PEPSI, GATORADE entre otras; y en virtud de su gran prestigio dentro del área gremial y jurídica, asesoró a su vez a varios Gremios Nacionales, como lo es la Corporación Nacional de Avicultores del Ecuador, el Comité Empresarial Ecuatoriano en su calidad de ex Vicepresidente y actualmente también es Director de la Cámara de Comercio', 'prof5.jpg', 5, 0, '', '333333333', 'email@algo.com', '', '-35.66192', '-63.7498'),
(8, 'Susana García García', 'Especialista en brindar servicios jurídicos en el área corporativa, tributaria, laboral, societaria, acompañamiento a inversiones, contratación publica y litigios; así como servicios de comercio exterior. Es especialista en diseñar y establecer dialogos público –privado. Antes de establecer su firma, trabajó en la Federación Ecuatoriana de Exportadores –FEDEXPOR, quien fue su Presidente Ejecutivo por el lapso de 7 años. Adicionalmente, ha sido Presidente del Directorio de la Asociación de Bebidas No Alcohólicas del Ecuador AIBE, quien fue su promotor junto con las marcas reconocidas como COCA COLA, PEPSI, GATORADE entre otras; y en virtud de su gran prestigio dentro del área gremial y jurídica, asesoró a su vez a varios Gremios Nacionales, como lo es la Corporación Nacional de Avicultores del Ecuador, el Comité Empresarial Ecuatoriano en su calidad de ex Vicepresidente y actualmente también es Director de la Cámara de Comercio', 'prof6.jpg', 1, 0, 'Santa Rosa', '333333333', 'email@algo.com', '', '-36.66192', '-64.28084'),
(9, 'lucas García', 'Especialista en brindar servicios jurídicos en el área corporativa, tributaria, laboral, societaria, acompañamiento a inversiones, contratación publica y litigios; así como servicios de comercio exterior. Es especialista en diseñar y establecer dialogos público –privado. Antes de establecer su firma, trabajó en la Federación Ecuatoriana de Exportadores –FEDEXPOR, quien fue su Presidente Ejecutivo por el lapso de 7 años. Adicionalmente, ha sido Presidente del Directorio de la Asociación de Bebidas No Alcohólicas del Ecuador AIBE, quien fue su promotor junto con las marcas reconocidas como COCA COLA, PEPSI, GATORADE entre otras; y en virtud de su gran prestigio dentro del área gremial y jurídica, asesoró a su vez a varios Gremios Nacionales, como lo es la Corporación Nacional de Avicultores del Ecuador, el Comité Empresarial Ecuatoriano en su calidad de ex Vicepresidente y actualmente también es Director de la Cámara de Comercio', 'prof7.jpg\r\n', 7, 0, '', '333333333', 'email@algo.com', '', '-35.66192', '-63.7498'),
(10, 'Roberto Perez García ', 'Especialista en brindar servicios jurídicos en el área corporativa, tributaria, laboral, societaria, acompañamiento a inversiones, contratación publica y litigios; así como servicios de comercio exterior. Es especialista en diseñar y establecer dialogos público –privado. Antes de establecer su firma, trabajó en la Federación Ecuatoriana de Exportadores –FEDEXPOR, quien fue su Presidente Ejecutivo por el lapso de 7 años. Adicionalmente, ha sido Presidente del Directorio de la Asociación de Bebidas No Alcohólicas del Ecuador AIBE, quien fue su promotor junto con las marcas reconocidas como COCA COLA, PEPSI, GATORADE entre otras; y en virtud de su gran prestigio dentro del área gremial y jurídica, asesoró a su vez a varios Gremios Nacionales, como lo es la Corporación Nacional de Avicultores del Ecuador, el Comité Empresarial Ecuatoriano en su calidad de ex Vicepresidente y actualmente también es Director de la Cámara de Comercio', 'prof8.jpg', 2, 0, '', '333333333', 'email@algo.com', '', '-35.66192', '-63.7498'),
(11, 'Eleonora Montoya García', 'Especialista en brindar servicios jurídicos en el área corporativa, tributaria, laboral, societaria, acompañamiento a inversiones, contratación publica y litigios; así como servicios de comercio exterior. Es especialista en diseñar y establecer dialogos público –privado. Antes de establecer su firma, trabajó en la Federación Ecuatoriana de Exportadores –FEDEXPOR, quien fue su Presidente Ejecutivo por el lapso de 7 años. Adicionalmente, ha sido Presidente del Directorio de la Asociación de Bebidas No Alcohólicas del Ecuador AIBE, quien fue su promotor junto con las marcas reconocidas como COCA COLA, PEPSI, GATORADE entre otras; y en virtud de su gran prestigio dentro del área gremial y jurídica, asesoró a su vez a varios Gremios Nacionales, como lo es la Corporación Nacional de Avicultores del Ecuador, el Comité Empresarial Ecuatoriano en su calidad de ex Vicepresidente y actualmente también es Director de la Cámara de Comercio', 'profm.jpg', 1, 0, '', '333333333', 'email@algo.com', '', '-35.66192', '-63.7498'),
(12, 'Daniel E. Perez García', 'Especialista en brindar servicios jurídicos en el área corporativa, tributaria, laboral, societaria, acompañamiento a inversiones, contratación publica y litigios; así como servicios de comercio exterior. Es especialista en diseñar y establecer dialogos público –privado. Antes de establecer su firma, trabajó en la Federación Ecuatoriana de Exportadores –FEDEXPOR, quien fue su Presidente Ejecutivo por el lapso de 7 años. Adicionalmente, ha sido Presidente del Directorio de la Asociación de Bebidas No Alcohólicas del Ecuador AIBE, quien fue su promotor junto con las marcas reconocidas como COCA COLA, PEPSI, GATORADE entre otras; y en virtud de su gran prestigio dentro del área gremial y jurídica, asesoró a su vez a varios Gremios Nacionales, como lo es la Corporación Nacional de Avicultores del Ecuador, el Comité Empresarial Ecuatoriano en su calidad de ex Vicepresidente y actualmente también es Director de la Cámara de Comercio', 'prof.jpg', 1, 0, '', '333333333', 'email@algo.com', '', '-35.66192', '-63.7498'),
(13, 'Cristina Perez  de García', 'Especialista en brindar servicios jurídicos en el área corporativa, tributaria, laboral, societaria, acompañamiento a inversiones, contratación publica y litigios; así como servicios de comercio exterior. Es especialista en diseñar y establecer dialogos público –privado. Antes de establecer su firma, trabajó en la Federación Ecuatoriana de Exportadores –FEDEXPOR, quien fue su Presidente Ejecutivo por el lapso de 7 años. Adicionalmente, ha sido Presidente del Directorio de la Asociación de Bebidas No Alcohólicas del Ecuador AIBE, quien fue su promotor junto con las marcas reconocidas como COCA COLA, PEPSI, GATORADE entre otras; y en virtud de su gran prestigio dentro del área gremial y jurídica, asesoró a su vez a varios Gremios Nacionales, como lo es la Corporación Nacional de Avicultores del Ecuador, el Comité Empresarial Ecuatoriano en su calidad de ex Vicepresidente y actualmente también es Director de la Cámara de Comercio', 'profm.jpg', 3, 0, '', '333333333', 'email@algo.com', '', '-35.66192', '-63.7498');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menu`
--

CREATE TABLE `menu` (
  `idmenu` int(11) NOT NULL,
  `tipo_usuario` int(11) DEFAULT NULL,
  `label` text,
  `link` text,
  `secuencia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `menu`
--

INSERT INTO `menu` (`idmenu`, `tipo_usuario`, `label`, `link`, `secuencia`) VALUES
(1, 0, 'Home', '/', 0),
(2, 0, 'Especialidades', '/especialidades', 1),
(3, 0, 'Acerca de Nosotros', '/nosotros', 2),
(4, 0, 'Contacto', '/contacto', 3),
(6, 1, 'Logout', '/gestion/logout', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recorrido`
--

CREATE TABLE `recorrido` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `latitud` varchar(100) NOT NULL,
  `longitud` varchar(100) NOT NULL,
  `instancia_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `instancia`
--
ALTER TABLE `instancia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`idmenu`);

--
-- Indices de la tabla `recorrido`
--
ALTER TABLE `recorrido`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT de la tabla `empresa`
--
ALTER TABLE `empresa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `instancia`
--
ALTER TABLE `instancia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT de la tabla `menu`
--
ALTER TABLE `menu`
  MODIFY `idmenu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `recorrido`
--
ALTER TABLE `recorrido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
