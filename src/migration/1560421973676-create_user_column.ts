import {MigrationInterface, QueryRunner} from "typeorm";

export class createUserColumn1560421973676 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` text NOT NULL, `email` text NOT NULL, `phone` text NULL, `password` text NOT NULL, `isVerified` tinyint NOT NULL, `dateCreated` timestamp NULL, `dateUpdated` timestamp NULL, `dateDeleted` timestamp NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `user`");
    }

}
