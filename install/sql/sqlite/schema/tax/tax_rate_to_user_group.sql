DROP TABLE IF EXISTS `tax_rate_to_user_group`;

CREATE TABLE `tax_rate_to_user_group` (
`tax_rate_id` INT NOT NULL,
`user_group_id` INT NOT NULL,
PRIMARY KEY (`tax_rate_id`,`user_group_id`)
);
