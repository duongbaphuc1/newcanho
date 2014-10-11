ALTER TABLE  `real_estate` ADD  `created_date` TIMESTAMP NOT NULL AFTER  `user_id` ;

--
-- Table structure for table `tags_estate`
--

CREATE TABLE IF NOT EXISTS `tags_estate` (
  `id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  `real_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;