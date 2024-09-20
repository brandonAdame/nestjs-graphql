import { Injectable } from '@nestjs/common';
import PocketBase, { ClientResponseError, RecordAuthResponse } from 'pocketbase';

@Injectable()
export class UsersService {
  private pb: PocketBase;

  constructor() {
    this.pb = new PocketBase('http://127.0.0.1:8090');
  }

  async authenticateAppUser(email: string, pwd: string): Promise<String | ClientResponseError> {
    return await this.pb
      .collection('users')
      .authWithPassword(email, pwd)
      .then((resp) => {
        console.log('authData :>> ', resp);
        return resp.token;
      })
      .catch((err: ClientResponseError) => {
        console.error('error :>> ', err.toJSON());
        return err;
      });
  }
}
