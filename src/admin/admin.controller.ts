import { Controller, Post, Body } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // Create admin (one-time use)
  @Post('create')
  async createAdmin(@Body() body: { username: string; password: string }) {
    return this.adminService.createAdmin(body.username, body.password);
  }
}
