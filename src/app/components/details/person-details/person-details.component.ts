import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/person.model';
import { PersonService } from '../../../services/person.service';


@Component({
  selector: 'person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

  private id: number = 0;
  person: Person = {};

  constructor(private route: ActivatedRoute, private personService: PersonService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getPerson(this.id);
    });
  }

  getPerson(id: number, wookie?: string): void {
    this.personService.getPerson(id, wookie)
      .subscribe((response: Person) => {
        console.log(response);
        this.person = response;
      }, 
      error => {
        console.log(error);
      })
  }

}
