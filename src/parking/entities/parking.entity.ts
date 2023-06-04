import { VechicleType } from 'src/enums/vehicletype.enum';
import { ParkingLot } from 'src/parking-lot/entities/parking-lot.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Parking {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => ParkingLot, (parkingLot) => parkingLot.parking)
  parkingLot: ParkingLot;
  @ManyToOne(() => Vehicle, (vehicle) => vehicle.parking)
  vehicle: Vehicle;
  @Column()
  vehicleType: VechicleType.car | VechicleType.moto;
  @Column()
  dateTimeEntry: Date;
  @Column({ default: null })
  dateTimeExit: Date;
}
