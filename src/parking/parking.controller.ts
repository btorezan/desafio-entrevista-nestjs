import { Controller, Post, Body, Param, Put } from '@nestjs/common';
import { ParkingService } from './parking.service';
import { CreateParkingDto } from './dto/create-parking.dto';

@Controller('parking')
export class ParkingController {
  constructor(private readonly parkingService: ParkingService) {}

  @Post('/entry')
  entry(@Body() createParkingDto: CreateParkingDto) {
    return this.parkingService.registryEntry(createParkingDto);
  }

  @Put('/exit/:id')
  exit(@Param('id') id: string) {
    return this.parkingService.registryExit(id);
  }
}
