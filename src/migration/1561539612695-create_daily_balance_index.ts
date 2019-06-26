import {MigrationInterface, QueryRunner} from "typeorm";

export class createDailyBalanceIndex1561539612695 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE INDEX `IDX_d6250a4222f475016bba5944e1` ON `daily_balance` (`date`)");
        await queryRunner.query("CREATE INDEX `IDX_91e75ed61bb07ebda3912510f2` ON `daily_balance` (`userId`)");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_91e75ed61bb07ebda3912510f2` ON `daily_balance`");
        await queryRunner.query("DROP INDEX `IDX_d6250a4222f475016bba5944e1` ON `daily_balance`");
    }

}
