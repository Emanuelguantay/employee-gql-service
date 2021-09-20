import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {

    constructor(@InjectRepository(Employee) private EmployeeRepository: Repository<Employee>){
        
    }

    async findAll(): Promise<Employee[]>{
        return this.EmployeeRepository.find();
    }
}
