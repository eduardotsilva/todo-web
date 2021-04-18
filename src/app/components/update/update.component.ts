import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Todo } from "src/app/models/todo";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.css"],
})
export class UpdateComponent implements OnInit {
  todo: Todo = {
    titulo: "",
    descricao: "",
    dataParaFinalizar: new Date(),
    finalizado: false,
  };

  constructor(private router: Router, private service: TodoService) {}

  ngOnInit() {}

  create(): void {
    this.formataData();
    this.service.create(this.todo).subscribe(
      (resposta) => {
        this.service.message("To-do criado com sucesso!");
        this.router.navigate([""]);
      },
      (erro) => {
        this.service.message("Falha ao criar To-do");
        this.router.navigate([""]);
      }
    );
  }

  cancel(): void {
    this.router.navigate([""]);
  }

  formataData(): void {
    let data = new Date(this.todo.dataParaFinalizar);
    this.todo.dataParaFinalizar = `${data.getDate()}/${
      data.getMonth() + 1
    }/${data.getFullYear()}`;
  }
}
