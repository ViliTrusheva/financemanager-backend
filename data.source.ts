import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

const dbConfig: TypeOrmModuleOptions & DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  // @ts-expect-error ignore
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  autoLoadEntities: true,
  synchronize: false, // Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/src/migrations/*{.ts,.js}'],
};

const AppDataSource = new DataSource(dbConfig);

export { dbConfig, AppDataSource };
