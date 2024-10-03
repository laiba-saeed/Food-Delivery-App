/* Business Logic */ 
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/user.dto';
import { PrismaService } from '../../../prisma/PrismaService';
@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService, 
    private readonly configService: ConfigService,
  ) {}

  // Register User
  async register (registerDto: RegisterDto) {
    const { name, email, password } = registerDto;
    const user = {
      name, 
      email,
      password,
    }
    return user;
  }

  // Login User
  async login (loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = {
      email,
      password,
    }
    return user;
  }

  // Get all Users service
  async getUsers() {
    return this.prisma.user.findMany({});
  }
}
