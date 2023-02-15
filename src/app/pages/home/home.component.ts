import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  contents:Array<any> = [
    {
      id: 1,
      Image:"../assets/aotss1.jpg",
      name: "Attack on Titan season 1 ",
      price: '100.000d',
      studio : "WIT",
      OutOfOrder: false
    },
    {
      id: 2,
      Image:"../assets/aot2.jpg",
      name: "Berserk 1997 ",
      price: '700.000d',
      studio : "OLM",
      OutOfOrder: false
    },
    {
      id: 3,
      Image:"../assets/aotss3p1.jpg",
      name: "Attack on Titan season 3 part 1 ",
      price: '200.000d',
      studio : "WIT",
      OutOfOrder: false
    },
    {
      id: 4,
      Image:"../assets/aotss3p2.jpg",
      name: "Attack on Titan season 3 part 2 ",
      price: '200.000d',
      studio : "WIT",
      OutOfOrder: false
    },
    {
      id: 5,
      Image:"../assets/aotss4p1.jpg",
      name: "Attack on Titan season 4 part 1",
      price: '500.000d',
      studio : "MAPPA",
      OutOfOrder: true
    },
    {
      id: 6,
      Image:"../assets/aotss4p2.jpg",
      name: "Attack on Titan season 4 part 2 ",
      price: '500.000d',
      studio : "MAPPA",
      OutOfOrder: true
    },
    {
      id: 7,
      Image:"../assets/Vinland-Saga.jpg",
      name: "Vinland Saga ",
      price: '200.000d',
      studio : "MAPPA",
      OutOfOrder: true
    },

    {
      id: 8,
      Image:"../assets/bleach.jpg",
      name: "Bleach ",
      price: '240.000d',
      studio : "PIERROT",
      OutOfOrder: true
    },
    {
      id: 9,
      Image:"../assets/narutoda.jpg",
      name: "Naruto Dattebayo",
      price: '100.000d',
      studio : "PIERROT",
      OutOfOrder: false
    },
    {
      id: 10,
      Image:"../assets/narutoshippu.jpg",
      name: "Naruto Shippuden ",
      price: '150.000d',
      studio : "PIERROT",
      OutOfOrder: true
    },
    {
      id: 11,
      Image:"../assets/blade.jpg",
      name: "Cyberpunk Edgerunners ",
      price: '200.000d',
      studio : "TRIGGER",
      OutOfOrder: true
    },
    {
      id: 12,
      Image:"../assets/Vinland-Saga2.jpg",
      name: "Vinland Saga season 2 ",
      price: '300.000d',
      studio : "MAPPA",
      OutOfOrder: true
    },

  ]
  itemChange(item: any){
    console.log(item);
  }
}
