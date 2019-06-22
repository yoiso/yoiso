import {MigrationInterface, QueryRunner} from "typeorm";

export class createOauth2Middleware1561200781531 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_9949557d0e1b2c19e5344c171e` ON `access_token`");
        await queryRunner.query("ALTER TABLE `access_token` ADD CONSTRAINT `FK_9949557d0e1b2c19e5344c171e9` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `access_token` DROP FOREIGN KEY `FK_9949557d0e1b2c19e5344c171e9`");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_9949557d0e1b2c19e5344c171e` ON `access_token` (`userId`)");
    }

}
