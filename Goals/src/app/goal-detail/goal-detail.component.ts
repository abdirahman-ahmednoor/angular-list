import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Output() isComplete = new EventEmitter<boolean>();

  @Input()
  goal!: Goal;
  
  @Output() isRead = new EventEmitter<boolean>();

  
  deleteGoal(read:boolean) {
    this.isRead.emit(read);
  }

  upvote() {
    this.goal.upvote++;
  }

  downvote() {
    this.goal.downvote++;
  }

  goalDelete(complete:boolean) {
    this.isComplete.emit(complete);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
