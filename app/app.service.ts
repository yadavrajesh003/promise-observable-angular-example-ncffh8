import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {

  mydata: MyDataType[] = [
    {"id":1, "name":"John1"},
    {"id":2, "name":"Mark2"},
     {"id":3, "name":"John3"},
    {"id":4, "name":"Mark4"},
     {"id":5, "name":"John5"},
    {"id":6, "name":"Mark6"},
     {"id":7, "name":"John7"},
    {"id":8, "name":"Mark8"},
     {"id":9, "name":"John9"},
    {"id":10, "name":"Mark10"}
  ];

  myObservableArray: Observable<MyDataType[]> = new Observable<MyDataType[]>();
  constructor() { }

  getUsersForSubscription():Observable<MyDataType[]>
  {
    let data = new Observable<MyDataType[]>(observer => {
          setTimeout(() => {
            observer.next(this.mydata);
          }, 5000);
    });
    return data;
  }

  getUsersForPromise():Observable<MyDataType[]>
  {
    let data = new Observable<MyDataType[]>(observer => {
          setTimeout(() => {
            observer.next(this.mydata);
            observer.complete();
          }, 2000);
    });
    return data;
  }
}

export class MyDataType
{
  public id: number;
  public name: string;
}