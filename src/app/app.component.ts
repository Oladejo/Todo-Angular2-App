import { Component } from '@angular/core';
import {TodoService} from './todo.service/todo.service';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent {
  title = 'app works!';
}
