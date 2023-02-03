import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import{HttpClient} from '@angular/common/http';
import { APImainService } from './apimain.service';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http:HttpClient,private ApiService:APImainService) {}
  readonly APIUrl=this.ApiService.APIUrlmain;
  

  get():Observable<any>
  {
    return this.http.get(this.APIUrl+"/Contacts/GetContactList");

  }
 
addcontacts(val:any)
{
  return this.http.post(this.APIUrl+"/Contacts/Addcontact",val)
}
updatecontacts(val:any){
  return this.http.put(this.APIUrl+"/Contacts/Updatecontact",val)
}

deletecontacts(val:any){
  return this.http.delete(this.APIUrl+"/Contacts/Deletecontact?id="+val)
}
}
