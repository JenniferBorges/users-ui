import { Component, OnInit } from '@angular/core';
import { setupMap } from './mapSetup';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getSummary().subscribe(summary => {
      setupMap("mapId", summary)
    })
  }



}
