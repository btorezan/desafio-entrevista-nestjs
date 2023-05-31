import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly cnpj: string;
  @IsString()
  @IsNotEmpty()
  readonly address: string;
  @IsString()
  @IsNotEmpty()
  readonly tel: string;
  @IsNumber()
  @IsNotEmpty()
  readonly motorcycleSpaces: number;
  @IsNumber()
  @IsNotEmpty()
  readonly carSpaces: number;
}
