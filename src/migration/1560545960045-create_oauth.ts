import {MigrationInterface, QueryRunner} from "typeorm";

export class createOauth1560545960045 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `access_token` DROP FOREIGN KEY `FK_9949557d0e1b2c19e5344c171e9`");
        await queryRunner.query("ALTER TABLE `access_token` DROP FOREIGN KEY `FK_c425901c1f66598550020494008`");
        await queryRunner.query("DROP INDEX `IDX_6ed9067942d7537ce359e172ff` ON `client`");
        await queryRunner.query("ALTER TABLE `access_token` DROP COLUMN `token`");
        await queryRunner.query("ALTER TABLE `access_token` DROP COLUMN `expirationDate`");
        await queryRunner.query("ALTER TABLE `access_token` DROP COLUMN `userId`");
        await queryRunner.query("ALTER TABLE `access_token` DROP COLUMN `clientId`");
        await queryRunner.query("ALTER TABLE `client` DROP COLUMN `name`");
        await queryRunner.query("ALTER TABLE `client` DROP COLUMN `clientId`");
        await queryRunner.query("ALTER TABLE `client` DROP COLUMN `clientSecret`");
        await queryRunner.query("ALTER TABLE `client` DROP COLUMN `trusted`");
        await queryRunner.query("ALTER TABLE `access_token` ADD `access_token` text NOT NULL");
        await queryRunner.query("ALTER TABLE `access_token` ADD `user_id` int NOT NULL");
        await queryRunner.query("ALTER TABLE `client` ADD `client_id` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `client` ADD UNIQUE INDEX `IDX_7510ce0a84bde51dbff978b4b4` (`client_id`)");
        await queryRunner.query("ALTER TABLE `client` ADD `client_secret` text NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `client` DROP COLUMN `client_secret`");
        await queryRunner.query("ALTER TABLE `client` DROP INDEX `IDX_7510ce0a84bde51dbff978b4b4`");
        await queryRunner.query("ALTER TABLE `client` DROP COLUMN `client_id`");
        await queryRunner.query("ALTER TABLE `access_token` DROP COLUMN `user_id`");
        await queryRunner.query("ALTER TABLE `access_token` DROP COLUMN `access_token`");
        await queryRunner.query("ALTER TABLE `client` ADD `trusted` tinyint NOT NULL DEFAULT '0'");
        await queryRunner.query("ALTER TABLE `client` ADD `clientSecret` text CHARACTER SET \"latin1\" COLLATE \"latin1_swedish_ci\" NOT NULL");
        await queryRunner.query("ALTER TABLE `client` ADD `clientId` varchar(200) CHARACTER SET \"latin1\" COLLATE \"latin1_swedish_ci\" NOT NULL");
        await queryRunner.query("ALTER TABLE `client` ADD `name` text CHARACTER SET \"latin1\" COLLATE \"latin1_swedish_ci\" NOT NULL");
        await queryRunner.query("ALTER TABLE `access_token` ADD `clientId` int NULL");
        await queryRunner.query("ALTER TABLE `access_token` ADD `userId` int NULL");
        await queryRunner.query("ALTER TABLE `access_token` ADD `expirationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `access_token` ADD `token` text CHARACTER SET \"latin1\" COLLATE \"latin1_swedish_ci\" NOT NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_6ed9067942d7537ce359e172ff` ON `client` (`clientId`)");
        await queryRunner.query("ALTER TABLE `access_token` ADD CONSTRAINT `FK_c425901c1f66598550020494008` FOREIGN KEY (`clientId`) REFERENCES `client`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `access_token` ADD CONSTRAINT `FK_9949557d0e1b2c19e5344c171e9` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
