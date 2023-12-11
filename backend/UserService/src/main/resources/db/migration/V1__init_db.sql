CREATE TABLE  IF NOT EXISTS `user` (
  `id` binary(16) NOT NULL,
  `email` varchar(255) NOT NULL UNIQUE,
  `name` varchar(255),
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);
