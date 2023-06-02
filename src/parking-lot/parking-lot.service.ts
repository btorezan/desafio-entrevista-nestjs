import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateParkingLotDto } from './dto/create-parking-lot.dto';
import { UpdateParkingLotDto } from './dto/update-parking-lot.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingLot } from './entities/parking-lot.entity';
import { Repository } from 'typeorm';
import { Role } from 'src/enums/roles.enum';

@Injectable()
@Role('admin')
export class ParkingLotService {
  constructor(
    @InjectRepository(ParkingLot)
    private readonly parkingLotRepository: Repository<ParkingLot>,
  ) {}

  async create(createParkingLotDto: CreateParkingLotDto) {
    const { company, carSpots, motorcycleSpots } = createParkingLotDto;
    const parkingLot = this.parkingLotRepository.create({
      company,
      carSpots: carSpots,
      motorcycleSpots: motorcycleSpots,
    });
    return await this.parkingLotRepository.save(parkingLot);
  }

  findOne(id: number) {
    try {
      const parkingLot = this.parkingLotRepository
        .createQueryBuilder('parkingLot')
        .leftJoinAndSelect('parkingLot.company', 'company')
        .leftJoinAndSelect('parkingLot.parking', 'parking')
        .where('parkingLot.id = :id', { id });

      if (!parkingLot) {
        throw new NotFoundException();
      }
      return parkingLot;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  update(id: number, updateParkingLotDto: UpdateParkingLotDto) {
    return this.parkingLotRepository.update(id, updateParkingLotDto);
  }

  async remove(id: number) {
    return this.parkingLotRepository.softDelete(id);
  }
}
