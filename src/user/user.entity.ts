import * as bcrypt from 'bcrypt';
import {
  BeforeInsert, Entity,
  Column, PrimaryGeneratedColumn, OneToMany
} from 'typeorm';
import { DailyBalance } from '../daily-balance/daily-balance.entity';

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

  @OneToMany(type => DailyBalance, dailyBalance => dailyBalance.user)
  dailyBalances: DailyBalance[];

  @BeforeInsert()
  hashPassword() {
    const hashedPassword = bcrypt.hashSync(this.password, 10);
    this.password = hashedPassword;

    this.dateCreated = new Date();
  }

}
