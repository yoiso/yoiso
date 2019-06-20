import * as crypto from 'crypto';
import {
  BeforeInsert, Entity, Column,
  PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class AccountVerification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  code: string;

  @OneToOne(type => User)
  @JoinColumn()
  user: User;

  @BeforeInsert()
  generateToken() {
    this.code = crypto.randomBytes(16).toString('hex');
  }
}
