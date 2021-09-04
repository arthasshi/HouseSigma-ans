import { Component } from '@angular/core';
import { fromEvent, combineLatest } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Student = {};
  title = 'test';
  name = '';
  age = 0;
  sortBy = 0;
  result: { id: number; name: string; age: number }[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const nameIpt = document.getElementById('nameipt') as HTMLInputElement;
    const ageIpt = document.getElementById('ageipt') as HTMLInputElement;
    const sortSel = document.getElementById('sortsel') as HTMLInputElement;
    const nameWatch = fromEvent(nameIpt, 'input').pipe(
      debounceTime(500),
      map(e => (e.target as HTMLInputElement).value)
    );

    const ageWatch = fromEvent(ageIpt, 'input').pipe(
      debounceTime(500),
      map(e => (e.target as HTMLInputElement).value)
    );
    const sortWatch = fromEvent(sortSel, 'change').pipe(
      debounceTime(50),
      map(e => (e.target as HTMLInputElement).value)
    );
    combineLatest(nameWatch, ageWatch, sortWatch).subscribe(
      ([name, age, sort]) => {
        console.log([name, age, sort]);
        this.result = this.request(name, age, sort);
      }
    );
  }
  request(
    name: any,
    age: any,
    sortBy: any
  ): { id: number; name: string; age: number }[] {
    const students = [
      { id: 0, name: 'as', age: 12 },
      { id: 1, name: 'awes', age: 12 },
      { id: 2, name: 'afsss', age: 9 },
      { id: 3, name: 'qweqw', age: 9 },
      { id: 4, name: 'gfdgd', age: 22 },
      { id: 5, name: 'adsd', age: 77 },
      { id: 6, name: 'ghhfg', age: 66 },
      { id: 7, name: 'hty', age: 88 },
      { id: 8, name: 'jkghnv', age: 77 },
      { id: 9, name: 'kuyiy', age: 23 },
      { id: 10, name: 'ertert', age: 65 },
      { id: 11, name: 'mvb', age: 44 },
      { id: 12, name: 'hyighjg', age: 78 },
      { id: 13, name: 'nvfgfdd', age: 26 },
      { id: 14, name: 'jklioi', age: 30 }
    ];
    let res: { id: number; name: string; age: number }[] = [];
    res = students.filter(e => {
      return e.name.indexOf(name) > -1 && e.age == age;
    });
    if (sortBy != null) {
      let prop = '';
      let type = 0;
      switch (sortBy) {
        case '0':
          prop = 'id';
          type = 0;
          break;
        case '1':
          prop = 'id';
          type = 1;
          break;
        case '2':
          prop = 'age';
          type = 0;
          break;
        case '3':
          prop = 'age';
          type = 1;
          break;
      }
      res = res.sort(this.compare(prop, type));
    }
    return res;
  }
  compare(prop: string, sortTyle: number) {
    console.log(prop);
    console.log(sortTyle);
    return function(obj1: any, obj2: any) {
      let v1 = obj1[prop];
      let v2 = obj2[prop];
      if (sortTyle) {
        return v2 - v1;
      } else {
        return v1 - v2;
      }
    };
  }
}
