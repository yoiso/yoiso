import {MigrationInterface, QueryRunner} from "typeorm";

export class createAccountVerificationTable1561015030859 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `account_verification` (`id` int NOT NULL AUTO_INCREMENT, `code` text NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `account_verification`");
    }

}
