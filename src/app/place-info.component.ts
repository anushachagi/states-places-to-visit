import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-info',
  templateUrl: './place-info.component.html',
  styleUrls: ['./place-info.component.css']
})
export class PlaceInfoComponent implements OnInit {

  @Input() public placeDetail: any;

  constructor() { }

  ngOnInit(): void {
  }

}
