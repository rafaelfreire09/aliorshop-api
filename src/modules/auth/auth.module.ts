import { Module } from '@nestjs/common';
import { PrismaClientModule } from 'src/libs/prisma-client/src';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { UsersService } from '../users';
import { UsersRepository } from '../users/users.repository';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UsersService, UsersRepository],
  imports: [PrismaClientModule],
})
export class AuthModule {}
