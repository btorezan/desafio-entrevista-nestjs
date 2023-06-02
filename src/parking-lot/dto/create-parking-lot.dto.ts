import { Type } from 'class-transformer';
import {
  IsDefined,
  IsInt,
  IsNotEmptyObject,
  Min,
  ValidateNested,
} from 'class-validator';
import { Company } from 'src/company/entities/company.entity';

export class CreateParkingLotDto {
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Company)
  company: Company;

  @IsInt()
  @Min(0)
  @IsDefined()
  carSpots: number;

  @IsInt()
  @Min(0)
  @IsDefined()
  motorcycleSpots: number;
}
