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
  filteredLocations!:location[]
  tower!:string;
  activity!:string;
  p1!:string;
  p2!:string;
  locationType!:string;
  searchTerm:string=''

  ngOnInit(): void {
    this.checkPointsService.selectedPackage.subscribe((val) => {
      this.locations = this.checkPointsService.getLocations();
      this.filteredLocations = this.locations
      console.log(this.locations);
    });
    this.checkPointsService.selectedActivity.subscribe((val) => {
      //this.selectedPackageInd = val.index;
      this.locations = this.checkPointsService.getLocations();
      this.filteredLocations = this.locations
    });
    this.checkPointsService.selectedLocationType.subscribe((val) => {
      this.locations = this.checkPointsService.getLocations();
      this.filteredLocations = this.locations
      console.log(this.locations);
    });

    this.tower = this.checkPointsService.getTower().tower;
    this.p1 = this.checkPointsService.getPackage().p1;
    this.p2 = this.checkPointsService.getPackage().p2;
    this.checkPointsService.selectedLocationType.subscribe((val)=>{
      this.locationType = val.locationType;
    });

    //this.locations = this.checkPointsService.getLocations();
    
  }

  filterLocationTypes(){
    if(this.searchTerm){
      //this.filteredLocationTypes = this.checkPointsService.getFilteredPackages(this.searchTerm);
      //this.filteredLocationTypes = this.checkPointsService.getFilteredLocationTypes(this.searchTerm)
      //this.filteredLocations = 
      this.filteredLocations=this.checkPointsService.getFilteredLocations(this.searchTerm)
    }
    else{
      this.filteredLocations = this.locations
    }
  }
  onSearchTermChange(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.filterLocationTypes();
    this.checkPointsService.resetLocation();
    //this.selectedPackageIndex=-1;
    //this.selectedLocationInd=-1
  }

}
