import { Module } from '@nestjs/common';
import { PrismaClientModule } from 'src/libs/prisma-client/src';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  imports: [PrismaClientModule],
})
export class UsersModule {}
