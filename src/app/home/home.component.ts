import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// my classes. pretty self explanatory
import { Entry } from '../entry';
import { ENTRIES } from '../list-entries';
import { Task } from '../task';
import { TASKS } from '../list-tasks';
import { PersonData } from '../persondata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  entries = ENTRIES;
  tasks = TASKS;
  tab: string = "recent";
  public personData;
  constructor(private router: Router) {
    // todo: allow these to be edited
    this.personData = new PersonData("Jeremy", "Jordan", "50612 181st Ave NE", "Redmond, WA", "(206) 200-0248", "William Turo (Friend)", 12062018236);
	
  };
  
  addEntry() {
	var important = false;
	var text = prompt('New Note:', '');
	if (text.trim() != "") {
		if (text.charAt(0) == '!')
		{
			important = true;
			text = text.substr(1);
		}
		var d = new Date();
		var time = "";
		if (d.getHours() >= 13) {
			time = (d.getHours() - 12).toString() + ":" + d.getMinutes().toString() + "pm";
		}
		else if (d.getHours() == 0) {
			time = "12:" + d.getMinutes().toString() + "am";
		}
		else {
			time = (d.getHours()).toString() + ":" + d.getMinutes().toString() + "am";
		}
		
		this.entries.unshift(new Entry(text, ((d.getMonth() + 1).toString() + '/' + d.getDate().toString() + "\n" + 
										   time), important));
		console.log("new entry: " + text);
	}
  }
  
  addTask() {
	var done = false;
	var text = prompt('New Task:', '');
	if (text.trim() != "") {
		if (text.charAt(0) == '!')
		{
			done = true;
			text = text.substr(1);
		}		
		this.tasks.unshift(new Task(text, done));
		console.log("new task: " + text);
	}
  }
  
  togglePopup(id) {
	  document.getElementById(id).classList.toggle('hide');
  }
  
  toggleTask(task) {
	  task.done = !task.done;
	  console.log(task.txt + " is now done? " +task.done);
  }
  
  playSound(file) {
	var audio = new Audio('assets/' + file);
    audio.play();
  }
  
  setTab(state) {
	  this.tab = state;
	  console.log(this.tab);
  }

  ngOnInit() {
  }
}
 
