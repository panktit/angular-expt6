import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ops',
  templateUrl: './directive-ops.component.html',
  styleUrls: ['./directive-ops.component.css']
})
export class DirectiveOpsComponent implements OnInit {

  constructor() { }
  color = "lightslategrey";
  ngOnInit(): void {
  }

}
