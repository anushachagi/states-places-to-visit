import { Component, OnInit } from '@angular/core';
import { SelectStateService } from './states.service';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  public displayStates: any;
  faLink = faLink;

  constructor(private readonly selectStateService: SelectStateService) { }

  ngOnInit(): void {
    this.selectStateService.getStates().subscribe((response: any) => {
      console.log('response', response);
      this.displayStates = response;
    });

  }

}
