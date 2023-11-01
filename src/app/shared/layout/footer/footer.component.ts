import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegisterationModalComponent } from '../../registeration-modal/registeration-modal.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  register() {
    this.modalRef = this.modalService.show(RegisterationModalComponent, { class: 'modal-xl modal-dialog-centered' });
  }

}
