import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectStateService } from '../states/states.service';

@Component({
  selector: 'app-state-interesting-facts',
  templateUrl: './state-interesting-facts.component.html',
  styleUrls: ['./state-interesting-facts.component.css']
})
export class StateInterestingFactsComponent implements OnInit {

  private stateId!: number;
  public stateInfo: any;
  public selectedPlace: any;

  constructor(private readonly selectStateService: SelectStateService,
              private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.stateId = params.stateId;
      this.selectStateService.getStateInfo(this.stateId).subscribe((info => {
      console.log('State Info', info);
      this.stateInfo = info;
      }));
    });
  }

}
