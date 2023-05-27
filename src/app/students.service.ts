import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }

// get all recorrds

getAll():Observable<Students[]>{
   return this.http.get<Students[]>("http://localhost:3000/Students")
}

//add records
create(payload:Students):Observable<Students>{
  return this.http.post<Students>("http://localhost:3000/Students",payload)
}

//get records by id
getbyid(id:number):Observable<Students>{
 return this.http.get<Students>(`http://localhost:3000/Students/${id}`)
}

//update Records

update(payload:Students):Observable<Students>{
  return this.http.put<Students>(`http://localhost:3000/Students/${payload.id}`
  ,payload)
}

//Delete records
delete(id:number){
  return this.http.delete(`http://localhost:3000/Students/${id}`)
}

}


