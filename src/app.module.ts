/* import { Module } from '@nestjs/common';
import { UsersModule } from '@app/domain/users/users.module';
import { KnexModule } from 'nest-knexjs';

@Module({
  imports: [
    UsersModule,
    KnexModule.forRoot({
      config: {
        client: 'postgres',
        useNullAsDefault: true,
        connection: {
          host: 'localhost',
          port: 5432,
          user: 'pguser',
          password: 'pgpassword',

          database: 'nestjs',
        },
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
 */

import { Module } from '@nestjs/common';
import { UsersModule } from '@app/domain/users/users.module';
import { KnexModule } from 'nest-knexjs';

@Module({
  imports: [
    UsersModule,
    KnexModule.forRoot({
      config: {
        client: 'pg',
        useNullAsDefault: true,
        connection: {
          connectionString:
            'postgresql://postgres:65tl3WjVUbNjvl9d8tUh@containers-us-west-72.railway.app:6418/railway',
          host: 'containers-us-west-72.railway.app',
          port: 6418,
          user: 'postgres',
          database: 'railway',
          password: '65tl3WjVUbNjvl9d8tUh',
        },
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}