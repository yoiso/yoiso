import * as crypto from 'crypto';
import { BeforeInsert, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  email: string;

  @Column({
    type: 'text',
    nullable: true
  })
  phone: string;

  @Column('text')
  password: string;

  @Column({
    type: 'boolean',
    default: false
  })
  isVerified: boolean;

  @Column({
    type: 'timestamp',
    nullable: true
  })
  dateCreated: Date;

  @Column({
    type: 'timestamp',
    nullable: true
  })
  dateUpdated?: Date;

  @Column({
    type: 'timestamp',
    nullable: true
  })
  dateDeleted: Date;

  @BeforeInsert()
  hashPassword() {
    const hashedPassword = crypto.pbkdf2Sync(this.password, 'salt', 100000, 512, 'sha512')
    this.password = hashedPassword.toString('base64');

    this.dateCreated = new Date();
  }
}
