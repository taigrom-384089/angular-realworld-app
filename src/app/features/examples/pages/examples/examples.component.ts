import { Component, inject } from "@angular/core";
import { ProductComponent } from "../../components/modals/product/product.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { DialogService } from "src/app/core/services/dialog.service";

@Component({
  selector: "app-examples-page",
  templateUrl: "./examples.component.html",
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  standalone: true,
})
export default class ExamplesComponent {
  private dialogService = inject(DialogService);

  openSimpleModal(): void {
    this.dialogService
      .openModal({
        header: "Simple Modal Header",
        title: "Simple Dialog",
        message: "This is a simple modal with default header and footer.",
        confirmButtonText: "Got It!",
        cancelButtonText: "Maybe Later",
      })
      .subscribe((result) => {
        console.log("Simple Modal closed with:", result);
        if (result) {
          alert("You clicked Got It!");
        } else {
          alert("You clicked Maybe Later!");
        }
      });
  }

  openModalWithCustomHeaderBodyFooter(): void {
    this.dialogService
      .openModal({
        header: "Title of Custom Modal",
        body: ProductComponent,
        footer: "Footer Text Here",
        // You can pass additional data here that custom components might need
        extraDataForCustomBody: "Some additional info for the body",
      })
      .subscribe((result) => {
        console.log("Custom Modal closed with:", result);
        if (result) {
          alert("You clicked Proceed!");
        } else {
          alert("You clicked No Thanks!");
        }
      });
  }

  openModalWithCustomStringBody(): void {
    this.dialogService
      .openModal(
        {
          title: "Information Alert",
          body: "This modal has a custom string as its body content. It is useful for displaying simple messages without creating a separate component.",
          confirmButtonText: "Understood",
          showCloseButton: true,
          disableClose: true, // User can only close by clicking the button
        },
        {
          width: "500px",
        }
      )
      .subscribe((result) => {
        console.log("String Body Modal closed with:", result);
      });
  }

  openConfirmViaService(): void {
    this.dialogService
      .openConfirmDialog(
        "Are you sure?",
        "This action cannot be undone. Do you wish to continue?",
        "Yes, Delete",
        "No, Cancel"
      )
      .subscribe((result) => {
        console.log("Confirm Dialog Result:", result);
        if (result) {
          alert("Item Deleted!");
        } else {
          alert("Deletion Cancelled!");
        }
      });
  }

  openAlertViaService(): void {
    this.dialogService
      .openAlertDialog(
        "Operation Complete!",
        "Your request has been processed successfully."
      )
      .subscribe(() => {
        console.log("Alert Dialog Closed");
      });
  }
}
