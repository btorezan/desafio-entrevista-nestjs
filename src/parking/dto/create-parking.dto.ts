import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { VechicleType } from 'src/enums/vehicletype.enum';
import { DeepPartial } from 'typeorm';

export class CreateParkingDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
  @IsString()
  @IsNotEmpty()
  vehicleId: number;
  @IsString()
  @IsNotEmpty()
  vehicleType: DeepPartial<VechicleType>;
}
