import {MigrationInterface, QueryRunner} from "typeorm";

export class createDailyBalanceRelationship1561358492040 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `daily_balance` ADD `userId` int NULL");
        await queryRunner.query("ALTER TABLE `daily_balance` ADD CONSTRAINT `FK_91e75ed61bb07ebda3912510f24` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `daily_balance` DROP FOREIGN KEY `FK_91e75ed61bb07ebda3912510f24`");
        await queryRunner.query("ALTER TABLE `daily_balance` DROP COLUMN `userId`");
    }

}
