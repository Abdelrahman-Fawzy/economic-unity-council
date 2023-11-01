import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-registeration-modal',
  templateUrl: './registeration-modal.component.html',
  styleUrls: ['./registeration-modal.component.scss']
})
export class RegisterationModalComponent {

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  closeModal() {
    this.modalService.hide();
  }

}
