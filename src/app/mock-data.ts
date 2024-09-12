
import { Tower } from "./tower";

export const data: Tower[] = [
  {
    id: 'tower-1',
    towerName: 'Tower A',
    activities: [
      {
        id: 'activity-1',
        activity: 'Shuttering',
        packages: [
          {
            id: 'package-1',
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                id: 'locationType-1',
                locationType: 'Flat',
                locations: [
                  { id: 'location-1', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-2', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-3', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-4', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-5', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-6', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-7', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-8', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-2',
                locationType: 'Flat Column',
                locations: [
                  { id: 'location-9', locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-10', locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] },
                  { id: 'location-11', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-12', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-13', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-14', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
          {
            id: 'package-2',
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                id: 'locationType-3',
                locationType: 'Flat 2',
                locations: [
                  { id: 'location-15', locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-16', locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-4',
                locationType: 'Column 2',
                locations: [
                  { id: 'location-17', locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-18', locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'activity-1',
        activity: 'Shuttering',
        packages: [
          {
            id: 'package-1',
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                id: 'locationType-1',
                locationType: 'Flat',
                locations: [
                  { id: 'location-1', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-2', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-3', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-4', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-5', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-6', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-7', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-8', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-2',
                locationType: 'Flat Column',
                locations: [
                  { id: 'location-9', locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-10', locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] },
                  { id: 'location-11', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-12', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-13', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-14', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
          {
            id: 'package-2',
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                id: 'locationType-3',
                locationType: 'Flat 2',
                locations: [
                  { id: 'location-15', locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-16', locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-4',
                locationType: 'Column 2',
                locations: [
                  { id: 'location-17', locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-18', locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'activity-1',
        activity: 'Shuttering',
        packages: [
          {
            id: 'package-1',
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                id: 'locationType-1',
                locationType: 'Flat',
                locations: [
                  { id: 'location-1', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-2', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-3', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-4', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-5', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-6', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-7', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-8', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-2',
                locationType: 'Flat Column',
                locations: [
                  { id: 'location-9', locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-10', locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] },
                  { id: 'location-11', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-12', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-13', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-14', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
          {
            id: 'package-2',
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                id: 'locationType-3',
                locationType: 'Flat 2',
                locations: [
                  { id: 'location-15', locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-16', locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-4',
                locationType: 'Column 2',
                locations: [
                  { id: 'location-17', locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-18', locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'activity-1',
        activity: 'Shuttering',
        packages: [
          {
            id: 'package-1',
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                id: 'locationType-1',
                locationType: 'Flat',
                locations: [
                  { id: 'location-1', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-2', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-3', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-4', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-5', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-6', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-7', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-8', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-2',
                locationType: 'Flat Column',
                locations: [
                  { id: 'location-9', locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-10', locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] },
                  { id: 'location-11', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-12', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-13', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-14', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
          {
            id: 'package-2',
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                id: 'locationType-3',
                locationType: 'Flat 2',
                locations: [
                  { id: 'location-15', locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-16', locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-4',
                locationType: 'Column 2',
                locations: [
                  { id: 'location-17', locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-18', locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'activity-1',
        activity: 'Shuttering',
        packages: [
          {
            id: 'package-1',
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                id: 'locationType-1',
                locationType: 'Flat',
                locations: [
                  { id: 'location-1', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-2', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-3', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-4', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-5', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-6', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-7', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-8', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-2',
                locationType: 'Flat Column',
                locations: [
                  { id: 'location-9', locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-10', locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] },
                  { id: 'location-11', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-12', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-13', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-14', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
          {
            id: 'package-2',
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                id: 'locationType-3',
                locationType: 'Flat 2',
                locations: [
                  { id: 'location-15', locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-16', locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-4',
                locationType: 'Column 2',
                locations: [
                  { id: 'location-17', locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-18', locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'activity-1',
        activity: 'Shuttering',
        packages: [
          {
            id: 'package-1',
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                id: 'locationType-1',
                locationType: 'Flat',
                locations: [
                  { id: 'location-1', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-2', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-3', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-4', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-5', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-6', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-7', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-8', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-2',
                locationType: 'Flat Column',
                locations: [
                  { id: 'location-9', locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-10', locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] },
                  { id: 'location-11', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-12', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-13', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-14', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
          {
            id: 'package-2',
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                id: 'locationType-3',
                locationType: 'Flat 2',
                locations: [
                  { id: 'location-15', locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-16', locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-4',
                locationType: 'Column 2',
                locations: [
                  { id: 'location-17', locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-18', locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'activity-1',
        activity: 'Shuttering',
        packages: [
          {
            id: 'package-1',
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                id: 'locationType-1',
                locationType: 'Flat',
                locations: [
                  { id: 'location-1', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-2', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-3', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-4', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-5', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-6', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-7', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-8', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-2',
                locationType: 'Flat Column',
                locations: [
                  { id: 'location-9', locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-10', locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] },
                  { id: 'location-11', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-12', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-13', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-14', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
          {
            id: 'package-2',
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                id: 'locationType-3',
                locationType: 'Flat 2',
                locations: [
                  { id: 'location-15', locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-16', locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-4',
                locationType: 'Column 2',
                locations: [
                  { id: 'location-17', locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-18', locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'activity-1',
        activity: 'Shuttering',
        packages: [
          {
            id: 'package-1',
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                id: 'locationType-1',
                locationType: 'Flat',
                locations: [
                  { id: 'location-1', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-2', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-3', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-4', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-5', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-6', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-7', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-8', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-2',
                locationType: 'Flat Column',
                locations: [
                  { id: 'location-9', locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-10', locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] },
                  { id: 'location-11', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-12', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-13', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-14', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
          {
            id: 'package-2',
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                id: 'locationType-3',
                locationType: 'Flat 2',
                locations: [
                  { id: 'location-15', locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-16', locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-4',
                locationType: 'Column 2',
                locations: [
                  { id: 'location-17', locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-18', locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'activity-1',
        activity: 'Shuttering',
        packages: [
          {
            id: 'package-1',
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                id: 'locationType-1',
                locationType: 'Flat',
                locations: [
                  { id: 'location-1', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-2', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-3', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-4', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-5', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-6', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-7', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-8', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-2',
                locationType: 'Flat Column',
                locations: [
                  { id: 'location-9', locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-10', locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] },
                  { id: 'location-11', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-12', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-13', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-14', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
          {
            id: 'package-2',
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                id: 'locationType-3',
                locationType: 'Flat 2',
                locations: [
                  { id: 'location-15', locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-16', locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-4',
                locationType: 'Column 2',
                locations: [
                  { id: 'location-17', locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-18', locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'activity-1',
        activity: 'Shuttering',
        packages: [
          {
            id: 'package-1',
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                id: 'locationType-1',
                locationType: 'Flat',
                locations: [
                  { id: 'location-1', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-2', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-3', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-4', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-5', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-6', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-7', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-8', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-2',
                locationType: 'Flat Column',
                locations: [
                  { id: 'location-9', locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-10', locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] },
                  { id: 'location-11', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-12', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-13', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-14', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
          {
            id: 'package-2',
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                id: 'locationType-3',
                locationType: 'Flat 2',
                locations: [
                  { id: 'location-15', locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-16', locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-4',
                locationType: 'Column 2',
                locations: [
                  { id: 'location-17', locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-18', locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'activity-1',
        activity: 'Shuttering',
        packages: [
          {
            id: 'package-1',
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                id: 'locationType-1',
                locationType: 'Flat',
                locations: [
                  { id: 'location-1', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-2', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-3', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-4', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-5', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-6', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-7', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-8', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-2',
                locationType: 'Flat Column',
                locations: [
                  { id: 'location-9', locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-10', locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] },
                  { id: 'location-11', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-12', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-13', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-14', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
          {
            id: 'package-2',
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                id: 'locationType-3',
                locationType: 'Flat 2',
                locations: [
                  { id: 'location-15', locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-16', locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-4',
                locationType: 'Column 2',
                locations: [
                  { id: 'location-17', locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-18', locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'activity-1',
        activity: 'Shuttering',
        packages: [
          {
            id: 'package-1',
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                id: 'locationType-1',
                locationType: 'Flat',
                locations: [
                  { id: 'location-1', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-2', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-3', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-4', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-5', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-6', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-7', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-8', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-2',
                locationType: 'Flat Column',
                locations: [
                  { id: 'location-9', locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-10', locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] },
                  { id: 'location-11', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-12', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-13', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-14', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
          {
            id: 'package-2',
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                id: 'locationType-3',
                locationType: 'Flat 2',
                locations: [
                  { id: 'location-15', locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-16', locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-4',
                locationType: 'Column 2',
                locations: [
                  { id: 'location-17', locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-18', locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'activity-1',
        activity: 'Shuttering',
        packages: [
          {
            id: 'package-1',
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                id: 'locationType-1',
                locationType: 'Flat',
                locations: [
                  { id: 'location-1', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-2', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-3', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-4', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-5', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-6', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-7', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-8', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-2',
                locationType: 'Flat Column',
                locations: [
                  { id: 'location-9', locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-10', locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] },
                  { id: 'location-11', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-12', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-13', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-14', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
          {
            id: 'package-2',
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                id: 'locationType-3',
                locationType: 'Flat 2',
                locations: [
                  { id: 'location-15', locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-16', locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-4',
                locationType: 'Column 2',
                locations: [
                  { id: 'location-17', locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-18', locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'activity-1',
        activity: 'Shuttering',
        packages: [
          {
            id: 'package-1',
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                id: 'locationType-1',
                locationType: 'Flat',
                locations: [
                  { id: 'location-1', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-2', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-3', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-4', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-5', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-6', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-7', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-8', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-2',
                locationType: 'Flat Column',
                locations: [
                  { id: 'location-9', locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-10', locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] },
                  { id: 'location-11', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-12', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-13', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-14', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
          {
            id: 'package-2',
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                id: 'locationType-3',
                locationType: 'Flat 2',
                locations: [
                  { id: 'location-15', locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-16', locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-4',
                locationType: 'Column 2',
                locations: [
                  { id: 'location-17', locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-18', locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'activity-1',
        activity: 'Shuttering',
        packages: [
          {
            id: 'package-1',
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                id: 'locationType-1',
                locationType: 'Flat',
                locations: [
                  { id: 'location-1', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-2', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-3', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-4', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-5', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-6', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-7', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-8', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-2',
                locationType: 'Flat Column',
                locations: [
                  { id: 'location-9', locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-10', locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] },
                  { id: 'location-11', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-12', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-13', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-14', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
          {
            id: 'package-2',
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                id: 'locationType-3',
                locationType: 'Flat 2',
                locations: [
                  { id: 'location-15', locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-16', locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-4',
                locationType: 'Column 2',
                locations: [
                  { id: 'location-17', locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-18', locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'activity-1',
        activity: 'Shuttering',
        packages: [
          {
            id: 'package-1',
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                id: 'locationType-1',
                locationType: 'Flat',
                locations: [
                  { id: 'location-1', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-2', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-3', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-4', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-5', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-6', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-7', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-8', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-2',
                locationType: 'Flat Column',
                locations: [
                  { id: 'location-9', locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-10', locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] },
                  { id: 'location-11', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-12', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-13', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-14', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
          {
            id: 'package-2',
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                id: 'locationType-3',
                locationType: 'Flat 2',
                locations: [
                  { id: 'location-15', locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-16', locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-4',
                locationType: 'Column 2',
                locations: [
                  { id: 'location-17', locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-18', locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'activity-1',
        activity: 'Shuttering',
        packages: [
          {
            id: 'package-1',
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                id: 'locationType-1',
                locationType: 'Flat',
                locations: [
                  { id: 'location-1', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-2', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-3', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-4', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-5', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-6', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-7', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-8', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-2',
                locationType: 'Flat Column',
                locations: [
                  { id: 'location-9', locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-10', locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] },
                  { id: 'location-11', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-12', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-13', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-14', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
          {
            id: 'package-2',
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                id: 'locationType-3',
                locationType: 'Flat 2',
                locations: [
                  { id: 'location-15', locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-16', locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-4',
                locationType: 'Column 2',
                locations: [
                  { id: 'location-17', locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-18', locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'activity-1',
        activity: 'Shuttering',
        packages: [
          {
            id: 'package-1',
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                id: 'locationType-1',
                locationType: 'Flat',
                locations: [
                  { id: 'location-1', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-2', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-3', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-4', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-5', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-6', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-7', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-8', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-2',
                locationType: 'Flat Column',
                locations: [
                  { id: 'location-9', locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-10', locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] },
                  { id: 'location-11', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-12', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-13', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-14', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
          {
            id: 'package-2',
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                id: 'locationType-3',
                locationType: 'Flat 2',
                locations: [
                  { id: 'location-15', locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-16', locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-4',
                locationType: 'Column 2',
                locations: [
                  { id: 'location-17', locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-18', locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'activity-1',
        activity: 'Shuttering',
        packages: [
          {
            id: 'package-1',
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                id: 'locationType-1',
                locationType: 'Flat',
                locations: [
                  { id: 'location-1', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-2', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-3', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-4', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-5', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-6', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-7', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-8', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-2',
                locationType: 'Flat Column',
                locations: [
                  { id: 'location-9', locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-10', locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] },
                  { id: 'location-11', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-12', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-13', locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-14', locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
          {
            id: 'package-2',
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                id: 'locationType-3',
                locationType: 'Flat 2',
                locations: [
                  { id: 'location-15', locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-16', locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-4',
                locationType: 'Column 2',
                locations: [
                  { id: 'location-17', locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-18', locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'activity-2',
        activity: 'Shuttering2',
        packages: [
          {
            id: 'package-3',
            package: 'Slab & wall shuttering - Mivan2',
            locationTypes: [
              {
                id: 'locationType-5',
                locationType: 'Flat2',
                locations: [
                  { id: 'location-19', locationName: 'Flat 103', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-20', locationName: 'Flat 104', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-6',
                locationType: 'Column2',
                locations: [
                  { id: 'location-21', locationName: 'Column C5', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-22', locationName: 'Column C6', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'tower-2',
    towerName: 'Tower B',
    activities: [
      {
        id: 'activity-3',
        activity: 'Concrete Work',
        packages: [
          {
            id: 'package-4',
            package: 'Foundation and Plinth',
            locationTypes: [
              {
                id: 'locationType-7',
                locationType: 'Basement',
                locations: [
                  { id: 'location-23', locationName: 'Basement B1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-24', locationName: 'Basement B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-8',
                locationType: 'Ground Floor',
                locations: [
                  { id: 'location-25', locationName: 'Ground Floor G1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-26', locationName: 'Ground Floor G2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'tower-3',
    towerName: 'Tower C',
    activities: [
      {
        id: 'activity-4',
        activity: 'Plastering',
        packages: [
          {
            id: 'package-5',
            package: 'Internal Plastering',
            locationTypes: [
              {
                id: 'locationType-9',
                locationType: 'Room',
                locations: [
                  { id: 'location-27', locationName: 'Room 201', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-28', locationName: 'Room 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-10',
                locationType: 'Hall',
                locations: [
                  { id: 'location-29', locationName: 'Hall H1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-30', locationName: 'Hall H2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'tower-4',
    towerName: 'Tower D',
    activities: [
      {
        id: 'activity-5',
        activity: 'Painting',
        packages: [
          {
            id: 'package-6',
            package: 'External Painting',
            locationTypes: [
              {
                id: 'locationType-11',
                locationType: 'Facade',
                locations: [
                  { id: 'location-31', locationName: 'Facade F1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-32', locationName: 'Facade F2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-12',
                locationType: 'Balcony',
                locations: [
                  { id: 'location-33', locationName: 'Balcony B1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-34', locationName: 'Balcony B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'tower-5',
    towerName: 'Tower E',
    activities: [
      {
        id: 'activity-6',
        activity: 'Flooring',
        packages: [
          {
            id: 'package-7',
            package: 'Tile Flooring',
            locationTypes: [
              {
                id: 'locationType-13',
                locationType: 'Kitchen',
                locations: [
                  { id: 'location-35', locationName: 'Kitchen K1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-36', locationName: 'Kitchen K2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-14',
                locationType: 'Bathroom',
                locations: [
                  { id: 'location-37', locationName: 'Bathroom B1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-38', locationName: 'Bathroom B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'tower-6',
    towerName: 'Tower F',
    activities: [
      {
        id: 'activity-7',
        activity: 'Electrical Work',
        packages: [
          {
            id: 'package-8',
            package: 'Wiring and Switches',
            locationTypes: [
              {
                id: 'locationType-15',
                locationType: 'Living Room',
                locations: [
                  { id: 'location-39', locationName: 'Living Room L1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-40', locationName: 'Living Room L2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                id: 'locationType-16',
                locationType: 'Bedroom',
                locations: [
                  { id: 'location-41', locationName: 'Bedroom B1', sublocations: ['G01', 'G02', 'G03'] },
                  { id: 'location-42', locationName: 'Bedroom B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

