import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PenguinService {
  url = 'http://localhost:9091/api';

  constructor(private http: HttpClient) {}

  public getPenguins() {
    let endPoints = '/penguins';
    return this.http.get(this.url + endPoints);
  }

  public getPenguinById(id: number) {
    let endPoints = '/penguins/' + id;
    return this.http.get(this.url + endPoints);
  }

  public addPenguin(penguinData: Object) {
    let endPoints = '/penguins';
    this.http.post(this.url + endPoints, penguinData).subscribe((data) => {
      console.log(data);
    });
  }

  public updatePenguin(id: number, penguinData: Object) {
    let endPoints = '/penguins/' + id;
    this.http.put(this.url + endPoints, penguinData).subscribe((data) => {
      console.log(data);
    });
  }

  public deletePenguin(id: number) {
    let endPoints = '/penguins/' + id;
    this.http.delete(this.url + endPoints).subscribe((data) => {
      console.log(data);
    });
  }
}
