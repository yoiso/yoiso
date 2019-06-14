import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, EntityManager } from 'typeorm';
import { Repository } from 'typeorm';
import { User } from './user/user.entity';

@Injectable()
export class AppService {
  constructor(private readonly conn: Connection) {}

  getHello() {
    const newUser = new User();
    newUser.name = 'dwi';
    newUser.password = 'asdzxc';
    newUser.email = 'dwipurnomo.yk@gmail.com';
    newUser.phone = '09876544';
    newUser.isVerified = false;
    this.conn.manager
            .save(newUser)
            .then(photo => {
                console.log("Photo has been saved. Photo id is", photo.id);
            })
            .catch(err => console.log(err));
    return newUser;
  }
}
