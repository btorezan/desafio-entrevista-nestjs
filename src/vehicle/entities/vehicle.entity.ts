import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  brand: string;
  @Column()
  model: string;
  @Column()
  color: string;
  @Column()
  plate: string;
  @Column()
  type: string;
}
