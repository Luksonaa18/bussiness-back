import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin, AdminDocument } from '../schema/admin.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
  ) {}
  async createAdmin(username: string, password: string): Promise<Admin> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new this.adminModel({ username, password: hashedPassword });
    return admin.save();
  }
  async validateAdmin(username: string, password: string): Promise<boolean> {
    const admin = await this.adminModel.findOne({ username }).exec();
    if (!admin) return false;
    return bcrypt.compare(password, admin.password);
  }
}
