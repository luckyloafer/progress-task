import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheckPointsService } from 'src/app/check-points.service';
import { Tower } from 'src/app/tower';
import {v4 as uuidv4} from 'uuid'

interface tower{
  id:string,
  towerName:string
}

interface activity{
  activityId:string,
  activityName:string
}

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  constructor(private checkPointsService: CheckPointsService) {}

  data!: Tower[];
  towers!: tower[];
  activities!: activity[]
  selctedTowerInd: number = -1;
  selectedActivityInd: number = -1;
  open: boolean = false;
  searchTerm: string = '';
  filteredTowers!: tower[];
  
  //bug:boolean = false;
  ngOnInit(): void {
    this.getTowers();
  }

  getTowers() {
    this.towers = this.checkPointsService.getTowers();
    this.filteredTowers = this.towers
  }

  getActivities(towerId: string) {
    //this.activities = this.checkPointsService.getActivities(towerIndex);
    this.activities =  this.checkPointsService.getActivities(towerId)
  }

  filterTowers() {
    if (this.searchTerm) {
      // this.filteredActivities = this.activities.filter(activity =>
      //   activity.toLowerCase().includes(this.searchTerm.toLowerCase())
      // );
      //alert('triggered');
      //this.filteredTowers = ['a','b','c']
      //console.log( this.checkPointsService.getFilteredTowers(this.searchTerm))
      this.filteredTowers = this.checkPointsService.getFilteredTowers(this.searchTerm);
    } else {
      // this.filteredTowers = [...this.activities];
      this.filteredTowers = this.towers
    }
  }

  onSearchTermChange(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.filterTowers();
    this.open=false
    this.checkPointsService.resetActivity();
  }

  selectTowerActivity(activityInd: number, activity: string,activityId:string) {
    this.checkPointsService.selectActivity(activityInd, activity,activityId);
    this.selectedActivityInd = activityInd;
    //this.open=!this.open
    console.log(this.selectedActivityInd);
  }
  toggleDropdown(towerInd: number, tower: string,towerId:string) {

    //console.log(typeof(uuidv4()))
    console.log(towerId)

    if(this.selctedTowerInd==towerInd){
      this.open = !this.open
    }
    else{
      this.selctedTowerInd = towerInd;
      this.open = true;
    }
    this.selctedTowerInd = towerInd;
    //this.open = !this.open;
    //console.log(this.selctedTowerInd);
    this.checkPointsService.selectTower(towerInd, tower,towerId);
    this.getActivities(towerId);
    this.selectedActivityInd = -1;
    this.checkPointsService.resetActivity();
  }
}
