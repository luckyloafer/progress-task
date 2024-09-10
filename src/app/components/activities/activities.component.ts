import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheckPointsService } from 'src/app/check-points.service';
import { Tower } from 'src/app/tower';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  constructor(private checkPointsService: CheckPointsService) {}

  data!: Tower[];
  towers!: string[];
  activities: string[] = ['a', 'b', 'c'];
  selctedTowerInd: number = -1;
  selectedActivityInd: number = -1;
  open: boolean = true;
  //bug:boolean = false;
  ngOnInit(): void {
    this.getTowers();
  }

  getTowers() {
    this.towers = this.checkPointsService.getTowers();
  }

  getActivities(towerIndex: number) {
    this.activities = this.checkPointsService.getActivities(towerIndex);
  }

  selectTowerActivity(activityInd: number, activity: string) {
    this.checkPointsService.selectActivity(activityInd, activity);
    this.selectedActivityInd = activityInd;
    //this.open=!this.open
    console.log(this.selectedActivityInd);
  }
  toggleDropdown(towerInd: number, tower: string) {
    this.selctedTowerInd = towerInd;
    //this.open = !this.open;
    console.log(this.selctedTowerInd);
    this.checkPointsService.selectTower(towerInd, tower);
    this.getActivities(towerInd);
    this.selectedActivityInd = -1;
    this.checkPointsService.resetActivity();
  }
}
