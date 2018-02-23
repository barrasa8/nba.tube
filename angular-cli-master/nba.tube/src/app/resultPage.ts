export class ResultPage{
  current:number;
  hasNext:boolean;
  hasPrevious:boolean

  constructor(current:number,hasNext:boolean,hasPrevious:boolean){
    this.current=current
    this.hasNext = hasNext;
    this.hasPrevious = hasPrevious;
  }
}
