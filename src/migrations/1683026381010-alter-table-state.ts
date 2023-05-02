import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableState1683026381010 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        ALTER TABLE state
            add uf varchar(2) NOT NULL
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        ALTER TABLE state
            DROP uf
    `);
  }
}
