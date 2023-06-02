import { VechicleType } from 'src/enums/vehicletype.enum';
import { ParkingLot } from 'src/parking-lot/entities/parking-lot.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Parking {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => ParkingLot, (parkingLot) => parkingLot.parking)
  parkingLot: ParkingLot;
  @Column()
  vehicle: VechicleType.car | VechicleType.moto;
  @Column()
  dateTimeEntry: Date;
  @Column()
  dateTimeExit: Date;
}