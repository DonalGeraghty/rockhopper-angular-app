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
    age: 7,
    name: 'Pingu',
  };

  updateData: Penguin = {
    id: 1,
    age: 5,
    name: 'Pinga',
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
    this.penguinForm.age = Number(this.penguinForm.age)
    this.penguinForm.name = String(this.penguinForm.name)
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

  refresh(): void {
    window.location.reload();
  }
}
