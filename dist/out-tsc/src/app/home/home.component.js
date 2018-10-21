var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// my classes. pretty self explanatory
import { Entry } from '../entry';
import { ENTRIES } from '../list-entries';
import { Task } from '../task';
import { TASKS } from '../list-tasks';
import { PersonData } from '../persondata';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.entries = ENTRIES;
        this.tasks = TASKS;
        // todo: allow these to be edited
        this.personData = new PersonData("Jeremy", "Jordan", "50612 181st Ave NE", "Redmond, WA", "(206) 200-0248", "William Turo (Friend)", 12062018236);
    }
    ;
    HomeComponent.prototype.addEntry = function () {
        var important = false;
        var text = prompt('New Note:', '');
        if (text.trim() != "") {
            if (text.charAt(0) == '!') {
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
    };
    HomeComponent.prototype.addTask = function () {
        var done = false;
        var text = prompt('New Task:', '');
        if (text.trim() != "") {
            if (text.charAt(0) == '!') {
                done = true;
                text = text.substr(1);
            }
            this.tasks.unshift(new Task(text, done));
            console.log("new task: " + text);
        }
    };
    HomeComponent.prototype.togglePopup = function (id) {
        document.getElementById(id).classList.toggle('hide');
    };
    HomeComponent.prototype.toggleTask = function (task) {
        task.done = !task.done;
        console.log(task.txt + " is now done? " + task.done);
    };
    HomeComponent.prototype.playSound = function (file) {
        var audio = new Audio('assets/' + file);
        audio.play();
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [Router])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map