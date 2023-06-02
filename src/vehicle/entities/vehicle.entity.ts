import { Company } from 'src/company/entities/company.entity';
import { Parking } from 'src/parking/entities/parking.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  brand: string;
  @Column()
  model: string;
  @ManyToOne(() => Company, (company) => company.vehicles)
  @JoinColumn()
  company: Company;
  @OneToMany(() => Parking, (parking) => parking.vehicle)
  @JoinColumn()
  parking: Parking[];
  @Column()
  color: string;
  @Column()
  plate: string;
  @Column()
  type: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
