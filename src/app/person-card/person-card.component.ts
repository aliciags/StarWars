import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.model';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  person: Person = {
    name: '',
    birth_year: '',
    gender: '',
    mass: 0,
    height: 0,
  }

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getPerson(1);
  }

  getPerson(id: number, wookie?: string): void {
    this.personService.getPerson(id, wookie)
      .subscribe( (response: Person) => {
        console.log(response);
        this.person = response;
      }, 
      error => {
        console.log(error);
      })
  }

}
