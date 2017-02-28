import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public view = 'company-info';
  public plan = 'annual';
  public form = 'add-payment'

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

  years = [
    {value: '2017', viewValue: '2017'},
    {value: '2018', viewValue: '2018'},
    {value: '2019', viewValue: '2019'},
    {value: '2020', viewValue: '2020'}
  ];

  public price(price){
    console.log(price);
  }

}
