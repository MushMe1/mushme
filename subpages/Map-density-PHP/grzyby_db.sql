-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Lis 10, 2024 at 12:31 AM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `grzyby_db`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `wojewodztwa_grzyby`
--

CREATE TABLE `wojewodztwa_grzyby` (
  `id` int(11) NOT NULL,
  `nazwa` varchar(255) NOT NULL,
  `liczba_grzybow` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Dumping data for table `wojewodztwa_grzyby`
--

INSERT INTO `wojewodztwa_grzyby` (`id`, `nazwa`, `liczba_grzybow`) VALUES
(1, 'mazowieckie', 43),
(2, 'wielkopolskie', 0),
(3, 'lubelskie', 8),
(4, 'warminsko_mazurskie', 56),
(5, 'zachodniopomorskie', 23),
(6, 'podlaskie', 67),
(7, 'dolnoslaskie', 22),
(8, 'pomorskie', 99),
(9, 'kujawsko_pomorskie', 27),
(10, 'lodzkie', 12),
(11, 'podkarpackie', 6),
(12, 'malopolskie', 77),
(13, 'lubuskie', 88),
(14, 'swietokrzyskie', 33),
(15, 'slaskie', 55),
(16, 'opolskie', 8);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `wojewodztwa_grzyby`
--
ALTER TABLE `wojewodztwa_grzyby`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wojewodztwa_grzyby`
--
ALTER TABLE `wojewodztwa_grzyby`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
