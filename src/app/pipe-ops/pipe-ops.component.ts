import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-ops',
  templateUrl: './pipe-ops.component.html',
  styleUrls: ['./pipe-ops.component.css']
})
export class PipeOpsComponent implements OnInit {

  constructor() { }
  items = [
    {id:1, name:"maggi", price:20},
    {id:2, name: "pasta", price:50},
    {id:3, name: "dairy milk silk", price:75},
  ];
  ngOnInit(): void {
  }
}
