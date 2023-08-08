import { Module } from '@nestjs/common';
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
