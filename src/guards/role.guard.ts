import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      throw new UnauthorizedException('Missing Authorization header');
    }

    const token = authHeader.split(' ')[1]; // Bearer TOKEN
    const adminToken = this.configService.get<string>('ADMIN_TOKEN');

    if (token !== adminToken) {
      throw new UnauthorizedException('Invalid admin token');
    }

    return true;
  }
}
