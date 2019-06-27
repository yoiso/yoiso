import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1561610833543 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` text NOT NULL, `email` text NOT NULL, `phone` text NULL, `password` text NOT NULL, `isVerified` tinyint NOT NULL DEFAULT 0, `dateCreated` timestamp NULL, `dateUpdated` timestamp NULL, `dateDeleted` timestamp NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `daily_balance` (`id` varchar(36) NOT NULL, `account` text NOT NULL, `amount` text NOT NULL, `type` enum ('debit', 'credit') NOT NULL, `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `userId` int NULL, INDEX `IDX_d6250a4222f475016bba5944e1` (`date`), INDEX `IDX_91e75ed61bb07ebda3912510f2` (`userId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `access_token` (`id` int NOT NULL AUTO_INCREMENT, `access_token` text NOT NULL, `userId` int NULL, UNIQUE INDEX `REL_9949557d0e1b2c19e5344c171e` (`userId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `client` (`id` int NOT NULL AUTO_INCREMENT, `client_id` varchar(255) NOT NULL, `client_secret` text NOT NULL, UNIQUE INDEX `IDX_7510ce0a84bde51dbff978b4b4` (`client_id`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `account_verification` (`id` int NOT NULL AUTO_INCREMENT, `code` text NOT NULL, `userId` int NULL, UNIQUE INDEX `REL_2d4eff3e8d902988754fde5be0` (`userId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `daily_balance` ADD CONSTRAINT `FK_91e75ed61bb07ebda3912510f24` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `access_token` ADD CONSTRAINT `FK_9949557d0e1b2c19e5344c171e9` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `account_verification` ADD CONSTRAINT `FK_2d4eff3e8d902988754fde5be03` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `account_verification` DROP FOREIGN KEY `FK_2d4eff3e8d902988754fde5be03`");
        await queryRunner.query("ALTER TABLE `access_token` DROP FOREIGN KEY `FK_9949557d0e1b2c19e5344c171e9`");
        await queryRunner.query("ALTER TABLE `daily_balance` DROP FOREIGN KEY `FK_91e75ed61bb07ebda3912510f24`");
        await queryRunner.query("DROP INDEX `REL_2d4eff3e8d902988754fde5be0` ON `account_verification`");
        await queryRunner.query("DROP TABLE `account_verification`");
        await queryRunner.query("DROP INDEX `IDX_7510ce0a84bde51dbff978b4b4` ON `client`");
        await queryRunner.query("DROP TABLE `client`");
        await queryRunner.query("DROP INDEX `REL_9949557d0e1b2c19e5344c171e` ON `access_token`");
        await queryRunner.query("DROP TABLE `access_token`");
        await queryRunner.query("DROP INDEX `IDX_91e75ed61bb07ebda3912510f2` ON `daily_balance`");
        await queryRunner.query("DROP INDEX `IDX_d6250a4222f475016bba5944e1` ON `daily_balance`");
        await queryRunner.query("DROP TABLE `daily_balance`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
