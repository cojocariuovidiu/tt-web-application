import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private errorService: ErrorService) { }

  ngOnInit() {
    this.errorService.errorOccurred.subscribe(error => {
      this.openSnackBar(error.msg, error.error);
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
