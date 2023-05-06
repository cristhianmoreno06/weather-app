import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-data-history',
  templateUrl: './data-history.component.html',
  styleUrls: ['./data-history.component.css']
})
export class DataHistoryComponent implements OnInit {
  data: any = [];
  result: any = [];
  private error: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 15;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.dataHistory();
  }

  dataHistory() {
    return this.http.get('http://weather_services.local/api/humidity-history')
      .subscribe((data: any) => {
        this.result = data;
      },error => this.error = error);
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.dataHistory();
  }
}
