import { Tower } from "./tower";

export const data: Tower[] = [
  {
    towerName: 'Tower A',
    activities: [
      {
        activity: 'Shuttering',
        packages: [
          {
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                locationType: 'Flat',
                locations: [
                  { locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Flat Column',
                locations: [
                  { locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] }, // Corrected duplicate sublocation
                  { locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
          {
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                locationType: 'Flat 2',
                locations: [
                  { locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                  { locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                ],
              },
              {
                locationType: 'Flat Column 2',
                locations: [
                  { locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                  { locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                ],
              },
            ],
          },
        ],
      },
      {
        activity: 'Shuttering2',
        packages: [
          {
            package: 'Slab & wall shuttering - Mivan2',
            locationTypes: [
              {
                locationType: 'Flat2',
                locations: [
                  { locationName: 'Flat 103', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                  { locationName: 'Flat 104', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                ],
              },
              {
                locationType: 'Flat Column2',
                locations: [
                  { locationName: 'Column C5', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                  { locationName: 'Column C6', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower B',
    activities: [
      {
        activity: 'Concrete Work',
        packages: [
          {
            package: 'Foundation and Plinth',
            locationTypes: [
              {
                locationType: 'Basement',
                locations: [
                  { locationName: 'Basement B1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Basement B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Ground Floor',
                locations: [
                  { locationName: 'Ground Floor G1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Ground Floor G2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower C',
    activities: [
      {
        activity: 'Plastering',
        packages: [
          {
            package: 'Internal Plastering',
            locationTypes: [
              {
                locationType: 'Room',
                locations: [
                  { locationName: 'Room 201', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Room 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Hall',
                locations: [
                  { locationName: 'Hall H1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Hall H2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower D',
    activities: [
      {
        activity: 'Painting',
        packages: [
          {
            package: 'External Painting',
            locationTypes: [
              {
                locationType: 'Facade',
                locations: [
                  { locationName: 'Facade F1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Facade F2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Balcony',
                locations: [
                  { locationName: 'Balcony B1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Balcony B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower E',
    activities: [
      {
        activity: 'Flooring',
        packages: [
          {
            package: 'Tile Flooring',
            locationTypes: [
              {
                locationType: 'Kitchen',
                locations: [
                  { locationName: 'Kitchen K1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Kitchen K2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Bathroom',
                locations: [
                  { locationName: 'Bathroom B1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Bathroom B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower F',
    activities: [
      {
        activity: 'Electrical Work',
        packages: [
          {
            package: 'Wiring and Switches',
            locationTypes: [
              {
                locationType: 'Living Room',
                locations: [
                  { locationName: 'Living Room L1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Living Room L2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Bedroom',
                locations: [
                  { locationName: 'Bedroom B1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Bedroom B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower A',
    activities: [
      {
        activity: 'Shuttering',
        packages: [
          {
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                locationType: 'Flat',
                locations: [
                  { locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Flat Column',
                locations: [
                  { locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] }, // Corrected duplicate sublocation
                ],
              },
            ],
          },
          {
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                locationType: 'Flat 2',
                locations: [
                  { locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                  { locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                ],
              },
              {
                locationType: 'Flat Column 2',
                locations: [
                  { locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                  { locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                ],
              },
            ],
          },
        ],
      },
      {
        activity: 'Shuttering2',
        packages: [
          {
            package: 'Slab & wall shuttering - Mivan2',
            locationTypes: [
              {
                locationType: 'Flat2',
                locations: [
                  { locationName: 'Flat 103', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                  { locationName: 'Flat 104', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                ],
              },
              {
                locationType: 'Flat Column2',
                locations: [
                  { locationName: 'Column C5', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                  { locationName: 'Column C6', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower B',
    activities: [
      {
        activity: 'Concrete Work',
        packages: [
          {
            package: 'Foundation and Plinth',
            locationTypes: [
              {
                locationType: 'Basement',
                locations: [
                  { locationName: 'Basement B1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Basement B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Ground Floor',
                locations: [
                  { locationName: 'Ground Floor G1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Ground Floor G2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower C',
    activities: [
      {
        activity: 'Plastering',
        packages: [
          {
            package: 'Internal Plastering',
            locationTypes: [
              {
                locationType: 'Room',
                locations: [
                  { locationName: 'Room 201', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Room 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Hall',
                locations: [
                  { locationName: 'Hall H1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Hall H2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower D',
    activities: [
      {
        activity: 'Painting',
        packages: [
          {
            package: 'External Painting',
            locationTypes: [
              {
                locationType: 'Facade',
                locations: [
                  { locationName: 'Facade F1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Facade F2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Balcony',
                locations: [
                  { locationName: 'Balcony B1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Balcony B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower E',
    activities: [
      {
        activity: 'Flooring',
        packages: [
          {
            package: 'Tile Flooring',
            locationTypes: [
              {
                locationType: 'Kitchen',
                locations: [
                  { locationName: 'Kitchen K1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Kitchen K2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Bathroom',
                locations: [
                  { locationName: 'Bathroom B1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Bathroom B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower F',
    activities: [
      {
        activity: 'Electrical Work',
        packages: [
          {
            package: 'Wiring and Switches',
            locationTypes: [
              {
                locationType: 'Living Room',
                locations: [
                  { locationName: 'Living Room L1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Living Room L2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Bedroom',
                locations: [
                  { locationName: 'Bedroom B1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Bedroom B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower A',
    activities: [
      {
        activity: 'Shuttering',
        packages: [
          {
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                locationType: 'Flat',
                locations: [
                  { locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Flat Column',
                locations: [
                  { locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] }, // Corrected duplicate sublocation
                ],
              },
            ],
          },
          {
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                locationType: 'Flat 2',
                locations: [
                  { locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                  { locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                ],
              },
              {
                locationType: 'Flat Column 2',
                locations: [
                  { locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                  { locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                ],
              },
            ],
          },
        ],
      },
      {
        activity: 'Shuttering2',
        packages: [
          {
            package: 'Slab & wall shuttering - Mivan2',
            locationTypes: [
              {
                locationType: 'Flat2',
                locations: [
                  { locationName: 'Flat 103', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                  { locationName: 'Flat 104', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                ],
              },
              {
                locationType: 'Flat Column2',
                locations: [
                  { locationName: 'Column C5', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                  { locationName: 'Column C6', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower B',
    activities: [
      {
        activity: 'Concrete Work',
        packages: [
          {
            package: 'Foundation and Plinth',
            locationTypes: [
              {
                locationType: 'Basement',
                locations: [
                  { locationName: 'Basement B1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Basement B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Ground Floor',
                locations: [
                  { locationName: 'Ground Floor G1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Ground Floor G2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower C',
    activities: [
      {
        activity: 'Plastering',
        packages: [
          {
            package: 'Internal Plastering',
            locationTypes: [
              {
                locationType: 'Room',
                locations: [
                  { locationName: 'Room 201', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Room 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Hall',
                locations: [
                  { locationName: 'Hall H1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Hall H2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower D',
    activities: [
      {
        activity: 'Painting',
        packages: [
          {
            package: 'External Painting',
            locationTypes: [
              {
                locationType: 'Facade',
                locations: [
                  { locationName: 'Facade F1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Facade F2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Balcony',
                locations: [
                  { locationName: 'Balcony B1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Balcony B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower E',
    activities: [
      {
        activity: 'Flooring',
        packages: [
          {
            package: 'Tile Flooring',
            locationTypes: [
              {
                locationType: 'Kitchen',
                locations: [
                  { locationName: 'Kitchen K1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Kitchen K2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Bathroom',
                locations: [
                  { locationName: 'Bathroom B1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Bathroom B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower F',
    activities: [
      {
        activity: 'Electrical Work',
        packages: [
          {
            package: 'Wiring and Switches',
            locationTypes: [
              {
                locationType: 'Living Room',
                locations: [
                  { locationName: 'Living Room L1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Living Room L2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Bedroom',
                locations: [
                  { locationName: 'Bedroom B1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Bedroom B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower A',
    activities: [
      {
        activity: 'Shuttering',
        packages: [
          {
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                locationType: 'Flat',
                locations: [
                  { locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Flat Column',
                locations: [
                  { locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] }, // Corrected duplicate sublocation
                ],
              },
            ],
          },
          {
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                locationType: 'Flat 2',
                locations: [
                  { locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                  { locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                ],
              },
              {
                locationType: 'Flat Column 2',
                locations: [
                  { locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                  { locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                ],
              },
            ],
          },
        ],
      },
      {
        activity: 'Shuttering2',
        packages: [
          {
            package: 'Slab & wall shuttering - Mivan2',
            locationTypes: [
              {
                locationType: 'Flat2',
                locations: [
                  { locationName: 'Flat 103', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                  { locationName: 'Flat 104', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                ],
              },
              {
                locationType: 'Flat Column2',
                locations: [
                  { locationName: 'Column C5', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                  { locationName: 'Column C6', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower B',
    activities: [
      {
        activity: 'Concrete Work',
        packages: [
          {
            package: 'Foundation and Plinth',
            locationTypes: [
              {
                locationType: 'Basement',
                locations: [
                  { locationName: 'Basement B1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Basement B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Ground Floor',
                locations: [
                  { locationName: 'Ground Floor G1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Ground Floor G2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower C',
    activities: [
      {
        activity: 'Plastering',
        packages: [
          {
            package: 'Internal Plastering',
            locationTypes: [
              {
                locationType: 'Room',
                locations: [
                  { locationName: 'Room 201', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Room 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Hall',
                locations: [
                  { locationName: 'Hall H1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Hall H2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower D',
    activities: [
      {
        activity: 'Painting',
        packages: [
          {
            package: 'External Painting',
            locationTypes: [
              {
                locationType: 'Facade',
                locations: [
                  { locationName: 'Facade F1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Facade F2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Balcony',
                locations: [
                  { locationName: 'Balcony B1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Balcony B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower E',
    activities: [
      {
        activity: 'Flooring',
        packages: [
          {
            package: 'Tile Flooring',
            locationTypes: [
              {
                locationType: 'Kitchen',
                locations: [
                  { locationName: 'Kitchen K1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Kitchen K2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Bathroom',
                locations: [
                  { locationName: 'Bathroom B1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Bathroom B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower F',
    activities: [
      {
        activity: 'Electrical Work',
        packages: [
          {
            package: 'Wiring and Switches',
            locationTypes: [
              {
                locationType: 'Living Room',
                locations: [
                  { locationName: 'Living Room L1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Living Room L2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Bedroom',
                locations: [
                  { locationName: 'Bedroom B1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Bedroom B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower A',
    activities: [
      {
        activity: 'Shuttering',
        packages: [
          {
            package: 'Slab & wall shuttering - Mivan0',
            locationTypes: [
              {
                locationType: 'Flat',
                locations: [
                  { locationName: 'Flat 101', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Flat 102', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Flat Column',
                locations: [
                  { locationName: 'Column C1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Column C2', sublocations: ['G11', 'G12', 'G13'] }, // Corrected duplicate sublocation
                ],
              },
            ],
          },
          {
            package: 'Slab & wall shuttering - Mivan1',
            locationTypes: [
              {
                locationType: 'Flat 2',
                locations: [
                  { locationName: 'Flat 201', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                  { locationName: 'Flat 202', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                ],
              },
              {
                locationType: 'Flat Column 2',
                locations: [
                  { locationName: 'Column C3', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                  { locationName: 'Column C4', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                ],
              },
            ],
          },
        ],
      },
      {
        activity: 'Shuttering2',
        packages: [
          {
            package: 'Slab & wall shuttering - Mivan2',
            locationTypes: [
              {
                locationType: 'Flat2',
                locations: [
                  { locationName: 'Flat 103', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                  { locationName: 'Flat 104', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                ],
              },
              {
                locationType: 'Flat Column2',
                locations: [
                  { locationName: 'Column C5', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                  { locationName: 'Column C6', sublocations: ['G01', 'G02', 'G03'] }, // Changed location name to avoid duplication
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower B',
    activities: [
      {
        activity: 'Concrete Work',
        packages: [
          {
            package: 'Foundation and Plinth',
            locationTypes: [
              {
                locationType: 'Basement',
                locations: [
                  { locationName: 'Basement B1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Basement B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Ground Floor',
                locations: [
                  { locationName: 'Ground Floor G1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Ground Floor G2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower C',
    activities: [
      {
        activity: 'Plastering',
        packages: [
          {
            package: 'Internal Plastering',
            locationTypes: [
              {
                locationType: 'Room',
                locations: [
                  { locationName: 'Room 201', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Room 202', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Hall',
                locations: [
                  { locationName: 'Hall H1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Hall H2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower D',
    activities: [
      {
        activity: 'Painting',
        packages: [
          {
            package: 'External Painting',
            locationTypes: [
              {
                locationType: 'Facade',
                locations: [
                  { locationName: 'Facade F1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Facade F2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Balcony',
                locations: [
                  { locationName: 'Balcony B1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Balcony B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower E',
    activities: [
      {
        activity: 'Flooring',
        packages: [
          {
            package: 'Tile Flooring',
            locationTypes: [
              {
                locationType: 'Kitchen',
                locations: [
                  { locationName: 'Kitchen K1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Kitchen K2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Bathroom',
                locations: [
                  { locationName: 'Bathroom B1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Bathroom B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    towerName: 'Tower F',
    activities: [
      {
        activity: 'Electrical Work',
        packages: [
          {
            package: 'Wiring and Switches',
            locationTypes: [
              {
                locationType: 'Living Room',
                locations: [
                  { locationName: 'Living Room L1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Living Room L2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
              {
                locationType: 'Bedroom',
                locations: [
                  { locationName: 'Bedroom B1', sublocations: ['G01', 'G02', 'G03'] },
                  { locationName: 'Bedroom B2', sublocations: ['G01', 'G02', 'G03'] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
