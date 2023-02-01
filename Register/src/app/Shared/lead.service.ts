import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { APImainService } from './apimain.service';
@Injectable({
  providedIn: 'root'
})
export class LeadService {

 
  constructor(private _http:HttpClient,private ApiService:APImainService) { }
  readonly APIUrl=this.ApiService.APIUrlmain;
  GetAllData():Observable<any[]>{
 return this._http.get<any>(this.APIUrl+"/Lead/GetAllData");
 
 
}
addLead(val:any){
  return this._http.post(this.APIUrl+"/Lead/AddLead",val)
}

updatelead(val:any){
  return this._http.put(this.APIUrl+"/Lead/updateLeads",val)
}

deletelead(val:any){
  return this._http.delete(this.APIUrl+"/Lead/DeleteLeads?leadid="+val)
}
}
