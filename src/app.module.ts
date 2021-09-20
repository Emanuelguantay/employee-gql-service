import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [EmployeeModule, GraphQLModule.forRoot(
    {autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),}
  ),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      
      username: 'root',
      password: null,
      database: 'employee',
      //entities: ["**/*.entity*{.ts, .js}"],
      entities: ["dist/**/**.entity{.ts,.js}"],
      synchronize: true,
    })
],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
