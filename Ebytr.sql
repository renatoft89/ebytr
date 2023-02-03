-- Active: 1675458696026@@containers-us-west-136.railway.app@6155@railway

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks` (
  `id` int(11) NOT NULL COMMENT 'Primary Key',
  `content` varchar(255) DEFAULT NULL COMMENT 'content',
  `status` varchar(255) DEFAULT NULL COMMENT 'status',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=139 DEFAULT CHARSET=utf8 COMMENT='tasks';