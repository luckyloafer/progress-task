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

@Component({
  selector: 'app-quality-package',
  templateUrl: './quality-package.component.html',
  styleUrls: ['./quality-package.component.scss'],
})
export class QualityPackageComponent implements OnInit {
  constructor(private checkPointsService: CheckPointsService) {}

  qualityPackages: string[] = [];
  selectedPackageIndex: number = -1;
  selectedTowerInd!: number;
  selectedActivityInd!: number;

  ngOnInit(): void {
    // this.checkPointsService.selectedTower.subscribe((val) => {
    //   this.selectedTowerInd = val.index;
    // });

    this.checkPointsService.selectedActivity.subscribe((val) => {
      this.selectedActivityInd = val.index;
      this.qualityPackages = this.checkPointsService.getPackages();
      this.selectedPackageIndex=-1;
      console.log(this.qualityPackages);
      this.checkPointsService.resetPackage();
    });

    // this.qualityPackages = this.checkPointsService.getPackages();
    // console.log(this.qualityPackages)
  }

  selectPackage(packageItem: string, index: number) {
    // this.selectedPackageIndex = index;
    // this.selectedPackage = {
    //   index: index,
    //   heading: 'QP-TW-Shuttering-' + index.toString(),
    //   package: packageItem,
    // };
    // this.selectedPackageChange.emit(this.selectedPackage);

    this.selectedPackageIndex=index;
    const p1 = 'QP-TW-Shuttering-' + index.toString()
    this.checkPointsService.selectPackage(index,p1,packageItem);
  }
}
