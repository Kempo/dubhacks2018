export class Entry  { 
    note: string; 
    time: string;
    important: boolean = false;
    constructor(note:string, time:string, important:boolean) {
      this.note = note;
      this.time = time;
      this.important = important;
    }
};