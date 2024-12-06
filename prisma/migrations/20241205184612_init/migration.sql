-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(45) NOT NULL,
    `lastName` VARCHAR(45) NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `birthDate` DATETIME(0) NOT NULL,
    `gender` VARCHAR(45) NOT NULL,
    `password` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `email_UNIQUE`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
