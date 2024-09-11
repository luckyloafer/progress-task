import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheckPointsService } from 'src/app/check-points.service';

interface selectedLocationType {
  index: number;
  locationType: string;
}

interface locationType{
  locationTypeId:string
  locationType:string;
}

@Component({
  selector: 'app-location-types',
  templateUrl: './location-types.component.html',
  styleUrls: ['./location-types.component.scss'],
})
export class LocationTypesComponent implements OnInit {
  constructor(private checkPointsService: CheckPointsService) {}

  locationTypes!:locationType[]
  selectedPackageInd!: number;
  selectedLocationInd: number = -1;
  searchTerm: string = '';
  filteredLocationTypes!:locationType[]

  ngOnInit(): void {
    this.checkPointsService.selectedPackage.subscribe((val) => {
      this.selectedPackageInd = val.index;
      console.log(this.checkPointsService.getActivity().activity)
      this.locationTypes = this.checkPointsService.getLocationTypes();
      this.filteredLocationTypes = this.locationTypes
      this.selectedLocationInd=-1;
      this.checkPointsService.resetLocationType()
    });
    this.checkPointsService.selectedActivity.subscribe((val) => {
      //this.selectedPackageInd = val.index;
      this.selectedPackageInd=-1;
      this.locationTypes = this.checkPointsService.getLocationTypes();
      this.filteredLocationTypes = this.locationTypes;
      this.selectedLocationInd=-1;
      this.checkPointsService.resetLocationType();
    });
  }

  filterLocationTypes(){
    if(this.searchTerm){
      //this.filteredLocationTypes = this.checkPointsService.getFilteredPackages(this.searchTerm);
      this.filteredLocationTypes = this.checkPointsService.getFilteredLocationTypes(this.searchTerm)
    }
    else{
      this.filteredLocationTypes = this.locationTypes
    }
  }
  onSearchTermChange(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.filterLocationTypes();
    this.checkPointsService.resetLocationType();
    //this.selectedPackageIndex=-1;
    this.selectedLocationInd=-1
  }

  selectLocationType(location: string, index: number,locationTypeId:string) {
    this.selectedLocationInd = index;

    // this.selectedLocationType = {
    //   index: index,
    //   locationType: location,
    // };

    // this.selectedLocationTypeChange.emit(this.selectedLocationType);

    this.checkPointsService.selectLocationType(index, location,locationTypeId);
  }
}
