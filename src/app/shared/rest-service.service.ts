import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Doctor } from './doctor';
import { Observable } from 'rxjs/internal/Observable';
import { Specialization } from './specialization.model';
import { Surgery } from './surgery.model';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private objHttp:HttpClient) { }

  dData:Doctor=new Doctor();
  sData:Specialization=new Specialization();
  SurgeryData:Surgery=new Surgery();
  getDoctorsBySpecialization(specializationCode: string): Observable<Doctor[]> {
    const url = `${this.apiUrl2}/Doctors?specializationCode=${specializationCode}`;
    return this.objHttp.get<Doctor[]>(url);}

  readonly apiUrl='http://localhost:5095/api/Doctors';
  readonly apiUrl2='http://localhost:5095/api/specializations';
  readonly apiUrl3='http://localhost:5095/api/doctorspecializations';
  readonly apiUrl4='http://localhost:5095/api/Surgeries';

  dList:Doctor[];
  specializationList:Specialization[];
  surgeryList:Surgery[];
  

  addDoctor()

  {
    return this.objHttp.post(this.apiUrl,this.dData);
  }

  editDoctorDetails()
  {
    return this.objHttp.put(this.apiUrl+'/'+this.dData.DoctorId,this.dData);
  }

  deleteDoctor(id)
  {
    return this.objHttp.delete(this.apiUrl+'/'+id);
  }

  getDoctors(){
    this.objHttp.get(this.apiUrl).toPromise().then(res=>this.dList=res as Doctor[]);
  }

  getDoctorById(id:number):Observable<any>{
    return this.objHttp.get<any>(this.apiUrl+'/'+id);
  }

  specialization_List(){

    this.objHttp.get(this.apiUrl2).toPromise().then(res=>this.specializationList=res as Specialization[]);

  }

  getTodaySurgery()

  {

    return this.objHttp.get(this.apiUrl4).toPromise().then(res=>this.surgeryList=res as Surgery[]);

   

   

  }

  editSurgeryTime()

 

  {

 

    return this.objHttp.put(this.apiUrl4+'/'+this.SurgeryData.SurgeryId,this.SurgeryData);

 

  }

  getSurgeryById(id:number):Observable<any>{

 

    return this.objHttp.get<any>(this.apiUrl4+'/'+id);

 

  }


}
