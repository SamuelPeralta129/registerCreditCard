import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-credit-card-record',
  templateUrl: './credit-card-record.component.html',
  styleUrls: ['./credit-card-record.component.css']
})
export class CreditCardRecordComponent implements OnInit {
  cardList: any[] = [
    {title: 'Samuel Peralta', cardNumber: '2020202020', expirationDate: '11/23', cvv: '123'},
    {title: 'Juan Jose', cardNumber: '3030303030', expirationDate: '12/23', cvv: '124'}
  ]; 

  form: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) { 
    this.form = this.fb.group({
      title: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
      expirationDate: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
  }

  addCard(){
    const card: any = {
      title: this.form.get('title')?.value,
      cardNumber: this.form.get('cardNumber')?.value,
      expirationDate: this.form.get('expirationDate')?.value,
      cvv: this.form.get('cvv')?.value
    }
    this.cardList.push(card);
    this.toastr.success('Register Card Success!', 'Register Card');
    this.form.reset();
  }
  cardDelete(index: number){
    this.cardList.splice(index, 1);
    this.toastr.error('Delete Card Success!', 'Delete Card');
  }
}