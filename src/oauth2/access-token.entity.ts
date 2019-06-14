import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class AccessToken {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  access_token: string;

  @Column()
  user_id: number;
}
