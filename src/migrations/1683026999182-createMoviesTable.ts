import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMoviesTable1683026999182 implements MigrationInterface {
    name = 'CreateMoviesTable1683026999182'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "description" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "description" SET NOT NULL`);
    }

}
