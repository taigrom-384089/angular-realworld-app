import { Component } from "@angular/core";
import { CommonModule } from "@angular/common"; // Import CommonModule
import { FormsModule } from "@angular/forms"; // Import FormsModule for ngModel
import { MatInputModule } from "@angular/material/input"; // Import MatInputModule
import { MatFormFieldModule } from "@angular/material/form-field"; // Import MatFormFieldModule

@Component({
  selector: "app-custom-body",
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatFormFieldModule],
  template: `
    <div>
      <p>This is a custom body component with an input field:</p>
      <mat-form-field appearance="fill">
        <mat-label>Your Name</mat-label>
        <input matInput [(ngModel)]="name" />
      </mat-form-field>
      <p *ngIf="name">Hello, {{ name }}!</p>
    </div>
  `,
})
export class ProductComponent {
  name: string = "";
}
