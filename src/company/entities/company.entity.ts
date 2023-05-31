import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  cnpj: string;
  @Column()
  address: string;
  @Column()
  tel: string;
  @Column()
  motorcycleSpaces: number;
  @Column()
  carSpaces: number;
}
