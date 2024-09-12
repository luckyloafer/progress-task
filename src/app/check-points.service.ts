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
  towerId: string;
}

interface selectedActivity {
  index: number;
  activity: string;
  activityId: string;
}

interface selectedPackage {
  index: number;
  p1: string;
  p2: string;
  packageId: string;
}

interface selectedLocationType {
  index: number;
  locationType: string;
  locationTypeId: string;
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

interface tower {
  id: string;
  towerName: string;
}

interface activity {
  activityId: string;
  activityName: string;
}

interface packageType {
  packageId: string;
  p1?: string;
  p2: string;
}

interface locationType {
  locationTypeId: string;
  locationType: string;
}

@Injectable({
  providedIn: 'root',
})
export class CheckPointsService {
  constructor() {}

  data: Tower[] = data;
  towers: tower[] = [{ id: '', towerName: '' }];
  filteredTowers!: tower[];
  selectedData!: selectedData;
  activities!: activity[];
  packages!: packageType[];
  filteredPackages!: packageType[];
  locationTypes!: locationType[];
  filteredLocationTypes!: locationType[];
  locations: location[] = [];

  private selectedTowerSubject = new BehaviorSubject<selectedTower>({
    index: -1,
    tower: '',
    towerId: '',
  });
  selectedTower = this.selectedTowerSubject.asObservable();

  private selectedActivitySubject = new BehaviorSubject<selectedActivity>({
    index: -1,
    activity: '',
    activityId: '',
  });
  selectedActivity = this.selectedActivitySubject.asObservable();

  private selectedPackageSubject = new BehaviorSubject<selectedPackage>({
    index: -1,
    p1: '',
    p2: '',
    packageId: '',
  });
  selectedPackage = this.selectedPackageSubject.asObservable();

  private selectedLocationTypeSubject =
    new BehaviorSubject<selectedLocationType>({
      index: -1,
      locationType: '',
      locationTypeId: '',
    });
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

  selectTower(index: number, tower: string, towerId: string) {
    const val = {
      index: index,
      tower: tower,
      towerId: towerId,
    };

    this.selectedTowerSubject.next(val);
    //alert(this.selectedTowerSubject.getValue().index)
  }

  getTower() {
    return this.selectedTowerSubject.getValue();
  }
  reserTower() {
    this.selectedTowerSubject.next({ index: -1, tower: '', towerId: '' });
  }
  resetActivity() {
    this.selectedActivitySubject.next({
      activity: '',
      index: -1,
      activityId: '',
    });
  }
  resetPackage() {
    this.selectedPackageSubject.next({
      index: -1,
      p1: '',
      p2: '',
      packageId: '',
    });
  }
  resetLocationType() {
    this.selectedLocationTypeSubject.next({
      index: -1,
      locationType: '',
      locationTypeId: '',
    });
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

  selectActivity(index: number, activity: string, activityId: string) {
    const data = {
      index: index,
      activity: activity,
      activityId: activityId,
    };
    this.selectedActivitySubject.next(data);
    console.log(this.selectedTowerSubject.getValue());
    console.log(data);
  }

  selectPackage(index: number, p1: string, p2: string, packageId: string) {
    const data = {
      index: index,
      p1: p1,
      p2: p2,
      packageId: packageId,
    };
    this.selectedPackageSubject.next(data);
    console.log(this.selectedPackageSubject.getValue());
  }

  selectLocationType(
    index: number,
    locationType: string,
    locationTypeId: string
  ) {
    const data = {
      index: index,
      locationType: locationType,
      locationTypeId: locationTypeId,
    };

    this.selectedLocationTypeSubject.next(data);
  }

  getLocationType() {
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
    this.towers = this.data.map((val) => ({
      id: val.id,
      towerName: val.towerName,
    }));
    return this.towers;
  }

  getFilteredTowers(searchTerm: string) {
    const normalizedSearchTerm = searchTerm
      .trim()
      .replace(/\s+/g, ' ')
      .toLowerCase();
  
    const filteredData = this.data.filter((val) =>
      val.activities.some((activity) => {
        const normalizedActivityName = activity.activity
          .trim()
          .replace(/\s+/g, ' ')
          .toLowerCase();
  
        return normalizedActivityName.includes(normalizedSearchTerm);
      })
    );
  
    this.filteredTowers = filteredData.map((val) => ({
      id: val.id,
      towerName: val.towerName,
    }));
  
    return this.filteredTowers;
  }
  

  getFilteredPackages(searchTerm: string) {
    const towerId = this.selectedTowerSubject.getValue().towerId;
    const activityId = this.selectedActivitySubject.getValue().activityId;

    const lowerCaseSearchTerm = searchTerm
      .trim()
      .replace(/\s+/g, ' ')
      .toLowerCase();

    const tower = this.data.find((tower) => tower.id === towerId);

    if (tower) {
      const activity = tower.activities.find(
        (activity) => activity.id === activityId
      );

      if (activity) {
        this.filteredPackages = activity.packages
          .filter((pkg) => {
            const normalizedPackageName = pkg.package
              .trim()
              .replace(/\s+/g, ' ')
              .toLowerCase();
            return normalizedPackageName.includes(lowerCaseSearchTerm);
          })
          .map((pkg) => {
            return {
              packageId: pkg.id,
              p2: pkg.package,
            };
          });

        console.log(this.filteredPackages); 
      } else {
        this.filteredPackages = [];
      }
    } else {
      this.filteredPackages = [];
    }

    return this.filteredPackages;
  }

  getActivities(towerId: string) {
    console.log(towerId);
    const filteredData = this.data.find((tower) => tower.id === towerId);
    if (!filteredData) {
      this.activities = [];
      return this.activities;
    }
    this.activities = filteredData?.activities.map((val) => {
      return { activityId: val.id, activityName: val.activity };
    });

    return this.activities;
  }

  getPackages() {
    const towerInd = this.selectedTowerSubject.getValue().index;
    const activityInd = this.selectedActivitySubject.getValue().index;
    const towerId = this.selectedTowerSubject.getValue().towerId;
    const activityId = this.selectedActivitySubject.getValue().activityId;
    console.log(towerId);
    console.log(activityId);
    console.log(towerInd);
    console.log(towerInd);
    if (towerInd !== -1 && activityInd !== -1) {
      const filteredData = this.data
        .find((tower) => towerId === tower.id)
        ?.activities.find((activity) => activity.id === activityId);
      if (!filteredData) {
        this.packages = [];
        return this.packages;
      }

      console.log(filteredData);

      this.packages = filteredData.packages.map((val) => {
        return { packageId: val.id, p2: val.package, p1: '' };
      });
    }
    return this.packages;
  }

  getLocationTypes() {
    const towerInd = this.selectedTowerSubject.getValue().index;
    const activityInd = this.selectedActivitySubject.getValue().index;
    const packageInd = this.selectedPackageSubject.getValue().index;
    const towerId = this.selectedTowerSubject.getValue().towerId;
    const activityId = this.selectedActivitySubject.getValue().activityId;
    const packageId = this.selectedPackageSubject.getValue().packageId;

    if (towerId && activityId && packageId) {
      const selectedTower = this.data.find((tower) => tower.id === towerId);

      if (selectedTower) {
        const selectedActivity = selectedTower.activities.find(
          (activity) => activity.id === activityId
        );

        if (selectedActivity) {
          const selectedPackage = selectedActivity.packages.find(
            (pkg) => pkg.id === packageId
          );

          if (selectedPackage) {
            this.locationTypes = selectedPackage.locationTypes.map(
              (locationType) => {
                return {
                  locationTypeId: locationType.id,
                  locationType: locationType.locationType,
                };
              }
            );
          } else {
            this.locationTypes = []; 
          }
        } else {
          this.locationTypes = []; 
        }
      } else {
        this.locationTypes = []; 
      }
    }

    return this.locationTypes;
  }

  getFilteredLocationTypes(searchTerm: string) {
    const towerId = this.selectedTowerSubject.getValue().towerId;
    const activityId = this.selectedActivitySubject.getValue().activityId;
    const packageId = this.selectedPackageSubject.getValue().packageId;
  
    const lowerCaseSearchTerm = searchTerm
      .trim()
      .replace(/\s+/g, ' ')
      .toLowerCase();
  
    const selectedTower = this.data.find((tower) => tower.id === towerId);
  
    if (selectedTower) {
      const selectedActivity = selectedTower.activities.find(
        (activity) => activity.id === activityId
      );
  
      if (selectedActivity) {
        const selectedPackage = selectedActivity.packages.find(
          (pkg) => pkg.id === packageId
        );
  
        if (selectedPackage) {
          this.filteredLocationTypes = selectedPackage.locationTypes
            .filter((locationType) => {
              const normalizedLocationType = locationType.locationType
                .trim()
                .replace(/\s+/g, ' ')
                .toLowerCase();
              return normalizedLocationType.includes(lowerCaseSearchTerm);
            })
            .map((locationType) => ({
              locationTypeId: locationType.id, 
              locationType: locationType.locationType,
            }));
        } else {
          this.filteredLocationTypes = []; 
        }
      } else {
        this.filteredLocationTypes = []; 
      }
    } else {
      this.filteredLocationTypes = []; 
    }
  
    return this.filteredLocationTypes;
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

  getFilteredLocations(searchTerm: string) {
    const towerId = this.selectedTowerSubject.getValue().towerId;
    const activityId = this.selectedActivitySubject.getValue().activityId;
    const packageId = this.selectedPackageSubject.getValue().packageId;
    const locationTypeId = this.selectedLocationTypeSubject.getValue().locationTypeId;
  
    const normalizedSearchTerm = searchTerm
      .trim()
      .replace(/\s+/g, ' ')
      .toLowerCase();
  
    const selectedTower = this.data.find((tower) => tower.id === towerId);
  
    if (selectedTower) {
      const selectedActivity = selectedTower.activities.find(
        (activity) => activity.id === activityId
      );
  
      if (selectedActivity) {
        const selectedPackage = selectedActivity.packages.find(
          (pkg) => pkg.id === packageId
        );
  
        if (selectedPackage) {
          const selectedLocationType = selectedPackage.locationTypes.find(
            (locType) => locType.id === locationTypeId
          );
  
          if (selectedLocationType) {
            this.locations = selectedLocationType.locations.filter((location) => {
              
              return location.sublocations.some((subLocation) => {
                const normalizedSubLocation = subLocation
                  .trim()
                  .replace(/\s+/g, ' ')
                  .toLowerCase();
                return normalizedSubLocation.includes(normalizedSearchTerm);
              });
            });
          } else {
            this.locations = []; 
          }
        } else {
          this.locations = []; 
        }
      } else {
        this.locations = []; 
      }
    } else {
      this.locations = []; 
    }
  
    return this.locations;
  }
  
}
