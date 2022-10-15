import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http:HttpClient) { }

  getCandidate(){
    return this.http.get('assets/MOCK_DATA.json');
  }
}
