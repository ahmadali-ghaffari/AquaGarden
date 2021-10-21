-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: aquagarden
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(145) NOT NULL,
  `email` varchar(145) NOT NULL,
  `password` varchar(145) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'The knight','TheKnight@gmail.com','$2b$07$hH/gTcBVfbXG5p/4hsDzieNfcO8IIeOg69ae0QWPqLnHpmP748dEW'),(2,'Krishna','Krishna@gmail.com','$2b$07$2TaYqMRYE2sVlQHuhhioFuKxWz0bREJepn875BhAULnY62zJQrZKe'),(4,'Ali','Ali@gmail.com','$2b$07$jJy8DSD6yF/1RstqjBqz9eCK.ZjLDLMkTe0QaY.qZC9FHFj5X/vGS'),(7,'ali','ahmadali.ghaffari@gmail.com','$2b$07$YfZz7TRXxbCSeh4CXpswze68fVDptjIY6XDDyIc.M64Wo4rpxhyku'),(14,'Krishna','Reta_Jacobi4@gmail.com','$2b$07$G5mt6R9ZVxFAatMQxSPeiOfFPD5rNy7dhi3u.8fyX/aIT/YdlrZwe'),(15,'Krishna','Major_Grimes35@hotmail.com','$2b$07$USTLIu5pQkEkOU4WappU2.WQK0K3VOmqs8.S4TPKJxHjjnR3QAu5q'),(16,'Krishna','Maryam_Waters@gmail.com','$2b$07$88vZGJSXNjPeT3jO0sH3N.JCDJ2wyCezAI2cSYtL/eSCE6rkqu/EO'),(17,'Krishna','Ludwig_Reilly26@yahoo.com','$2b$07$53HODIA7TPzqyKlyWnnbfeb6gm2h9ISRYFuDGu7C269xEVflaMos6'),(18,'Krishna','Camylle.Lakin38@hotmail.com','$2b$07$Mbe7Ps9uqacDwpG0ISaTne5jp7jJ7rQFqG8SA5hjF7F4Fwrfh1cGu'),(19,'Krishna','Jett_Collier@yahoo.com','$2b$07$7CBgpE6EX4hGmVoK70VGFuYOQ6N//AkUhvZaUHn35Bsklkfd/IYj.'),(20,'Krishna','Dianna93@hotmail.com','$2b$07$DQZUvy0xLhWREuKbYHLlle8JNlNUIXkbVmVr/vJoNHL11884X5.Mm'),(21,'Krishna','Angela_Jacobi72@gmail.com','$2b$07$Yp7DmCJMTlTZmdbvk/Yrmuw3NSiQtl9sTsnkr9p.rprLOLBZ0kCk2'),(22,'Krishna','Darius61@yahoo.com','$2b$07$JbOLxDgWyXRedmgvckxoc.Y/sgdOCYWKSdMCpqdimkjp.mxoenVRm'),(23,'Krishna','Orin.Mayert50@gmail.com','$2b$07$u7t35HKzFhqGWrF35wRaG.T.zrctZABl9wl4u/qzjVg96ughbnNIG'),(24,'Krishna','Watson.Tremblay13@hotmail.com','$2b$07$uxFcHDKLS24w3U/3hal4H.6/ByJpQ2WNplBchFB8Mns4GQSsasRI.'),(25,'Krishna','Elza.Hermann92@yahoo.com','$2b$07$1CUPwrO5jcnwFuPKdje0JO0L9f5CFKtDEfMuQF/BFNGW1MsSljKV2'),(26,'Krishna','Charley_West@hotmail.com','$2b$07$.6JHZSmbcKcmLjX8zKP4LOnbILryIbmD70PbMfKDiujeAzKDme2..'),(27,'Krishna','Kariane.Blanda73@gmail.com','$2b$07$0s1IVff9L9e17HTXQZHezu7ECpuDusob8xbgBaQwrbtkXqbyf8a9e'),(28,'Krishna','Richie26@yahoo.com','$2b$07$isxmarUsAmbUdV46ldSsyOtSLscyYdEAB0.aAIwq8nBYwmVGlxtnm'),(29,'Krishna','Jordane_Halvorson11@gmail.com','$2b$07$.ve.KpuE0XpjdfUwoVsY1OoWyCzOjVrp1c/lh3HzwftsZ8QYrAaY6'),(30,'Krishna','Lupe_Labadie38@gmail.com','$2b$07$wQdeUMa6.AcPPjEQ35V3r.RY3SHfSzMZzk7iUR7Tm7vjyH8SkxKpS'),(31,'Krishna','Charlotte_Gerhold38@yahoo.com','$2b$07$bCIvEVUq7BDYqDmB0iWj7.tfXT6A1rlffVBoLTepDS2Wg1NT/9EaC'),(32,'Krishna','Shakira44@yahoo.com','$2b$07$mk9m4tVC3ZARkGSHANUhvum5mNEV9LGH7cv61rpa9DPYR/UYFA89C'),(33,'Krishna','Kylie_Prosacco89@gmail.com','$2b$07$i7A5WP6gll.3TqR..d0HeuDnhdQKwSZeaskjHRzErjtFWeD30WHRa'),(34,'Krishna','Noel84@hotmail.com','$2b$07$aSVjTO3kOGNTTItUt6dGge4NRi2Mdr7Al6yQG8E7bgx5LpEiO7PoO'),(35,'Krishna','Treva17@yahoo.com','$2b$07$hXf9PdFbvxOkzxaLe5rN7O88.O6VLSCJBk.G8WvMVwKZztB29f/7q'),(36,'Krishna','Chaz96@gmail.com','$2b$07$rCxKrpI0dCPwL123Ydbvgu3bg8gvylpfgUL3cDeU7ViPfTnzKwyrW');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-21  9:02:49
