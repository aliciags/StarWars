import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../../models/person.model';
import { Router } from '@angular/router';

@Component({
  selector: 'person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  @Input() person: Person = {
    name: '',
    birth_year: '',
    gender: '',
    mass: 0,
    height: 0,
  };
  @Input() id: string = '';
  person_id: number = 0;

  constructor(private router: Router) {  }

  ngOnInit(): void {
    let path = this.id.split('/');
    this.person_id = Number(path[path.length - 2])
  }

  goToPerson(): void{
    console.log(this.id);
    this.router.navigateByUrl(`/people/${this.person_id}`);
  }

}
