import { inject, Injectable } from "@angular/core";
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from "@angular/material/dialog";
import { Observable } from "rxjs";
import { DialogData } from "../models/dialog.model";
import { DialogComponent } from "src/app/shared/components/dialog/dialog.component";

@Injectable({
  providedIn: "root",
})
export class DialogService {
  private dialog = inject(MatDialog);

  openModal(data: DialogData, config?: MatDialogConfig): Observable<any> {
    const dialogConfig = {
      ...config, // Spread any additional config passed in
      data: data,
      panelClass: "generic-modal-panel", // Optional: for custom styling specific to this modal
    };

    const dialogRef: MatDialogRef<DialogComponent, any> = this.dialog.open(
      DialogComponent,
      dialogConfig
    );

    return dialogRef.afterClosed();
  }

  // Convenience methods for common modal types
  openConfirmDialog(
    title: string,
    message: string,
    confirmButtonText: string = "Confirm",
    cancelButtonText: string = "Cancel"
  ): Observable<boolean> {
    return this.openModal(
      {
        title: title,
        message: message,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
        showCloseButton: false, // Typically no close button on a simple confirm
      },
      {
        width: "400px",
      }
    );
  }

  openAlertDialog(
    title: string,
    message: string,
    okButtonText: string = "OK"
  ): Observable<any> {
    return this.openModal(
      {
        title: title,
        message: message,
        footer: `<button mat-button mat-dialog-close color="primary">${okButtonText}</button>`, // Simple string footer
        showCloseButton: true,
      },
      {
        width: "400px",
      }
    );
  }
}
