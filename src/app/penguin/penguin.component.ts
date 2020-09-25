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
  penguin: Penguin = { Age: 0, Name: '' };

  penguinForm: Penguin = {
    Age: 7,
    Name: 'Pingu',
  };

  updateData: Penguin = {
    Id: 1,
    Age: 99,
    Name: 'UPDATED',
  };

  constructor(private penguinService: PenguinService) {}

  ngOnInit(): void {
    console.log('ngOnInit()');
    this.getPenguins();
  }

  getPenguins() {
    console.log('getPenguins()');
    this.penguinService
      .getPenguins()
      .subscribe((data: Penguin) => (this.penguinList = data));
  }

  getPenguin(id: number) {
    // TODO
    console.log('getPenguin(' + id + ')');
    this.penguinService
      .getPenguinById(id)
      .subscribe((data: Penguin) => (this.penguin = data));
    console.log('LOG:\t', this.penguin.Name);
  }

  addPenguin() {
    console.log('addPenguin()');
    this.penguinForm.Age = Number(this.penguinForm.Age);
    this.penguinForm.Name = String(this.penguinForm.Name);
    this.penguinService.addPenguin(this.penguinForm);
    this.getPenguins();
  }

  updatePenguin(id: number) {
    console.log('updatePenguin(' + id + ')');
    this.penguinService.updatePenguin(id, this.updateData);
    this.getPenguins();
  }

  deletePenguin(id: number) {
    console.log('deletePenguin(' + id + ')');
    this.penguinService.deletePenguin(id);
    this.getPenguins();
  }
}
