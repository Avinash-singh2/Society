import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

import { DevExtremeModule } from 'devextreme-angular';

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [DevExtremeModule],
  providers:[DataService],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.css'
})
export class LoansComponent {
  finalData:any;
  constructor(private DataService:DataService){
    this.finalData = DataService.getData();
  }
}
