import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum BalanceType {
  DEBIT = 'debit',
  CREDIT = 'credit'
}

@Entity()
export class DailyBalance {

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('text')
  account: string;

  @Column('text')
  amount: string;

  @Column({
    type: 'enum',
    enum: BalanceType
  })
  type: BalanceType;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  date: Date;
}
