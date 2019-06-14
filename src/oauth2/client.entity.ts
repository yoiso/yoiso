import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Client {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', unique: true})
  client_id: string;

  @Column('text')
  client_secret: string;
}
