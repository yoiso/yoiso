import {MigrationInterface, QueryRunner} from "typeorm";

export class userForAccountVerification1561019799282 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `account_verification` ADD `userId` int NULL");
        await queryRunner.query("ALTER TABLE `account_verification` ADD UNIQUE INDEX `IDX_2d4eff3e8d902988754fde5be0` (`userId`)");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_2d4eff3e8d902988754fde5be0` ON `account_verification` (`userId`)");
        await queryRunner.query("ALTER TABLE `account_verification` ADD CONSTRAINT `FK_2d4eff3e8d902988754fde5be03` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `account_verification` DROP FOREIGN KEY `FK_2d4eff3e8d902988754fde5be03`");
        await queryRunner.query("DROP INDEX `REL_2d4eff3e8d902988754fde5be0` ON `account_verification`");
        await queryRunner.query("ALTER TABLE `account_verification` DROP INDEX `IDX_2d4eff3e8d902988754fde5be0`");
        await queryRunner.query("ALTER TABLE `account_verification` DROP COLUMN `userId`");
    }

}
