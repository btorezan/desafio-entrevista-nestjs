import { ParkingLot } from 'src/parking-lot/entities/parking-lot.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Parking {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => ParkingLot, (parkingLot) => parkingLot.parking)
  parkingLot: ParkingLot;
  @ManyToOne(() => Vehicle, (vehicle) => vehicle.parking)
  @JoinColumn()
  vehicle: Vehicle;
  @Column()
  dateTimeEntry: Date;
  @Column()
  dateTimeExit: Date;
}
