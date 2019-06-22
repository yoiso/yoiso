import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class AccessToken {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  access_token: string;

  @OneToOne(type => User)
  @JoinColumn()
  user: User;
}
