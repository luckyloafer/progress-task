import { Injectable } from '@angular/core';
import { Tower } from './tower';
import { data } from './mock-data';
import { BehaviorSubject } from 'rxjs';
interface selectedData {
  tower: string;
  activity: string;
  loctaionType: string;
  location: string;
}

interface selectedTower {
  index: number;
  tower: string;
}

interface selectedActivity {
  index: number;
  activity: string;
}

interface selectedPackage {
  index: number;
  p1: string;
  p2: string;
}

interface selectedLocationType {
  index: number;
  locationType: string;
}

interface selectedlocation {
  index: number;
  locationName: string;
  sublocations: string[];
}

interface location {
  locationName: string;
  sublocations: string[];
}

@Injectable({
  providedIn: 'root',
})
export class CheckPointsService {
  constructor() {}

  data: Tower[] = data;
  towers: string[] = [];
  selectedData!: selectedData;
  activities: string[] = [];
  packages: string[] = [];
  locationTypes: string[] = [];
  locations: location[] = [];

  private selectedTowerSubject = new BehaviorSubject<selectedTower>({
    index: -1,
    tower: '',
  });
  selectedTower = this.selectedTowerSubject.asObservable();

  private selectedActivitySubject = new BehaviorSubject<selectedActivity>({
    index: -1,
    activity: '',
  });
  selectedActivity = this.selectedActivitySubject.asObservable();

  private selectedPackageSubject = new BehaviorSubject<selectedPackage>({
    index: -1,
    p1: '',
    p2: '',
  });
  selectedPackage = this.selectedPackageSubject.asObservable();

  private selectedLocationTypeSubject =
    new BehaviorSubject<selectedLocationType>({ index: -1, locationType: '' });
  selectedLocationType = this.selectedLocationTypeSubject.asObservable();

  private selectedLocationSubject = new BehaviorSubject<selectedlocation>({
    index: -1,
    locationName: '',
    sublocations: [],
  });
  selectedlocation = this.selectedLocationSubject.asObservable();

  getData() {
    return this.data;
  }

  selectTower(index: number, tower: string) {
    const val = {
      index: index,
      tower: tower,
    };

    this.selectedTowerSubject.next(val);
    //alert(this.selectedTowerSubject.getValue().index)
  }

  getTower() {
    return this.selectedTowerSubject.getValue();
  }
  reserTower() {
    this.selectedTowerSubject.next({ index: -1, tower: '' });
  }
  resetActivity() {
    this.selectedActivitySubject.next({ activity: '', index: -1 });
  }
  resetPackage() {
    this.selectedPackageSubject.next({ index: -1, p1: '', p2: '' });
  }
  resetLocationType() {
    this.selectedLocationTypeSubject.next({ index: -1, locationType: '' });
  }
  resetLocation() {
    this.selectedLocationSubject.next({
      index: -1,
      locationName: '',
      sublocations: [],
    });
  }

  getActivity() {
    return this.selectedActivitySubject.getValue();
  }

  getPackage() {
    return this.selectedPackageSubject.getValue();
  }

  selectActivity(index: number, activity: string) {
    const data = {
      index: index,
      activity: activity,
    };
    this.selectedActivitySubject.next(data);
  }

  selectPackage(index: number, p1: string, p2: string) {
    const data = {
      index: index,
      p1: p1,
      p2: p2,
    };

    this.selectedPackageSubject.next(data);
  }

  selectLocationType(index: number, locationType: string) {
    const data = {
      index: index,
      locationType: locationType,
    };

    this.selectedLocationTypeSubject.next(data);
  }

  getLocationType(){
    return this.selectedLocationTypeSubject.getValue();
  }

  // selectLocation(index: number, location: string) {
  //   const data = {
  //     index: index,
  //     location: location,
  //   };

  //   this.selectedLocationSubject.next(data);
  // }

  getTowers() {
    this.towers = this.data.map((val) => val.towerName);
    return this.towers;
  }

  getActivities(towerInd: number) {
    this.activities = this.data[towerInd].activities.map((val) => val.activity);
    return this.activities;
  }

  getPackages() {
    const towerInd = this.selectedTowerSubject.getValue().index;
    const activityInd = this.selectedActivitySubject.getValue().index;
    //(activityInd)
    if (towerInd !== -1 && activityInd !== -1)
      this.packages = this.data[towerInd].activities[activityInd].packages.map(
        (val) => val.package
      );
    console.log(this.packages);
    return this.packages;
  }

  getLocationTypes() {
    const towerInd = this.selectedTowerSubject.getValue().index;
    const activityInd = this.selectedActivitySubject.getValue().index;
    const packageInd = this.selectedPackageSubject.getValue().index;

    if (towerInd !== -1 && activityInd !== -1 && packageInd !== -1) {
      this.locationTypes = this.data[towerInd].activities[activityInd].packages[
        packageInd
      ].locationTypes.map((val) => val.locationType);
    }

    return this.locationTypes;
  }

  getLocations() {
    const towerInd = this.selectedTowerSubject.getValue().index;
    const activityInd = this.selectedActivitySubject.getValue().index;
    const packageInd = this.selectedPackageSubject.getValue().index;
    const locationTypeInd = this.selectedLocationTypeSubject.getValue().index;
    
    if (
      towerInd !== -1 &&
      activityInd !== -1 &&
      packageInd !== -1 &&
      locationTypeInd !== -1
    ) {
      this.locations = this.data[towerInd].activities[activityInd].packages[
        packageInd
      ].locationTypes[locationTypeInd].locations.map((val) => val);
    }
    return this.locations;
  }


}
