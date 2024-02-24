-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : sam. 24 fév. 2024 à 01:21
-- Version du serveur : 8.0.31
-- Version de PHP : 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `app-video`
--

-- --------------------------------------------------------

--
-- Structure de la table `videos`
--

CREATE TABLE `videos` (
  `id` int NOT NULL,
  `nom` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `media` text COLLATE utf8mb4_general_ci NOT NULL,
  `code` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `date_publication` date NOT NULL,
  `duree` int NOT NULL,
  `subtitle` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `score` int NOT NULL DEFAULT '0',
  `nb_vues` int NOT NULL DEFAULT '0',
  `categories` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `videos`
--

INSERT INTO `videos` (`id`, `nom`, `description`, `media`, `code`, `date_publication`, `duree`, `subtitle`, `score`, `nb_vues`, `categories`) VALUES
(1, 'Visiter la côte Nord', 'Texte modifié.', './assets/img/cote-nord.jpg', 'V001', '2015-10-15', 3600, '', 1100, 1, 'Voyager;Québec'),
(3, 'Photographier des chutes', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!', './assets/img/chute-1.jpg', 'P001', '2023-09-20', 240, 'st', 1104, 100, 'Photographie;Apprendre'),
(8, 'Je suis un autre nom', 'Je suis une autre description', './assets/img/chute-1.jpg', 'P200', '2023-12-19', 125, '', 0, 0, 'Test'),
(9, 'Les plus beaux étalons', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!', './assets/img/cheval.jpg', 'A001', '2015-10-19', 180, '', 1200, 0, 'Chevaux;Règne animal'),
(10, 'Apprendre Angular', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!', './assets/img/angular.jpg', 'L002', '2015-10-19', 7980, '', 2002, 1500355, 'Apprendre;Programmation;Angular'),
(11, 'Apprendre Photoshop', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!', './assets/img/apprendre-phto.jpg', 'L003', '2015-10-19', 180, '', 1500, 1558, 'Apprendre;Photoshop;Photographie'),
(12, 'Nouveautés cinéma', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!', './assets/img/cinema.jpg', 'C001', '2015-10-19', 180, '', 4, 0, 'Cinéma'),
(13, 'Visiter Disneyland', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!', './assets/img/disney.jpg', 'V002', '2015-10-19', 195, '', 1100, 999, 'Voyager'),
(14, 'Mario Bros the Movies', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!', './assets/img/super-mario-bros-movie.jpg', 'C002', '2015-10-19', 180, '', 0, 0, 'Cinéma'),
(19, 'Visiter Las Vegas', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!', './assets/img/photo-nuit.jpg', 'P002', '2015-10-19', 180, '', 1, 0, 'Voyager'),
(21, 'Apprendre le JavaScript', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!', './assets/img/javascript.jpg', 'L001', '2024-02-29', 180, 'cc', 14, 0, 'Apprendre;JavaScript;Programmation'),
(27, 'Test', 'bla bla', './assets/img/cheval.jpg', 'v005', '2024-02-29', 0, 'st', 100, 5, 'test'),
(30, 'Apprendre React', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eaque distinctio repellendus vero tenetur officiis quisquam dicta, maiores minima, nobis vitae repellat saepe at voluptate!', './assets/img/javascript.jpg', 'L111', '2023-12-04', 180, '', 0, 0, 'Apprendre;React;Programmation'),
(32, 'test', 'ffsdfd', 'afsdfd', 'z001', '2024-02-19', 751, 'cc', 0, 0, 'Québec'),
(37, 'nouvelle vidéo', 'kdjkjsdkjsdkdffgfg', 'url', 'K007', '2024-02-25', 1082, 'st', 0, 0, 'Angular;Apprendre;Chevaux;Cinéma;JavaScript;Photographie;Photoshop;Programmation;Québec;Règne animal;Voyager'),
(39, 'kdjkfjldfkldj', 'dfsgfdg', 'fdfdfd', 'hhh', '2024-02-29', 707, 'none', 0, 0, 'Chevaux');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
