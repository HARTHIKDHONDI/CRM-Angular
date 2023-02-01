import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LeadService {

  readonly APIURL="https://localhost:7046/api"
  constructor(private _http:HttpClient) { }

  GetAllData():Observable<any[]>{
 return this._http.get<any>(this.APIURL+"/Lead/GetAllData");
 
 
}
addLead(val:any){
  return this._http.post(this.APIURL+"/Lead/AddLead",val)
}

updatelead(val:any){
  return this._http.put(this.APIURL+"/Lead/updateLeads",val)
}

deletelead(val:any){
  return this._http.delete(this.APIURL+"/Lead/DeleteLeads?leadid="+val)
}
}
