import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public view = 'intro';
  public plan = 'annual';
  public form = 'company-info';

  public title = 'ZEF Assignment';

  public company = 'Untitled';

  public pricingPlan = 'annuallyBasic';

  selectedValue: string;

  months = [
    {value: '1', viewValue: 'Jan'},
    {value: '2', viewValue: 'Feb'},
    {value: '3', viewValue: 'Mar'},
    {value: '4', viewValue: 'Apr'},
    {value: '5', viewValue: 'May'},
    {value: '6', viewValue: 'Jun'},
    {value: '7', viewValue: 'Jul'},
    {value: '8', viewValue: 'Aug'},
    {value: '9', viewValue: 'Sep'},
    {value: '10', viewValue: 'Oct'},
    {value: '11', viewValue: 'Nov'},
    {value: '12', viewValue: 'Dec'}
  ];

}
