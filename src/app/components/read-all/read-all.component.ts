import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/models/todo";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-read-all",
  templateUrl: "./read-all.component.html",
  styleUrls: ["./read-all.component.css"],
})
export class ReadAllComponent implements OnInit {
  list: Todo[] = [];
  closed = 0;

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta;
      this.countClosed();
    });
  }

  countClosed():void {
    for(let todo of this.list) {
      if (todo.finalizado) {
        this.closed ++;
      } 
    }
  }
}
