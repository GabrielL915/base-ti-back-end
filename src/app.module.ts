import { Module } from '@nestjs/common';
import { UsersModule } from '@app/domain/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
