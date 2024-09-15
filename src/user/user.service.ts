import { Injectable } from '@nestjs/common';
import { NewUserInput } from './NewUserInput.dto.js';
import { User } from './user.model.js';
import PocketBase from 'pocketbase';

@Injectable()
export class UserService {
  private pb: PocketBase;

  constructor() {
    this.pb = new PocketBase('http://127.0.0.1:8090');
  }

  async deleteRecordById(id: string) {
    return await this.pb.collection('user').delete(id);
  }

  async deleteAllRecords(): Promise<boolean> {
    const records = await this.pb.collection('user').getFullList<User>();

    for (const record of records) {
      await this.pb.collection('user').delete(record.id);
    }
    return true;
  }

  async findOneById(id: string): Promise<User> {
    return await this.pb.collection('user').getOne(id);
  }

  async addNewUser(user: NewUserInput): Promise<User> {
    const newUser = {
      firstname: user.firstname,
      lastname: user.lastname,
      age: user.age,
      createdDate: new Date().toISOString(),
    };
    const record = await this.pb.collection('user').create<User>(newUser);

    return record;
  }

  async findAllUsers(): Promise<User[]> {
    return await this.pb.collection('user').getFullList<User>();
  }
}
