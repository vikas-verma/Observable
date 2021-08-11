
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';



@Injectable()
export class EmployeeService {

    private listEmployees: Employee[] = [
        { age: 35, name: 'Summar' },
        { age: 40, name: 'Mark' },
        { age: 23, name: 'David' },
        { age: 35, name: 'John' },
    ];

    getEmployees(): Observable<Employee[]> {
        return of(this.listEmployees);
    }
}

export interface Employee {
    name: string;
    age: number;
}