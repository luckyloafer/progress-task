import { Component, Input, OnInit } from '@angular/core';
import { CheckPointsService } from 'src/app/check-points.service';
import { Tower } from 'src/app/tower';

interface location {
  locationName: string;
  sublocations: string[];
}

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  constructor(private checkPointsService: CheckPointsService) {}

  locations!: location[];
  tower!:string;
  activity!:string;
  p1!:string;
  p2!:string;
  locationType!:string;

  ngOnInit(): void {
    this.checkPointsService.selectedPackage.subscribe((val) => {
      this.locations = this.checkPointsService.getLocations();
      console.log(this.locations);
    });
    this.checkPointsService.selectedActivity.subscribe((val) => {
      //this.selectedPackageInd = val.index;
      this.locations = this.checkPointsService.getLocations();
    });
    this.checkPointsService.selectedLocationType.subscribe((val) => {
      this.locations = this.checkPointsService.getLocations();
      console.log(this.locations);
    });

    this.tower = this.checkPointsService.getTower().tower;
    this.p1 = this.checkPointsService.getPackage().p1;
    this.p2 = this.checkPointsService.getPackage().p2;
    this.checkPointsService.selectedLocationType.subscribe((val)=>{
      this.locationType = val.locationType;
    })
  }
}
