-- MySQL dump 10.14  Distrib 5.5.58-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: users
-- ------------------------------------------------------
-- Server version	5.5.58-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `users`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `users` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `users`;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id_usuario` int(4) NOT NULL AUTO_INCREMENT COMMENT 'identificador del usuario con autoincremento',
  `nombre` varchar(10) NOT NULL COMMENT 'Nombre del usuario',
  `apellido` varchar(10) NOT NULL COMMENT 'Apellido del usuario',
  `numero_telefono` int(9) NOT NULL COMMENT 'numero de telefono',
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `numero_telefono` (`numero_telefono`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'jose','perez',756392876),(2,'maria','debian',190253462),(3,'martin','carcamo',712062487),(4,'juan','arrieta',172540574),(5,'lissett','rebolledo',987857690),(103,'fake','fake',123456789),(104,'fake','fake',987654321);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `cdr`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `cdr` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `cdr`;

--
-- Table structure for table `cdr`
--

DROP TABLE IF EXISTS `cdr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cdr` (
  `id_registro` int(5) NOT NULL AUTO_INCREMENT COMMENT 'identificador del registro con autoincremento',
  `database_time` float DEFAULT NULL COMMENT 'Tiempo de consulta sql',
  `soap_time` float DEFAULT NULL COMMENT 'Tiempo de consulta soap',
  `http_time` float DEFAULT NULL COMMENT 'Tiempo de consulta http',
  `codigo_error` int(4) NOT NULL COMMENT 'Codigo de error',
  `MainServer_time` float DEFAULT NULL COMMENT 'Tiempo de servidor',
  UNIQUE KEY `id_registro` (`id_registro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cdr`
--

LOCK TABLES `cdr` WRITE;
/*!40000 ALTER TABLE `cdr` DISABLE KEYS */;
/*!40000 ALTER TABLE `cdr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cdr_local`
--

DROP TABLE IF EXISTS `cdr_local`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cdr_local` (
  `id_registro` int(5) NOT NULL AUTO_INCREMENT COMMENT 'identificador del registro con autoincremento',
  `database_time` float DEFAULT NULL COMMENT 'Tiempo de consulta sql',
  `soap_time` float DEFAULT NULL COMMENT 'Tiempo de consulta soap',
  `http_time` float DEFAULT NULL COMMENT 'Tiempo de consulta http',
  `codigo_error` int(4) NOT NULL COMMENT 'Codigo de error',
  `MainServer_time` float DEFAULT NULL COMMENT 'Tiempo de servidor',
  UNIQUE KEY `id_registro` (`id_registro`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cdr_local`
--

LOCK TABLES `cdr_local` WRITE;
/*!40000 ALTER TABLE `cdr_local` DISABLE KEYS */;
INSERT INTO `cdr_local` VALUES (1,0,0,0,1000,0);
/*!40000 ALTER TABLE `cdr_local` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-02-13 12:24:17
