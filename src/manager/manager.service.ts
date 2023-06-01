import { CompanyService } from './../company/company.service';
import { VehicleService } from './../vehicle/vehicle.service';
import { Vehicle } from './../vehicle/entities/vehicle.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ManagerService {
  constructor(
    private vehicleService: VehicleService,
    private companyService: CompanyService,
  ) {}

  parking(plate: string, companyID: number) {
    const company = this.companyService.findOne(companyID);
    const vehicle = this.vehicleService.findOneByPlate(plate);
  }
  leave() {}
}
