import { Module } from '@nestjs/common';
import { UsersModule } from '@app/domain/users/users.module';
import { KnexModule } from 'nest-knexjs';

@Module({
  imports: [
    UsersModule,
    KnexModule.forRoot({
      config: {
        client: 'postgresql',
        useNullAsDefault: true,
        connection: {
          host: 'localhost',
          port: 5432,
          user: 'pguser',
          password: 'pgpassword',
          database: 'nestjs',
        } /* 
        connection: {
          connectionString:
            '',
          ssl: { rejectUnauthorized: false },
          host: '',
          port: 5432,
          user: '',
          database: '',
          password:
            '',
        },
 */,
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
