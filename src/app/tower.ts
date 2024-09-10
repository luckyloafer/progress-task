interface Location {
    locationName: string; // Assuming 'locationName' as a placeholder property for the locations array.
    sublocations: string[]
  }
  
  interface LocationType {
    locationType: string;
    locations: Location[];
  }
  
  interface Package {
    package: string;
    locationTypes: LocationType[];
  }
  
  interface Activity {
    activity: string;
    packages: Package[];
  }
  
 export interface Tower {
    towerName: string;
    activities: Activity[];
  }