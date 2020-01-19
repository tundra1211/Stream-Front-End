import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/app/shared/results.service';


@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styles: []
})
export class ResultsListComponent implements OnInit {
  results: any = [];

  constructor(private service: ResultsService) { }

  ngOnInit() {
this.loadResults();
  }

  loadResults() {
    return this.service.getResults().subscribe((data: {}) => {
      this.results = data;
    });
  }



}
