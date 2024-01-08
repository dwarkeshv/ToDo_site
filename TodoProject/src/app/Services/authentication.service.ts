import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';



const httpOptions =
{
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  serverUrl="https://freeapi.miniprojectideas.com"
  constructor(private http : HttpClient) { }

  // https://freeapi.miniprojectideas.com/api/User/GetAllBooking
  
  getTasks():Observable<any>
  {
    return this.http.get<any>(this.serverUrl + '/api/User/GetAllBooking');
  }

}
