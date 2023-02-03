import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { APImainService } from './apimain.service';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

 

  constructor(private _http:HttpClient,private ApiService:APImainService) { }
  readonly APIUrl=this.ApiService.APIUrlmain;
  getdata():Observable<any[]>
  {
    return this._http.get<any>(this.APIUrl+"/Notes");
  }

  addNotes(val:any){
    return this._http.post(this.APIUrl+"/Notes/Insert",val)
  }

  updateNotes(val:any){
    return this._http.put(this.APIUrl+"/Notes/Update",val)
  }

  deleteNotes(val:any){
    return this._http.delete(this.APIUrl+"/Notes/Delete?Sno="+val)}
}

