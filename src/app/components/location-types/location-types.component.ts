import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheckPointsService } from 'src/app/check-points.service';

interface selectedLocationType {
  index: number;
  locationType: string;
}

@Component({
  selector: 'app-location-types',
  templateUrl: './location-types.component.html',
  styleUrls: ['./location-types.component.scss'],
})
export class LocationTypesComponent implements OnInit {
  constructor(private checkPointsService: CheckPointsService) {}

  locationTypes: string[] = [];
  selectedPackageInd!: number;
  selectedLocationInd: number = -1;

  ngOnInit(): void {
    this.checkPointsService.selectedPackage.subscribe((val) => {
      this.selectedPackageInd = val.index;

      this.locationTypes = this.checkPointsService.getLocationTypes();
      this.selectedLocationInd=-1;
      this.checkPointsService.resetLocationType()
    });
    this.checkPointsService.selectedActivity.subscribe((val) => {
      //this.selectedPackageInd = val.index;
      this.selectedPackageInd=-1;
      this.locationTypes = this.checkPointsService.getLocationTypes();
      this.selectedLocationInd=-1;
      this.checkPointsService.resetLocationType();
    });
  }

  selectLocationType(location: string, index: number) {
    this.selectedLocationInd = index;

    // this.selectedLocationType = {
    //   index: index,
    //   locationType: location,
    // };

    // this.selectedLocationTypeChange.emit(this.selectedLocationType);

    this.checkPointsService.selectLocationType(index, location);
  }
}
