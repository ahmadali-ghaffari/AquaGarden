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
-- Table structure for table `plants`
--

DROP TABLE IF EXISTS `plants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plants` (
  `plant_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `plant_name` varchar(145) NOT NULL,
  `plant_type` varchar(245) NOT NULL,
  `description` varchar(5000) NOT NULL,
  `light` varchar(175) NOT NULL,
  `medium` varchar(175) NOT NULL,
  `waterconditions` varchar(275) NOT NULL,
  `plant_image` varchar(5545) NOT NULL,
  `score` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`plant_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plants`
--

LOCK TABLES `plants` WRITE;
/*!40000 ALTER TABLE `plants` DISABLE KEYS */;
INSERT INTO `plants` VALUES (1,1,'Dwarf Anubias','Anubias nana','Dwarf anubias is a short-stemmed plant with dark green leaves native to West Africa. This plant grows well fully or partially submerged as long as its rhizomes are above the substrate. This variety is one of the smallest and most compact plants in the anubias genus, reaching a maximum height of around 4 inches. It works well in creating a layer at the base of aquariums for small fish to hide or in smaller tanks.','Moderate, tolerates range.','Rocky substrate; can also attach to wood.','Temperature 72-82 F; pH 6.5-7.5.','https://www.treehugger.com/thmb/fBubZWYyT_v1VfqeUNHV7e50Muk=/1250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/anubias-aquatic-plant-in-an-aquarium--anubias-nana-1254563939-e1bdf4b735f04e1eab45f3d320fe7c69.jpg',7),(2,2,'Java Fern','Microsorum pteropus','Named after the Indonesian island of Java, this fern can be found in Malaysia, Thailand, Northeast India, and some parts of China. Java fern is fairly easy to care for and quite common in aquariums. It grows to about 8 inches and is used as a background plant in smaller tanks, or as a mid-ground accent to taller plants in larger tanks.','Low to moderate.','Attach to porous rock or driftwood. Do not submerge in substrate.','Temperature 68-82 F; pH 6-7.5. Occasional liquid fertilizer.','https://www.treehugger.com/thmb/h88H7eid6-iPbToPRWGBWfVgO-Q=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cremecicle-lyretail-molly-885762086-f09fa0b0750e43f6badeac8690d6a366.jpg',5),(3,1,'Moneywort ','Bacopa monnieri','Also known as water hyssop, moneywort is a popular and durable creeping herb native to the wetlands of southern and eastern India, Australia, Europe, Africa, Asia, and North and South America. Like many stem plants, it can be trimmed and the cuttings replanted in substrate. In most conditions, this plant grows quickly, and works well in taller tanks.','Moderate','Tolerates a variety of substrate and can be left floating.','Temperature 58-90 F; pH 5.0-9.0.','https://www.treehugger.com/thmb/Wt8AbDRHnv23dq2-M-5G43KzvCg=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/leaves-of-brahmi-herb--bacopa-monnieri-1186142241-c95325763b724f0aa01502828fde2d53.jpg',20),(4,1,'Parrot\'s Feather','Myriophyllum aquaticum','A perennial plant native to the Amazon River in South America, parrot\'s feather can be found growing alongside lakes, streams, and other bodies of water. With a maximum height of around 16 inches, this plant has feather-like fronds and requires some direct light to do well. Parrot\'s feather is prohibited in the state of Washington, where it is considered a nuisance weed.','Moderate to bright.','Plant directly into high quality substrate.','Temperature 60-74 F. Prefers slightly alkaline conditions: 6.8-8 pH.','https://www.treehugger.com/thmb/x0R01YBOsaV91wl5p9zZ7Rr-e9c=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/myriophyllum--watermilfoil--freshwater-aquatic-plants--904873104-f1602e5c5cbb40b88395a98864973261.jpg',-1),(5,1,'Marimo Moss Balls','Cladophora aegagropila','A rare and beautiful spherical algae native to lakes and rivers in Japan and Northern Europe, marimo can grow on rocks or free-floating. The algae\'s round shape is maintained by the gentle movement of waves in the water, and making sure it rotates routinely around the tank will help maintain its appearance.','Medium to bright.','Fish will likely move plant about tank. If not, rotate occasionally.','Temperature 72-82 F; pH 6.8-7.5. Good for tanks with substrate diggers.','https://www.treehugger.com/thmb/pZXL_1oqhcyssw35L1rmo5aVhdU=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/marimo-moss-ball-851915520-b49cceccc7be416682092c45514e0834.jpg',10),(6,2,'Water Hawthorn','Aponogeton distachyos','A bulb plant that thrives in large aquariums, water hawthorns go dormant in the summer, when the ponds in their native environment of South Africa dry up. They later bloom in the spring and fall. In aquariums, they prefer cooler water temperatures but tolerate a wide range. Their leaves float on the water\'s surface, providing shade for fish and other plants.','Tolerates a wide range.','Prefers peat/loam substrate. Do not fully submerge bulb.','Temperature 32-75 F; 6.0-7.5 pH.','https://www.treehugger.com/thmb/V52o3mnFQktjSV5ZSA48jZSqtzk=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/aponogeton-distachyos-978595092-4488eca0ae614a5692e2b21a938ee556.jpg',8),(7,2,'Umbrella Hair Grass','Eleocharis vivipara','The taller variant of dwarf hair grass, umbrella hair grass is a thin-stalked, densely growing plant that can reach heights of almost 2 feet. This plant propagates via runners in the substrate and does well in nutrient rich water with generous light. Its growth mat provides good background cover in tanks for filters and other materials.','Moderate to bright.','Plant halfway into rocky substrate.','Temperature 59-79 F; pH 6.0-9.0.','https://www.treehugger.com/thmb/YCACrGjhKr9iJu7S001brhxXY6o=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/groundcover-eleocharis-plant-in-an-aquarium-on-a-background-of-decorative-stones-1254563928-09c5dc3d1bfb40c0afd53a8509384f5a.jpg',9),(8,1,'Amazon Sword','Echinodorus bleheri','Echinodorus is a hardy genus of aquatic plants that prefer nutrient-dense substrate to thrive, as they are heavy root feeders. Native to Cuba, Central America, and South America, Amazon sword is cultivated for ponds as well as artificial aquatic environments, growing up to 20 inches with bright, green leaves.','Moderate to bright.','Loose, gravely substrate.','Temperature 72-82 degrees F; pH 6.5-7.5','https://www.treehugger.com/thmb/Z6shYPMmCPfZs-8USyAYwj8IDos=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sumatra-barbs--blue-gourami--golden-barbs-1194278640-4844e7bb99d14b4fbe9c8302981c8350.jpg',1),(9,1,'Brazilian Waterweed','Egeria densa','Native to warm and temperate parts of South America including Brazil, Uruguay, and Argentina, waterweed grows particularly well in tanks with nutrient rich water and bright light. This versatile plant grows well floating or planted in substrate. Its offshoots will eventually need to be trimmed in most aquariums.','Moderate to bright.','Gravely substrate or floating; versatile.','Temperature 60-80 F; pH 6.5-7.5.','https://www.treehugger.com/thmb/X6WRRVjp_BQ-nIGRp6_VSpdhybE=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/freshwater-aquarium-916283744-f9efe8a0c5e04979a8c3cc0c65557705.jpg',4),(10,1,'Carolina Fanwort','Cabomba caroliniana','This aquatic herbaceous perennial is native to parts of North and South America, and also goes by the names green cabomba, fanwort, fish grass, and Washington grass. Carolina fanwort grows rooted in the mud of stagnant or slow-flowing water, including streams, smaller rivers, lakes, ponds, sloughs, and ditches. It has fragile, short, rhizomes from which new shoots emerge.','Moderate to bright.','Gently plant stems in 1\" or more of nutrient rich substrate. Can also float.','Temperature 72-82 F; 6.8-7.5 pH.','https://www.treehugger.com/thmb/sVqv_iPPvMQZBOLoLXQxf4Br6-U=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/feathery-green-freshwater-aquarium-plant---pondweed--carolina-fanwort--cabomba---fish-tank-523354753-b40b879fd32547c7b68dd6b8b9f650a1.jpg',2),(11,1,'American Waterweed','Elodea canadensis','A perennial aquatic plant native to most of the United States, American waterweed starts in mud at the bottom of the water as a young plant, producing roots at intervals along the stem that may anchor into substrate or float freely. This plant grows indefinitely from the stem tip, reaching lengths of up to 10 feet. In favorable conditions, it can grow prolifically and choke out other plants, and may need regular trimming.','Moderate to bright.','Plant young waterweed in 1 inch of substrate. May also float.','Temperature 50-82 F; 5.0-7.5 pH.','https://www.treehugger.com/thmb/oFa5FPn6WbiFkaaNKWAlCi4jBfg=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/canadian-waterweed-elodea-canadensis-oxygen-bubbles-being-released-90069497-349e7abf6cfd4d81ab68569873e573af.jpg',2),(12,2,'Vallisneria','Vallisneria gigantea','Found in tropical and subtropical regions around the world, vallisneria is also known as tape grass or eel grass. It has narrow, linear leaves that grow to be up to 5 feet tall, forming a dense cover at the water\'s surface. These tough and strong leaves are not typically eaten by herbivorous fish, and will need regular pruning to allow light for other plants in the tank. Vallisneria grows in relatively stagnant water, and should be kept away from a tank\'s filter return pipe.','Moderate.','Fine sand and gravel substrate mix; iron-rich.','Temperature 68-82 F; tolerates range of pH but prefers slightly alkaline.','https://www.treehugger.com/thmb/rvrPuuHMkoLq2gKcYsutHsBsCkE=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/detail-of-a-vallisneria-gigantea-freshwater-aquatic-plant-in-a-fish-tank-1224170785-c0817ee52248420f9a610c87c0e7ff8f.jpg',4),(13,1,'Hydrocotyle Japan','Hydrocotyle tripartita','Native to New Zealand and the Australian states of Queensland, New South Wales, and Victoria, this perennial herb has vibrant green leaves reminiscent of clovers that grow in bunches. Japanese aquascapers made this hydrocotyle species famous. It can be trimmed and kept low in the foreground to create a carpeting effect or allowed to grow to its maximum height of 10 inches in the middle or background of the tank.','Moderate to bright.','Nutrient-rich substrate.','Temperature 72-82 F; pH 6.0-7.5','https://www.treehugger.com/thmb/utrAJnM-ZTnM8ve7DPk_9JaPMOg=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hydrocotyle-tripartita-and-grandulossa-red-plant-1206044819-5d0fd8f1e41d4d24be13e84c72907bef.jpg',7),(14,3,'Hornwort ','Ceratophyllum demersum','Hornwort is a submerged, free-floating, aquatic plant with a wide distribution, native to all continents except Antarctica. This popular plant can grow to be up to 10 feet tall and becomes a bushy mass with numerous side shoots if left untrimmed. Growing in lakes, ponds, and quiet streams, hornwort, also known as coontail, prefers still or very slow-moving water, where its fluffy fronds provide cover for small fish.','Moderate.','Mostly free-flowing. Stems may loosely attach to sandy substrate.','Temperature 50–86 degrees, 6.0-7.5pH; soft to medium hardness.','https://www.treehugger.com/thmb/a3zpdtaMIrLQ9nNPOg4bQNQ6MuQ=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/aquatic-plant--the-hornwort--in-aquarium--ceratophyllum-demersum--selective-focus-1297468554-810237b4354d42dd97f52ae07974a2a9.jpg',8),(15,3,'Hygrophila ','Hygrophila angustifolia','Native to Southeast Asia, this aquatic plant is grown worldwide in tropical aquariums and is also known as common swamp weed. Hygrophila grows and spreads rapidly, reaching heights up to 2 feet and needing a tank at least 10 gallons in size. Goldfish will eat this plant in its entirety, so it\'s not an ideal choice if those fish will be in your aquarium. Swamp weed needs regular pruning and enjoys the addition of trace minerals after each water change to promote growth.','Moderate to bright.','Any common substrate. Takes nutrients from water column.','Temperature 64-86 degrees; pH 5.0-8.0.','https://www.treehugger.com/thmb/NoCRq4k8f-eCad5fTJ62ecC98Tg=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/water-plant-hygrophila-in-the-aquarium--hygrophila-angustifolia-1254563937-c7f281e066ab42a1b179af7a7dff720d.jpg',1),(16,1,'Water Trumpet','Cryptocoryne wendtii','Native to Sri Lanka, this plant prefers highly stable conditions, so take care when initially planting it — it may appear to die off, but will recover after a week or two. Water trumpet typically inhabits slow-moving streams and rivers in lowland forest areas, and has been cultivated by aquatic gardeners since the late 19th century. One of the more robust cryptocoryne species, it\'s propagated by runners and forms deep roots in the substrate. This plant prefers growing slowly in low light conditions and can be crowded out by other faster-growing plants.','Prefers shade.','Sand and gravel iron-rich substrate.','Temperature 75-82 F, slightly alkaline to neutral pH. Tolerates hard and soft water.','https://www.treehugger.com/thmb/ZJmXg47W_Ty6sRPya_ybjHMlQfA=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/goldfish--aquarium--a-fish-on-the-background-of-aquatic-plants-168627134-56239079749b49979864c2f08c4aeb34.jpg',1),(17,1,'Lucky Bamboo','Dracaena sanderiana','Lucky bamboo can be grown either fully or partially submerged in aquariums, with the former requiring more added effort than the latter. Native to Central Africa, this plant is not actually related to bamboo, which is indigenous to Asia. Common names include Sander\'s dracaena, ribbon dracaena, lucky bamboo, curly bamboo, Chinese water bamboo, Goddess of Mercy\'s plant, Belgian evergreen, and ribbon plant. A perennial herb capable of reaching almost 4 feet in height, lucky bamboo can be distinguished from true bamboo by its fleshy stem.','Prefers indirect light; tolerates low light better than sun.','Nutrient rich substrate at least 3 inches deep.','Temperature 65-95 F; 6.0-6.5 ideal pH. When fully submerged will need added Co2 and aeration.','https://www.treehugger.com/thmb/IO0MexCB5HKIDEYIG6PEwVs1n9I=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/underwater-bamboo-916346044-95fb9c505f2a4345b4bccdf07a17773b.jpg',1),(18,2,'Spongeplant ','Limnobium laevigatum','This free-floating perennial herb is native to freshwater environments in Central and South America, but is now present in parts of the United States in warmer climates. Limnobium can form thick mats across the surface of the water, providing pleasant shade in aquarium environments, but becoming a nuisance to boaters, fish, and other plants in areas where it is considered invasive, including the state of California. Like many non-native tropical plants, climate change will likely exacerbate the spongeplant\'s impact as water temperatures rise and its range increases.﻿','Moderate to bright.','Free floating. Benefits from nitrogen, iron, and other water supplements, particularly after water change.','Temperature 64-86 F; 6.0-8.0 pH.','https://www.treehugger.com/thmb/JGmFAcmTx_JTK_-Vfk_nOxE3NVY=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/floating-aquarium-plant-1271192866-7e68cc97bf2f453db999fb6f7fa10533.jpg',1);
/*!40000 ALTER TABLE `plants` ENABLE KEYS */;
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