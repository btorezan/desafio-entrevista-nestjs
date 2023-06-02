import { ParkingLot } from 'src/parking-lot/entities/parking-lot.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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
  phone: string;
  @Column()
  motorcycleSpots: number;
  @Column()
  carSpots: number;
  @OneToOne(() => ParkingLot, (parkingLot) => parkingLot.company)
  parkingLot: ParkingLot;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
