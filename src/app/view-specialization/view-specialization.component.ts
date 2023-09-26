import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../shared/rest-service.service';
import { Doctor } from '../shared/doctor';

@Component({
  selector: 'app-view-specialization',
  templateUrl: './view-specialization.component.html',
  styleUrls: ['./view-specialization.component.css']
})
export class ViewSpecializationComponent implements OnInit  {
  displayedDoctors: Doctor[] = [];
  constructor(public serv:RestServiceService){}
  ngOnInit(): void {
    this.serv.specialization_List();
  }

  onViewDoctors(specializationCode: string) {
    // Call the specialization service to fetch doctors by specializationCode
    this.serv.getDoctorsBySpecialization(specializationCode)
      .subscribe(doctors => {
        this.displayedDoctors = doctors;
      });
  }
}


