import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CheckPointsService } from 'src/app/check-points.service';

interface packageType{
  packageId:string,
  p1?:string,
  p2:string
}

@Component({
  selector: 'app-quality-package',
  templateUrl: './quality-package.component.html',
  styleUrls: ['./quality-package.component.scss'],
})
export class QualityPackageComponent implements OnInit {
  constructor(private checkPointsService: CheckPointsService) {}

  qualityPackages!: packageType[]
  selectedPackageIndex: number = -1;
  selectedTowerInd!: number;
  selectedActivityInd!: number;
  searchTerm: string = '';
  filteredQualityPackages!:packageType[]

  ngOnInit(): void {
    
    this.checkPointsService.selectedActivity.subscribe((val) => {
      this.selectedActivityInd = val.index;
      this.qualityPackages = this.checkPointsService.getPackages();
      this.filteredQualityPackages = this.qualityPackages;
      this.selectedPackageIndex=-1;
      console.log(this.qualityPackages);
      this.checkPointsService.resetPackage();
    });

  }

  filterPackages(){
    if(this.searchTerm){
      this.filteredQualityPackages = this.checkPointsService.getFilteredPackages(this.searchTerm);
    }
    else{
      this.filteredQualityPackages=this.qualityPackages;
    }
  }
  onSearchTermChange(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.filterPackages();
    this.checkPointsService.resetPackage();
    this.selectedPackageIndex=-1;
  }

  selectPackage(p2: string, index: number,packageId:string) {
    console.log(packageId)
    this.selectedPackageIndex=index;
    const p1 = 'QP-TW-Shuttering-' + index.toString()
    this.checkPointsService.selectPackage(index,p1,p2,packageId);
  }
}
