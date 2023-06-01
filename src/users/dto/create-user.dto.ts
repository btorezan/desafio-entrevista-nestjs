import { IsNotEmpty, IsString } from 'class-validator';
import { Role } from 'src/enums/roles.enum';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  email: string;
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsNotEmpty()
  @IsString()
  role: Role;
}
