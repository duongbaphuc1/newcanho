-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 15, 2014 at 04:07 AM
-- Server version: 5.5.38-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `newcanho`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(250) NOT NULL,
  `slug` varchar(250) NOT NULL,
  `type` int(11) NOT NULL,
  `sort` int(11) NOT NULL,
  `is_active` int(11) NOT NULL DEFAULT '1',
  `updated_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=111 ;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `slug`, `type`, `sort`, `is_active`, `updated_date`) VALUES
(91, 'Cho Thuê Nhà ', 'cho-thue-nha', 100, 0, 1, '2014-10-10 14:51:02'),
(92, 'Văn Phòng Cho Thuê', 'van-phong-cho-thue', 100, 0, 1, '2014-10-10 14:51:02'),
(95, 'Căn Hộ Cho Thuê', 'can-ho-cho-thue', 100, 0, 1, '2014-10-10 14:51:02'),
(104, 'Villa Cho Thuê', 'villa-cho-thue', 100, 0, 1, '2014-10-10 14:51:02'),
(105, 'Căn hộ dịch vụ', 'can-ho-dich-vu', 100, 0, 1, '2014-10-10 14:51:02'),
(107, 'căn hộ bán ', 'can-ho-ban', 111, 0, 0, '2014-10-10 14:51:02'),
(108, 'Nhà Bán ', 'nha-ban', 111, 0, 0, '2014-10-10 14:51:02'),
(109, 'Biệt thự bán ', 'biet-thu-ban', 111, 0, 0, '2014-10-10 14:51:02'),
(110, 'Đất bán ', 'dat-ban', 111, 0, 0, '2014-10-10 14:51:02');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
