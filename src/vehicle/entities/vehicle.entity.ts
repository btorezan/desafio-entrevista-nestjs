import { Company } from 'src/company/entities/company.entity';
import { VechicleType } from 'src/enums/vehicletype.enum';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  brand: string;
  @Column()
  model: string;
  @ManyToOne(() => Company, (company) => company.vehicles)
  company: Company;
  @Column()
  color: string;
  @Column()
  plate: string;
  @Column()
  type: VechicleType.car | VechicleType.moto;
}
