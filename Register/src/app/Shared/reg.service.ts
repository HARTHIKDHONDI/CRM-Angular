import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APImainService } from './apimain.service';
@Injectable({
  providedIn: 'root'
})
export class RegService {

  

  constructor(private _http:HttpClient,private ApiService:APImainService) { }
  readonly APIUrl=this.ApiService.APIUrlmain;

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
