import { Injectable } from '@nestjs/common';
import { CreateParkingDto } from './dto/create-parking.dto';
import { UpdateParkingDto } from './dto/update-parking.dto';
import { VehicleService } from 'src/vehicle/vehicle.service';
import { ParkingLotService } from 'src/parking-lot/parking-lot.service';

@Injectable()
export class ParkingService {
  constructor(
    private readonly parkingRepository: Repository<Parking>,
    private readonly vehicleService: VehicleService,
    private readonly parkingLotService: ParkingLotService,
  ) { }
  
  registryEntry(entryDto:E  ){}
}
