import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PenguinService {
  url = 'https://localhost:44315/api';

  constructor(private http: HttpClient) {}

  public getPenguins() {
    let endPoints = '/penguins/';
    return this.http.get(this.url + endPoints);
  }

  public getPenguinById() {
    let id: number = 1;
    let endPoints = '/penguins/' + id;
    return this.http.get(this.url + endPoints);
  }

  public addPenguin(penguinData: Object) {
    let endPoints = '/penguins';
    this.http.post(this.url + endPoints, penguinData).subscribe((data) => {
      console.log(data);
    });
  }

  public updatePenguin(penguinData: Object) {
    let endPoints = '/penguins/1';
    this.http.put(this.url + endPoints, penguinData).subscribe((data) => {
      console.log(data);
    });
  }

  public deletePenguin(id: number) {
    let endPoints = '/penguins/'+id;
    this.http.delete(this.url + endPoints).subscribe((data) => {
      console.log(data);
    });
  }
}
