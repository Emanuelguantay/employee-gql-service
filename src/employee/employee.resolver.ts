import { Resolver, Query } from '@nestjs/graphql';
import { query } from 'express';
import { Employee } from './entities/employee.entity';

@Resolver(()=> Employee)
export class EmployeeResolver {

    @Query(()=> Employee)
    findAll(){
        
    }
}
