import {MigrationInterface, QueryRunner} from "typeorm";

export class changeDefaultValueOnIsVerified1560422912373 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `isVerified` `isVerified` tinyint NOT NULL DEFAULT 0");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `isVerified` `isVerified` tinyint NOT NULL");
    }

}
