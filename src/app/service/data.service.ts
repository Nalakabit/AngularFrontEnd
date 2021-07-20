import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/employees');
  }

  insertData(data: Employee){
    return this.httpClient.post('http://127.0.0.1:8000/api/addemployees', data);
  }

  deleteData(id: string) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteemployees/'+id);
  }

  getEmployeeById(id: string){
    return this.httpClient.get('http://127.0.0.1:8000/api/employee'+id);
  }

  updateData(id: string, data: any){
    return this.httpClient.put('http://127.0.0.1:8000/api/updatemployees/'+id, data);
  }
}
