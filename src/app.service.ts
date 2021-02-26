import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectConnection()
    private readonly connection: Connection,
  ) {}

  async getHello(): Promise<string> {
    try {
      await this.connection.query('SELECT 1+1;');
      return 'Hello World!';
    } catch (error) {
      throw new InternalServerErrorException(
        `Something went wrong! ${error.message}`,
      );
    }
  }
}
