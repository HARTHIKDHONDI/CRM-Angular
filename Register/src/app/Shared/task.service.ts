import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import { APImainService } from './apimain.service';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

 
  constructor(private http:HttpClient,private ApiService:APImainService) { }
  readonly APIUrl=this.ApiService.APIUrlmain;
  GetAllData():Observable<any[]>
  {
  return this.http.get<any>(this.APIUrl+"/Task/GetAllData")
  }
  GetDataById ():Observable<any[]>
  {
  return this.http.get<any>(this.APIUrl+"/Task/GetDataById")
  }
  addtask(val:any)
  {
  return this.http.post(this.APIUrl+"/Task/Insert",val)
  }
  updatetask(val:any)
  {
  return this.http.put(this.APIUrl+"/Task/Update",val)
  }  
  deletetask(val:any)
  {
  return this.http.delete(this.APIUrl+"/Task/Delete?taskID="+val)
  }  
}
