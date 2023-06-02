import { Company } from 'src/company/entities/company.entity';
import { Parking } from 'src/parking/entities/parking.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ParkingLot {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToOne(() => Company, (company) => company.parkingLot)
  @JoinColumn()
  company: Company;
  @Column()
  carSpots: number;
  @Column()
  motorcycleSpots: number;
  @OneToMany(() => Parking, (parking) => parking.parkingLot)
  parking: Parking[];
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
