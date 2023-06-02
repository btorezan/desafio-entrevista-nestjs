import { Injectable } from '@nestjs/common';
import { CreateParkingDto } from './dto/create-parking.dto';
import { UpdateParkingDto } from './dto/update-parking.dto';
import { VehicleService } from 'src/vehicle/vehicle.service';
import { ParkingLotService } from 'src/parking-lot/parking-lot.service';
import { Repository } from 'typeorm';
import { Parking } from './entities/parking.entity';

@Injectable()
export class ParkingService {
  constructor(
    private readonly parkingRepository: Repository<Parking>,
    private readonly vehicleService: VehicleService,
    private readonly parkingLotService: ParkingLotService,
  ) {}

  async registryEntry(createParkingDto: CreateParkingDto) {
    try {
      const { vehicleId, parkingLotId, vehicleType } = createParkingDto;
      const vehicle = await this.vehicleService.findOne(+vehicleId);
      const parkingLot = this.parkingLotService.findOne(+parkingLotId);

      const entry = this.parkingRepository.create({
        vehicle,
        parkingLot,
        vehicleType,
        dateTimeEntry: new Date(),
      });
      return this.parkingRepository.save(entry);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async registryExit(id: string) {
    const exit = await this.parkingRepository.findOneByOrFail({ id: +id });
  }
}
