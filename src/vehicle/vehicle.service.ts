import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { Repository } from 'typeorm';
import { CompanyService } from 'src/company/company.service';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
    private companyService: CompanyService,
  ) {}

  async create(createVehicleDto: CreateVehicleDto) {
    const { companyId, brand, color, model, plate, type } = createVehicleDto;
    const company = await this.companyService.findOne(companyId);
    const vehicle = this.vehicleRepository.create({
      company,
      brand,
      color,
      model,
      plate,
      type,
    });
    return this.vehicleRepository.save(vehicle);
  }

  findAll(): Promise<Vehicle[]> {
    return this.vehicleRepository.find();
  }

  findOne(id: number) {
    try {
      const vehicle = this.vehicleRepository
        .createQueryBuilder('vehicle')
        .leftJoinAndSelect('vehicle.company', 'company')
        .leftJoinAndSelect('vehicle.parkingEvents', 'parkingEvent')
        .where('vehicle.id = :id', { id })
        .getOne();

      if (!vehicle) {
        throw new NotFoundException();
      }
    } catch (error) {}
  }

  findOneByPlate(plate: string): Promise<Vehicle | null> {
    return this.vehicleRepository.findOneBy({
      plate: plate,
    });
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return this.vehicleRepository.update(id, updateVehicleDto);
  }

  async remove(id: number): Promise<void> {
    await this.vehicleRepository.delete(id);
  }
}
