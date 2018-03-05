import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-form-food',
  templateUrl: './form-food.component.html',
  styleUrls: ['./form-food.component.css']
})
export class FormFoodComponent implements OnInit {
  foods: Object[];
  newFood: Object = []
  show: boolean = true;

  constructor() { }

  ngOnInit() {
    this.foods = foods

  }

  addFood(){
    console.log("Add food has been called");
    this.foods.push(this.newFood)
    console.log(this.foods)
    console.log(this.show)

  }

}
