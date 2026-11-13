-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 13, 2026 at 04:20 AM
-- Server version: 8.4.7
-- PHP Version: 8.5.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tp_jpa`
--

-- --------------------------------------------------------

--
-- Table structure for table `acteur`
--

DROP TABLE IF EXISTS `acteur`;
CREATE TABLE IF NOT EXISTS `acteur` (
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` int NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `genre` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imageurl` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `maison_edition` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nationalite` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prenom` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `acteur`
--

INSERT INTO `acteur` (`code`, `age`, `email`, `genre`, `imageurl`, `maison_edition`, `nationalite`, `nom`, `prenom`) VALUES
('1023139', 42, 'Adam.Driver@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/b5w381C8Z33D1iF30KT4k8tJNsk.jpg', '', 'États-Unis', 'Driver', 'Adam'),
('1030513', 34, 'Jack.Quaid@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/320qW5yEbxpmyxQ3evmClJbtKag.jpg', '', 'États-Unis', 'Quaid', 'Jack'),
('10859', 50, 'Ryan.Reynolds@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/trzgptffGvAlAT6MEu01fz47cLW.jpg', '', 'Canada', 'Reynolds', 'Ryan'),
('111691', 56, 'Hidetaka.Yoshioka@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/xWNS6qStVthhWoxmKDfNS729BjJ.jpg', '', 'Japon', 'Yoshioka', 'Hidetaka'),
('1139349', 24, 'Julian.Dennison@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/zSFwaT2osi7D2G0vFetub4yCDwi.jpg', '', 'Nouvelle-Zélande', 'Dennison', 'Julian'),
('1141', 83, 'Hélène.Vincent@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/lJJ9WjZJI6cVCpFTsXoHqSDW23v.jpg', '', 'France', 'Vincent', 'Hélène'),
('1169291', 0, 'Johnno.Wilson@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/eZtBoBE0F7Qb9ZyNpacMOQtmWnM.jpg', '', 'États-Unis', 'Wilson', 'Johnno'),
('11703', 49, 'Kerry.Washington@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/zgyjYlxmHG6Ntbg16JcTp8Vu8M3.jpg', '', 'États-Unis', 'Washington', 'Kerry'),
('118178', 49, 'Virginie.Efira@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/sJFBDkZ2AMAkQBsSZricrUnZv50.jpg', '', 'Belgique, France', 'Efira', 'Virginie'),
('1294982', 40, 'Paul Walter.Hauser@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/hXjjbYg1Ah8mFf5ZcaakyXzDKMx.jpg', '', 'États-Unis', 'Hauser', 'Paul Walter'),
('1315036', 34, 'Daisy.Ridley@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/A8QZBHZjlbWDiUXBvCTk4Zv5oBs.jpg', '', 'Royaume-Uni', 'Ridley', 'Daisy'),
('1327945', 36, 'Tom Rhys.Harries@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/elxvpHPqOxGcKe6U2hcArIcpyWo.jpg', '', 'Royaume-Uni', 'Harries', 'Tom Rhys'),
('1332481', 36, 'Ahmed.Sylla@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/38DD74BMJ4PEebdKhtAGzrQyLwd.jpg', '', 'France', 'Sylla', 'Ahmed'),
('134', 58, 'Jamie.Foxx@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/zD8Nsy4Xrghp7WunwpCj5JKBPeU.jpg', '', 'États-Unis', 'Foxx', 'Jamie'),
('136191', 81, 'Min.Tanaka@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/bXmBnejA48Da7LzLdJqTKSVPCwd.jpg', '', 'Japon', 'Tanaka', 'Min'),
('1373737', 30, 'Florence.Pugh@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/1QfiLnofJFlOJOLCWaxyDpIN03v.jpg', '', 'Royaume-Uni', 'Pugh', 'Florence'),
('1401338', 23, 'Hiyori.Sakurada@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/62ZKkbRas0oecXFcuIyzuKlom62.jpg', 'Ken-On', 'Japon', 'Sakurada', 'Hiyori'),
('1477273', 24, 'Rihito.Itagaki@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/3cg9RXHS7LZFCO9gf4D40nO57pP.jpg', 'Stardust Promotion', 'Japon', 'Itagaki', 'Rihito'),
('148992', 30, 'Austin.Abrams@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/nvbJNwyhIICUFcS4lhxj9mGvL5z.jpg', '', 'États-Unis', 'Abrams', 'Austin'),
('1516266', 26, 'Minami.Hamabe@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/eQN8N2chINckvQDiNqzDXI0v9vN.jpg', '', 'Japon', 'Hamabe', 'Minami'),
('15298', 55, 'Rachel.House@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/2LCQF7Bn0I91o17GGkox0ZhhbE7.jpg', '', 'Nouvelle-Zélande', 'House', 'Rachel'),
('1537686', 35, 'Naomi.Ackie@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/dijwuTAEZUzQtoJfK49S4X80fQw.jpg', '', 'Royaume-Uni', 'Ackie', 'Naomi'),
('1545693', 35, 'Zazie.Beetz@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/sgxzT54GnvgeMnOZgpQQx9csAdd.jpg', '', 'Allemagne, États-Unis', 'Beetz', 'Zazie'),
('15886', 65, 'Julia.Louis-Dreyfus@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/iEfHQNrVbVFesDPjdySom9nqsFg.jpg', '', 'États-Unis', 'Louis-Dreyfus', 'Julia'),
('1633253', 45, 'Luc.Schiltz@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/zSS5kUvwPazxfhSo2GLLRoIZmwl.jpg', '', 'Luxembourg', 'Schiltz', 'Luc'),
('1636467', 0, 'David.Ayala@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/g1FlhpnXANAvr80osb0rpazI5V6.jpg', '', '', 'Ayala', 'David'),
('1654001', 29, 'Amber.Midthunder@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/f8VWGyaIS38NkDIzQ2hapXKt0N5.jpg', '', 'États-Unis', 'Midthunder', 'Amber'),
('1660452', 45, 'Betty.Gabriel@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/n67i3H3VM5quDQfcS591EbotPby.jpg', '', 'États-Unis', 'Gabriel', 'Betty'),
('1665', 58, 'Eddie.Marsan@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/9atfOgIxhfOKvv2be8HEp6SzOct.jpg', '', 'Royaume-Uni', 'Marsan', 'Eddie'),
('16851', 58, 'Josh.Brolin@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/7QpneI3HoZCCDVPyWx3p3t7yeo7.jpg', '', 'États-Unis', 'Brolin', 'Josh'),
('1700685', 33, 'Lewis.Pullman@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/i2wJQ2eaVuTPaA84jzxNtxs54mO.jpg', '', 'États-Unis', 'Pullman', 'Lewis'),
('17051', 48, 'James.Franco@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/bjmAntHGiibLZixH8nTNVBzaFQn.jpg', '', 'États-Unis', 'Franco', 'James'),
('17052', 48, 'Topher.Grace@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/89sF57Br5lq8nrepS7HLzJ41QD1.jpg', '', 'États-Unis', 'Grace', 'Topher'),
('1812', 46, 'Michelle.Williams@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/jn3BVMVbIptz2gc6Fhxo1qwJVvW.jpg', '', 'États-Unis', 'Williams', 'Michelle'),
('1838225', 39, 'Zach.Cherry@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/fT3Wv8ef0Vn0daHWAObCp2Bd4Y.jpg', '', 'États-Unis', 'Cherry', 'Zach'),
('19159', 66, 'Thomas Haden.Church@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/74NK9HCYvNafMggSp1PAK5Nwkpe.jpg', '', 'États-Unis', 'Church', 'Thomas Haden'),
('19866', 53, 'Guillaume.Canet@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/yxerAhXValEezb1EuV9XWc9L8KC.jpg', '', 'France', 'Canet', 'Guillaume'),
('2', 75, 'Mark.Hamill@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/zMQ93JTLW8KxusKhOlHFZhih3YQ.jpg', '', 'États-Unis', 'Hamill', 'Mark'),
('2018504', 20, 'Sena.Nakajima@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/o6oCJO0rtgwCEFSb8Yc4MuhPSp1.jpg', '', 'Japon', 'Nakajima', 'Sena'),
('2032919', 35, 'Enya.Baroux@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/nG2UL3cOG0syBYkQNroGhA3L8a3.jpg', '', 'France', 'Baroux', 'Enya'),
('2038', 50, 'Naomie.Harris@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/41TVAcYqKKF7PGf3x7QfaLvkLSW.jpg', '', 'Royaume-Uni', 'Harris', 'Naomie'),
('205', 44, 'Kirsten.Dunst@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/yhLKGjuiMMdbGnFrR8AREkCZcVF.jpg', '', 'États-Unis, Allemagne', 'Dunst', 'Kirsten'),
('2219', 51, 'Tobey.Maguire@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/s6PwSvq6gC7PGEjIku69tPbvR8M.jpg', '', 'États-Unis', 'Maguire', 'Tobey'),
('2231', 77, 'Samuel L..Jackson@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/AiAYAqwpM5xmiFrAIeQvUXDCVvo.jpg', '', 'États-Unis', 'Jackson', 'Samuel L.'),
('225730', 33, 'Ryunosuke.Kamiki@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/ut7ewXjdgUmgkhJ1EtbOo9tbc7s.jpg', '', 'Japon', 'Kamiki', 'Ryunosuke'),
('2293954', 26, 'Gordon.Maeda@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/bJlMMUDaMrLSSGvpfcIkS3yApa9.jpg', '', 'Japon', 'Maeda', 'Gordon'),
('236695', 34, 'John.Boyega@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/3153CfpgZQXTzCY0i74WpJumMQe.jpg', '', 'Royaume-Uni', 'Boyega', 'John'),
('2389740', 25, 'Fumiya.Takahashi@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/aNdoFv1zPypM3nxR5T7LfpfKLZR.jpg', 'A-Plus', 'Japon', 'Takahashi', 'Fumiya'),
('24041', 53, 'François.Damiens@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/agHzt46feTHdFK9YdgRjmnqFUtS.jpg', '', 'Belgique', 'Damiens', 'François'),
('2524', 49, 'Tom.Hardy@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg', '', 'Royaume-Uni', 'Hardy', 'Tom'),
('27319', 70, 'Christoph.Waltz@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/jMvLGCVXLaBqjRLf5olyvEucZob.jpg', '', 'Autriche, Allemagne', 'Waltz', 'Christoph'),
('2978', 41, 'Max.Minghella@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/AhVDxsOOoAnwwVBL7ZY8W0mGsYJ.jpg', '', 'Royaume-Uni', 'Minghella', 'Max'),
('3119545', 40, 'Kali.Reis@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/ruLDXHnKA4aHEQCcFGDAJ7bLTdt.jpg', '', 'États-Unis', 'Reis', 'Kali'),
('35029', 51, 'David.Harbour@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/qMFtMWlYVtFVyBoBhX5IoA5sN5a.jpg', '', 'États-Unis', 'Harbour', 'David'),
('3936734', 20, 'Juliette.Gasquet@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/eoNHYcLKFl1ao3gCsGNEPX8tVkW.jpg', '', '', 'Gasquet', 'Juliette'),
('4', 60, 'Carrie.Fisher@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/of4yHmryKPy92eeskUQ7MRmjC3l.jpg', '', 'États-Unis', 'Fisher', 'Carrie'),
('4166', 55, 'Isabelle.Carré@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/hC7NLIv6RGvtwb8pjy9DJbbHhJG.jpg', '', 'France', 'Carré', 'Isabelle'),
('4498192', 21, 'Clément.Faveau@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/w9sjXSIkf4qyDSnoas0Bk5Ul1F5.jpg', '', 'France', 'Faveau', 'Clément'),
('4498193', 10, 'Luna.Garret@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/p8fNDGMMgDGdRZzIKtdOGTMWIUX.jpg', '', 'France', 'Garret', 'Luna'),
('4498194', 21, 'Mathis.Bernard@gmail.com', 'Homme', 'https://fr.web.img2.acsta.net/r_1920_1080/img/4e/d0/4ed08c682b801b1937ffe92dd8a96f5d.jpg', '', 'France', 'Bernard', 'Mathis'),
('4498195', 0, 'Dimitri.Baudry@gmail.com', 'Homme', 'https://fr.web.img5.acsta.net/c_310_420/img/07/17/07174d18c54553a7c19331d1d9756369.jpg', '', 'France', 'Baudry', 'Dimitri'),
('4649720', 24, 'Maïwène.Barthélémy@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/eRv5n1j0H1J2lFanUngAoGe1Yhg.jpg', '', 'France', 'Barthélémy', 'Maïwène'),
('47820', 62, 'Benoît.Poelvoorde@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/eLCyWcuItrgp8KwdLimJkDCp3qi.jpg', '', 'Belgique', 'Poelvoorde', 'Benoît'),
('544685', 37, 'Pierre.Lottin@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/1d0CBRIjScO7AUkQAqPcaRuC9Mg.jpg', '', 'France', 'Lottin', 'Pierre'),
('54882', 47, 'Morena.Baccarin@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/4gyHyg6FJ1oFczOm5pmMkdEEo2J.jpg', '', 'Brésil, États-Unis', 'Baccarin', 'Morena'),
('56323', 56, 'Tina.Fey@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/yPTAi1iucXf85UpiFPtyiTSM6do.jpg', '', 'États-Unis', 'Fey', 'Tina'),
('57755', 65, 'Woody.Harrelson@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/igxYDQBbTEdAqaJxaW6ffqswmUU.jpg', '', 'États-Unis', 'Harrelson', 'Woody'),
('59031', 67, 'Didier.Bourdon@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/llffnXLuelL2gCu6LFH7aPiva4f.jpg', '', 'France', 'Bourdon', 'Didier'),
('59841', 62, 'Matt.Walsh@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/fp1JsNbZyhJ3PHpwZJVDYRz1RGF.jpg', '', 'États-Unis', 'Walsh', 'Matt'),
('60898', 44, 'Sebastian.Stan@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/v20RLWst39klatsqUgSrwHxhwee.jpg', '', 'États-Unis, Roumanie', 'Stan', 'Sebastian'),
('60960', 34, 'Ray.Nicholson@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/f0MRbGIyTEJLJgHedJS8pRFhGn4.jpg', '', 'États-Unis', 'Nicholson', 'Ray'),
('6193', 52, 'Leonardo.DiCaprio@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg', '', 'États-Unis', 'DiCaprio', 'Leonardo'),
('7037', 71, 'Jean-Hugues.Anglade@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/cpSxpZLgtzuizHyEmdkh9rgKkRs.jpg', '', 'France', 'Anglade', 'Jean-Hugues'),
('78577', 63, 'Graham.Norton@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/zndDiPrNXtbxGLVhFhSlpCkaHIH.jpg', '', 'Irlande', 'Norton', 'Graham'),
('81316', 48, 'Reid.Scott@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/kBAeDUDA7XJRXFLGNALlpE5d3lA.jpg', '', 'États-Unis', 'Scott', 'Reid'),
('8602', 43, 'Alice.Braga@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/d9JdgvUiqyWuGQLmozNfGZOpIBz.jpg', '', 'Brésil', 'Braga', 'Alice'),
('87637', 39, 'Masami.Nagasawa@gmail.com', 'Femme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/yvHhfDOral1DeyBRSzpxsoHz60t.jpg', '', 'Japon', 'Nagasawa', 'Masami'),
('8789', 61, 'Mathieu.Amalric@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/fMhfoTbjlXQy2Iojp7oYx49hLQl.jpg', '', 'France', 'Amalric', 'Mathieu'),
('93236', 52, 'David.Dencik@gmail.com', 'Homme', 'https://media.themoviedb.org/t/p/w300_and_h450_face/q5wLADc6yYd3owxSEG8VKbf7YWV.jpg', '', 'Suède et Danemark', 'Dencik', 'David');

-- --------------------------------------------------------

--
-- Table structure for table `film`
--

DROP TABLE IF EXISTS `film`;
CREATE TABLE IF NOT EXISTS `film` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `annee_sortie` int NOT NULL,
  `imageurl` varchar(1024) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longueur` int NOT NULL,
  `nationalite` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nombre_oscars` int NOT NULL,
  `titre` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `film`
--

INSERT INTO `film` (`id`, `annee_sortie`, `imageurl`, `longueur`, `nationalite`, `nombre_oscars`, `titre`) VALUES
(1, 2018, 'https://fr.web.img6.acsta.net/pictures/18/08/21/18/41/2636278.jpg', 117, 'France', 0, 'Le Grand Bain'),
(2, 2024, 'https://i0.wp.com/laurentlecrabe.com/wp-content/uploads/2024/10/IMG_2374.jpg?fit=1080%2C1350&ssl=1', 90, 'France', 2, 'Vingt Dieux'),
(3, 2023, 'https://fr.web.img6.acsta.net/pictures/22/11/17/11/47/3561503.jpg', 109, 'France, Luxembourg', 0, 'La Guerre des Lulus'),
(4, 2012, 'https://i.ebayimg.com/images/g/CM8AAOxy~dNQ9t4x/s-l1200.jpg', 165, 'États-Unis', 2, 'Django Unchained'),
(5, 2018, 'https://m.media-amazon.com/images/M/MV5BZjYyNjFkZGMtMmY2Mi00ZDI1LWI0OGYtOTlkNjNiN2QxZDdlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 119, 'États-Unis', 0, 'Deadpool 2'),
(6, 2024, 'https://m.media-amazon.com/images/M/MV5BYjY5OGJhZWItMjRkOC00YjI1LTg1NmEtMWI2MTBjZmIzNjAyXkEyXkFqcGc@._V1_.jpg', 115, 'Japon', 0, 'Blue Period'),
(7, 2007, 'https://i.ebayimg.com/00/s/MTYwMFgxMTE5/z/RAAAAOSwx1VkAQbT/$_57.JPG?set_id=8800005007', 139, 'États-Unis', 0, 'Spider-Man 3'),
(8, 2020, 'https://i.ebayimg.com/00/s/MTM1Mlg5MDA=/z/FaUAAOSwvFteklwI/$_57.JPG?set_id=8800005007', 100, 'États-Unis', 2, 'Soul'),
(9, 2025, 'https://fr.web.img5.acsta.net/img/4e/64/4e644edc4b90cae39ea31727a29cdb09.jpg', 97, 'France', 0, 'On ira'),
(10, 2025, 'https://cdng.europosters.eu/pod_public/1300/315989.jpg', 110, 'États-Unis, Canada, Afrique du Sud', 0, 'Novocaine'),
(11, 2025, 'https://a.ltrbxd.com/resized/film-poster/8/8/7/6/5/3/887653-thunderbolts-0-2000-0-3000-crop.jpg?v=80380bc773', 127, 'États-Unis', 0, 'Thunderbolts'),
(12, 2017, 'https://www.movieartarena.com/imgs/episode8ib.jpg', 152, 'États-Unis', 0, 'Star Wars: The Last Jedi'),
(13, 2021, 'https://i.ebayimg.com/images/g/kEoAAOSwSKdhG9vZ/s-l1200.jpg', 97, 'États-Unis', 0, 'Venom: Let There Be Carnage'),
(14, 2026, 'https://www.comicsblog.fr/images/editeur/Arno/avril-2026/Clayface.jpeg', 108, 'États-Unis', 0, 'Clayface'),
(15, 2026, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58htNKGPlvc7VUOCKknHKXX_IgBA4jxYUokMQcSAKkMLGrwtF9f-rVy4&s=10', 135, 'Japon', 0, 'Godzilla Minus Zero'),
(16, 2026, 'https://scontent-cdg4-3.cdninstagram.com/v/t51.82787-15/707338391_18441559129137203_6207076784060830122_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&_nc_map=urlgen_bucketless&cb=30a688f7-99daaf84&ig_cache_key=MzkwODMyOTQ3NTQ2MTY3NjY4Mw%3D%3D.3-ccb7-5-cb30a688f7-99daaf84&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=g70okMN_bPYQ7kNvwEK9hG3&_nc_oc=AdpTjT_xgCC_BRp75T20uEMROg74Cy9Shf8AbMDqpY84Y40plL2yt9Z-LxTTHCJ36ybLKGESzAjd_SrQeFRxRr1u&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cdg4-3.cdninstagram.com&_nc_gid=yJ-QKxMVQIsA6xV-r4XtwQ&_nc_ss=7a22e&oh=00_AQR1Ni-OUoSZvY9TQt6BhIdqbvHPfgYu994TwhUzeVJQbA&oe=6AFBF6F3', 94, 'États-Unis, Allemagne, France', 0, 'Resident Evil');

-- --------------------------------------------------------

--
-- Table structure for table `film_acteur`
--

DROP TABLE IF EXISTS `film_acteur`;
CREATE TABLE IF NOT EXISTS `film_acteur` (
  `films_id` bigint NOT NULL,
  `acteur_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  KEY `FKbam4k9vs0wowgihrdgsnmokq3` (`acteur_code`),
  KEY `FK4wqtq064bag19dwnkl5tbiymc` (`films_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `film_acteur`
--

INSERT INTO `film_acteur` (`films_id`, `acteur_code`) VALUES
(1, '8789'),
(1, '19866'),
(1, '47820'),
(1, '7037'),
(1, '118178'),
(2, '4498192'),
(2, '4649720'),
(2, '4498193'),
(2, '4498194'),
(2, '4498195'),
(3, '24041'),
(3, '4166'),
(3, '1332481'),
(3, '59031'),
(3, '1633253'),
(4, '134'),
(4, '27319'),
(4, '6193'),
(4, '11703'),
(4, '2231'),
(5, '10859'),
(5, '16851'),
(5, '54882'),
(5, '1139349'),
(5, '1545693'),
(6, '2293954'),
(6, '2389740'),
(6, '1477273'),
(6, '1401338'),
(6, '2018504'),
(7, '2219'),
(7, '205'),
(7, '17051'),
(7, '19159'),
(7, '17052'),
(8, '134'),
(8, '56323'),
(8, '78577'),
(8, '15298'),
(8, '8602'),
(9, '1141'),
(9, '544685'),
(9, '1636467'),
(9, '3936734'),
(9, '2032919'),
(10, '1030513'),
(10, '1654001'),
(10, '60960'),
(10, '1660452'),
(10, '59841'),
(11, '1373737'),
(11, '60898'),
(11, '15886'),
(11, '1700685'),
(11, '35029'),
(12, '2'),
(12, '4'),
(12, '1023139'),
(12, '1315036'),
(12, '236695'),
(13, '2524'),
(13, '57755'),
(13, '1812'),
(13, '2038'),
(13, '81316'),
(14, '1327945'),
(14, '1537686'),
(14, '1665'),
(14, '2978'),
(14, '93236'),
(15, '225730'),
(15, '1516266'),
(15, '136191'),
(15, '111691'),
(15, '87637'),
(16, '148992'),
(16, '1294982'),
(16, '3119545'),
(16, '1838225'),
(16, '1169291');

-- --------------------------------------------------------

--
-- Table structure for table `film_genre`
--

DROP TABLE IF EXISTS `film_genre`;
CREATE TABLE IF NOT EXISTS `film_genre` (
  `films_id` bigint NOT NULL,
  `genre_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  KEY `FK7bllyohtttsvio4w4kp3mstts` (`genre_code`),
  KEY `FKr8xq21m8k73n2infed0yj2mt7` (`films_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `film_genre`
--

INSERT INTO `film_genre` (`films_id`, `genre_code`) VALUES
(1, 'DRAME'),
(1, 'COMEDIE'),
(2, 'DRAME'),
(2, 'COMEDIE'),
(3, 'AVENTURE'),
(3, 'HISTOIRE'),
(3, 'FAMILIAL'),
(3, 'DRAME'),
(3, 'GUERRE'),
(4, 'DRAME'),
(4, 'WESTERN'),
(5, 'ACTION'),
(5, 'COMEDIE'),
(5, 'AVENTURE'),
(6, 'DRAME'),
(6, 'COMEDIE'),
(7, 'ACTION'),
(7, 'AVENTURE'),
(7, 'SCIENCE_FICTION'),
(8, 'ANIMATION'),
(8, 'FAMILIAL'),
(8, 'DRAME'),
(8, 'MUSIQUE'),
(8, 'FANTASTIQUE'),
(9, 'COMEDIE'),
(9, 'DRAME'),
(10, 'ACTION'),
(10, 'COMEDIE'),
(10, 'THRILLER'),
(11, 'ACTION'),
(11, 'SCIENCE_FICTION'),
(11, 'AVENTURE'),
(12, 'AVENTURE'),
(12, 'ACTION'),
(12, 'SCIENCE_FICTION'),
(13, 'SCIENCE_FICTION'),
(13, 'ACTION'),
(13, 'AVENTURE'),
(14, 'HORREUR'),
(14, 'THRILLER'),
(14, 'SCIENCE_FICTION'),
(15, 'SCIENCE_FICTION'),
(15, 'HORREUR'),
(15, 'ACTION'),
(16, 'HORREUR'),
(16, 'SCIENCE_FICTION'),
(16, 'AVENTURE');

-- --------------------------------------------------------

--
-- Table structure for table `film_realisateur`
--

DROP TABLE IF EXISTS `film_realisateur`;
CREATE TABLE IF NOT EXISTS `film_realisateur` (
  `films_id` bigint NOT NULL,
  `realisateur_id` bigint NOT NULL,
  KEY `FKhq45lj0grycvd8w0x7gr7piw7` (`realisateur_id`),
  KEY `FKdddktxm2u5se208x9bk8oc56i` (`films_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `film_realisateur`
--

INSERT INTO `film_realisateur` (`films_id`, `realisateur_id`) VALUES
(1, 12),
(2, 3),
(3, 13),
(4, 8),
(5, 10),
(6, 2),
(7, 6),
(8, 17),
(9, 7),
(10, 16),
(10, 14),
(11, 11),
(12, 5),
(13, 15),
(14, 9),
(15, 4),
(16, 1);

-- --------------------------------------------------------

--
-- Table structure for table `genre`
--

DROP TABLE IF EXISTS `genre`;
CREATE TABLE IF NOT EXISTS `genre` (
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `libelle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `genre`
--

INSERT INTO `genre` (`code`, `libelle`) VALUES
('ACTION', 'Action'),
('ANIMATION', 'Animation'),
('AVENTURE', 'Aventure'),
('COMEDIE', 'Comédie'),
('DRAME', 'Drame'),
('FAMILIAL', 'Familial'),
('FANTASTIQUE', 'Fantastique'),
('GUERRE', 'Guerre'),
('HISTOIRE', 'Histoire'),
('HORREUR', 'Horreur'),
('MUSIQUE', 'Musique'),
('SCIENCE_FICTION', 'Science-Fiction'),
('THRILLER', 'Thriller'),
('WESTERN', 'Western');

-- --------------------------------------------------------

--
-- Table structure for table `realisateur`
--

DROP TABLE IF EXISTS `realisateur`;
CREATE TABLE IF NOT EXISTS `realisateur` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imageurl` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nationalite` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nbr_films_realises` int NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prenom` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `realisateur`
--

INSERT INTO `realisateur` (`id`, `email`, `imageurl`, `nationalite`, `nbr_films_realises`, `nom`, `prenom`) VALUES
(1, 'Zach.Cregger@gmail.com', 'https://media.themoviedb.org/t/p/w300_and_h450_face/bpFGFfWYIrZVK7WjwkVLwIoMKEb.jpg', 'États-Unis', 5, 'Cregger', 'Zach'),
(2, 'Kentaro.Hagiwara@gmail.com', 'https://media.themoviedb.org/t/p/w300_and_h450_face/tWFzCjZrPnfLwnyLUKFoYf70SBj.jpg', 'Japon', 8, 'Hagiwara', 'Kentaro'),
(3, 'Louise.Courvoisier@gmail.com', 'https://upload.wikimedia.org/wikipedia/commons/2/26/Louise_Courvoisier_2024.jpg?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=original', 'France', 1, 'Courvoisier', 'Louise'),
(4, 'Takashi.Yamazaki@gmail.com', 'https://media.themoviedb.org/t/p/w300_and_h450_face/aRxPJuOij3DUUGojtBmjAAxfL9x.jpg', 'Japon', 23, 'Yamazaki', 'Takashi'),
(5, 'Rian.Johnson@gmail.com', 'https://media.themoviedb.org/t/p/w300_and_h450_face/ggwlJvCn0laNGjcvwGchuwC00hQ.jpg', 'États-Unis', 8, 'Johnson', 'Rian'),
(6, 'Sam.Raimi@gmail.com', 'https://media.themoviedb.org/t/p/w300_and_h450_face/8gssvwiPrFRuFRlr5ruKx68k1Jl.jpg', 'États-Unis', 16, 'Raimi', 'Sam'),
(7, 'Enya.Baroux@gmail.com', 'https://media.themoviedb.org/t/p/w300_and_h450_face/nG2UL3cOG0syBYkQNroGhA3L8a3.jpg', 'France', 1, 'Baroux', 'Enya'),
(8, 'Quentin.Tarantino@gmail.com', 'https://media.themoviedb.org/t/p/w300_and_h450_face/1gjcpAa99FAOWGnrUvHEXXsRs7o.jpg', 'États-Unis', 13, 'Tarantino', 'Quentin'),
(9, 'James.Watkins@gmail.com', 'https://media.themoviedb.org/t/p/w300_and_h450_face/tZextIeFu04YIBBRjKOQuMyP2O9.jpg', 'Royaume-Uni', 5, 'Watkins', 'James'),
(10, 'David.Leitch@gmail.com', 'https://media.themoviedb.org/t/p/w300_and_h450_face/aWDxGlWkFVhs80DQMEE5A7c7YBr.jpg', 'États-Unis', 8, 'Leitch', 'David'),
(11, 'Jake.Schreier@gmail.com', 'https://media.themoviedb.org/t/p/w300_and_h450_face/eW2wkPwh9Ng1igl2J6vOKhqrUlh.jpg', 'États-Unis', 5, 'Schreier', 'Jake'),
(12, 'Gilles.Lellouche@gmail.com', 'https://media.themoviedb.org/t/p/w300_and_h450_face/5Ka9nodCWS6TRFJnmosjp9sV3iA.jpg', 'France', 5, 'Lellouche', 'Gilles'),
(13, 'Yann.Samuell@gmail.com', 'https://media.themoviedb.org/t/p/w300_and_h450_face/x5rNtn8OkegkvcC8Lfkzwd7wSAS.jpg', 'France', 10, 'Samuell', 'Yann'),
(14, 'Robert.Olsen@gmail.com', 'https://media.themoviedb.org/t/p/w300_and_h450_face/6uM5NHBz0Gr3gbx02nr8ww0C7QU.jpg', 'États-Unis', 5, 'Olsen', 'Robert'),
(15, 'Andy.Serkis@gmail.com', 'https://media.themoviedb.org/t/p/w300_and_h450_face/eNGqhebQ4cDssjVeNFrKtUvweV5.jpg', 'Royaume-Uni', 4, 'Serkis', 'Andy'),
(16, 'Dan.Berk@gmail.com', 'https://media.themoviedb.org/t/p/w300_and_h450_face/cleKQ7QK8HELojR8nLbjpNmqJPS.jpg', 'États-Unis', 5, 'Berk', 'Dan'),
(17, 'Pete.Docter@gmail.com', 'https://media.themoviedb.org/t/p/w300_and_h450_face/vITDphkNpSn1LP5gUEheAnlclnl.jpg', 'États-Unis', 4, 'Docter', 'Pete');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `film_acteur`
--
ALTER TABLE `film_acteur`
  ADD CONSTRAINT `FK4wqtq064bag19dwnkl5tbiymc` FOREIGN KEY (`films_id`) REFERENCES `film` (`id`),
  ADD CONSTRAINT `FKbam4k9vs0wowgihrdgsnmokq3` FOREIGN KEY (`acteur_code`) REFERENCES `acteur` (`code`);

--
-- Constraints for table `film_genre`
--
ALTER TABLE `film_genre`
  ADD CONSTRAINT `FK7bllyohtttsvio4w4kp3mstts` FOREIGN KEY (`genre_code`) REFERENCES `genre` (`code`),
  ADD CONSTRAINT `FKr8xq21m8k73n2infed0yj2mt7` FOREIGN KEY (`films_id`) REFERENCES `film` (`id`);

--
-- Constraints for table `film_realisateur`
--
ALTER TABLE `film_realisateur`
  ADD CONSTRAINT `FKdddktxm2u5se208x9bk8oc56i` FOREIGN KEY (`films_id`) REFERENCES `film` (`id`),
  ADD CONSTRAINT `FKhq45lj0grycvd8w0x7gr7piw7` FOREIGN KEY (`realisateur_id`) REFERENCES `realisateur` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
