// interface Location {
//     locationName: string; // Assuming 'locationName' as a placeholder property for the locations array.
//     sublocations: string[]
//   }
  
//   interface LocationType {
//     locationType: string;
//     locations: Location[];
//   }
  
//   interface Package {
//     package: string;
//     locationTypes: LocationType[];
//   }
  
//   interface Activity {
//     activity: string;
//     packages: Package[];
//   }
  
//  export interface Tower {
//     towerName: string;
//     activities: Activity[];
//   }

interface Location {
  id: string; // Unique identifier for each location
  locationName: string; // Name of the location
  sublocations: string[]; // Array of sublocations within the location
}

interface LocationType {
  id: string; // Unique identifier for each location type
  locationType: string; // Type of location (e.g., 'Flat', 'Column', 'Room')
  locations: Location[]; // Array of locations under this type
}

interface Package {
  id: string; // Unique identifier for each package
  package: string; // Name or description of the package
  locationTypes: LocationType[]; // Array of location types under this package
}

interface Activity {
  id: string; // Unique identifier for each activity
  activity: string; // Description of the activity (e.g., 'Shuttering', 'Painting')
  packages: Package[]; // Array of packages associated with this activity
}

export interface Tower {
  id: string; // Unique identifier for each tower
  towerName: string; // Name of the tower
  activities: Activity[]; // Array of activities related to the tower
}
