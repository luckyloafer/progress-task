import { Component, OnInit } from '@angular/core';
import { CheckPointsService } from 'src/app/check-points.service';
import { Tower } from 'src/app/tower';
@Component({
  selector: 'app-checkpoints',
  templateUrl: './checkpoints.component.html',
  styleUrls: ['./checkpoints.component.scss'],
})
export class CheckpointsComponent implements OnInit {

  constructor(private checkPointsService: CheckPointsService ){}

  selectedTowerInd!:number
  selectedActivityInd!:number
  selectedPackageInd!:number
  selectedLocationTypeInd!:number

  ngOnInit(): void {
    
    this.getTowerInd();
  }
  
  getTowerInd(){
     this.checkPointsService.selectedTower.subscribe(val=>{
      this.selectedTowerInd = val.index
     })

     this.checkPointsService.selectedActivity.subscribe(val=>{
      this.selectedActivityInd = val.index
     })

     this.checkPointsService.selectedPackage.subscribe(val=>{
      this.selectedPackageInd = val.index
     })

     this.checkPointsService.selectedLocationType.subscribe(val=>{
      this.selectedLocationTypeInd = val.index
     })

  }

}
