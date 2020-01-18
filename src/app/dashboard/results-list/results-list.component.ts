import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/app/shared/results.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styles: []
})
export class ResultsListComponent implements OnInit {

  constructor(private service: ResultsService) { }

  ngOnInit() {
    this.service.refreshList();
  }

}
