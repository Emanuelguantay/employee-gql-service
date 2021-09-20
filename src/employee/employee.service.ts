import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { EmployeeCreateDTO } from './dto/crete-employee.input';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {

    constructor(@InjectRepository(Employee) private EmployeeRepository: Repository<Employee>){
        
    }

    async findAll(): Promise<Employee[]>{
        return this.EmployeeRepository.find();
        // let emp: Employee = new Employee()
        // emp.id = "1",
        // emp.firstName = "Emanuel"
        // emp.lastName = "Guantay",
        // emp.designation = "Developer"
        // return [emp]
    }

    async create(employee: EmployeeCreateDTO): Promise<Employee>{
        let emp = this.EmployeeRepository.create(employee);
        return this.EmployeeRepository.save(emp);
    }
}
