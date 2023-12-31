import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";
  constructor(private httpClient: HttpClient) { }


  getEmployeesList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseURL);
  }

  createEmployee(employee: Employee): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  updateEmployee(employee: Employee): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,employee);
} 

 getEmployeeById(id: any): Observable<Employee>{
   return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
 }

 deleteEmployee(id:any): Observable<object>{
 return this.httpClient.delete(`${this.baseURL}/${id}`);
}
}

