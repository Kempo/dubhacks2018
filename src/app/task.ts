export class Task  { 
    txt: string; 
    done: boolean = false;
    constructor(txt:string, done:boolean) {
      this.txt = txt;
      this.done = done;
    }
};