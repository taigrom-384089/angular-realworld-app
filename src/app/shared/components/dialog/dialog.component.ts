// src/app/components/generic-modal/generic-modal.component.ts

import { Component, Inject, OnInit, Type } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from "@angular/material/dialog";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { DialogData } from "src/app/core/models/dialog.model";

@Component({
  selector: "app-dialog",
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
// GenericModalComponent is typed to return a ModalOutputData
export class DialogComponent implements OnInit {
  // Check if the input is a string or a component type
  isComponent(content: string | Type<any>): content is Type<any> {
    return typeof content !== "string";
  }

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    // If disableClose is true, prevent closing by escape key or backdrop click
    if (this.data.disableClose) {
      this.dialogRef.disableClose = true;
    }
  }

  onConfirm(): void {
    this.dialogRef.close(true); // Indicate confirmation
  }

  onCancel(): void {
    this.dialogRef.close(false); // Indicate cancellation
  }

  onClose(): void {
    this.dialogRef.close(); // Close without specific action result
  }
}
