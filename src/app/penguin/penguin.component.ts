import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Penguin } from './penguin';
import { PenguinService } from './penguin.service';

@Component({
  selector: 'app-penguin',
  templateUrl: './penguin.component.html',
  styleUrls: ['./penguin.component.css'],
})
export class PenguinComponent implements OnInit {
  penguinList: Penguin;
  penguin: Penguin;

  penguinForm: Penguin = {
    Age: 7,
    Name: 'Pingu',
  };

  updateData: Penguin = {
    Id: 1,
    Age: 5,
    Name: 'Pinga',
  };

  constructor(private penguinService: PenguinService) {}

  ngOnInit(): void {
    this.getPenguins();
  }

  getPenguins() {
    this.penguinService
      .getPenguins()
      .subscribe((data: Penguin) => (this.penguinList = data));
  }

  getPenguin() {
    this.penguinService
      .getPenguinById()
      .subscribe((data: Penguin) => (this.penguin = data));
  }

  addPenguin() {
    this.penguinForm.Age = Number(this.penguinForm.Age);
    this.penguinForm.Name = String(this.penguinForm.Name);
    this.penguinService.addPenguin(this.penguinForm);
    this.getPenguins();
  }

  updatePenguin() {
    this.penguinService.updatePenguin(this.updateData);
    this.getPenguins();
  }

  deletePenguin(id: number) {
    this.penguinService.deletePenguin(id);
    this.getPenguins();
  }

  test() {
    console.log('Component LOG');
    this.penguinService
      .getTest()
      .subscribe((data: Penguin) => (this.penguin = data));
    console.log('DATA: ' + this.penguin);
  }
}
