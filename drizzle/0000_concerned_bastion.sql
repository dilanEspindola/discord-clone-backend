CREATE TABLE `users` (
	`id` int unsigned AUTO_INCREMENT NOT NULL,
	`name_display` varchar(255) NOT NULL,
	`username` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`is_verified` boolean DEFAULT false,
	`profile_picture` varchar(255),
	`birthday_date` date NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
