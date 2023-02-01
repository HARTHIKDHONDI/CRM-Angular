import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegService {

  readonly APIUrl="https://localhost:7188/api"

  constructor(private _http:HttpClient) { }

  getRegister():Observable<any[]>{
    return this._http.get<any>(this.APIUrl+"/Registration/GetAlldata")
  }

  insertRegister(val:any){
    return this._http.post(this.APIUrl+"/Registration/Insert",val)
  }

  updateRegister(val:any){
    return this._http.put(this.APIUrl+"/Registration/update",val)
  }

  deleteRegister(val:any){
    return this._http.delete(this.APIUrl+"/Registration/Delete?recordid="+val)
  }

}
