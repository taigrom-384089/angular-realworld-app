// src/app/shared/interfaces/modal.interfaces.ts (Recommended to put in a shared folder)

import { Type } from "@angular/core";

// Interface for data passed INTO the modal
export interface DialogData<TInputModel = any> {
  header?: string | Type<any>;
  body?: string | Type<any>;
  footer?: string | Type<any>;

  title?: string;
  message?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  showCloseButton?: boolean;
  disableClose?: boolean;

  // The typed input model
  // Use a generic type parameter TInputModel, defaulting to 'any'
  // to allow for modals that don't need a specific input model.
  inputModel?: TInputModel;

  [key: string]: any; // Allows other generic properties
}

// Interface for data passed OUT of the modal after it closes
export interface DialogOutputData<TOutputModel = any> {
  confirmed: boolean; // Indicates if the user confirmed (e.g., clicked OK)
  outputModel?: TOutputModel; // The typed output model
  [key: string]: any; // Allows other generic properties
}

// Example of a specific input model
export interface ProductEditModel {
  id: number;
  name: string;
  price: number;
  description?: string;
}

// Example of a specific output model (could be the same as input or different)
export interface ProductUpdatedResult {
  productId: number;
  newName: string;
  isSaved: boolean;
}
