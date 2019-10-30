import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators,FormGroup,FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
export interface CustomerID {
  value: string;
  viewValue: string;
}
export interface Sex {
  value: string;
  viewValue: string;
}
export interface Nationality {
  value: string;
  viewValue: string;
}
export interface Material {
  value: string;
  viewValue: string;
}
export interface Educational {
  value: string;
  viewValue: string;
}
export interface Business {
  value: string;
  viewValue: string;
}
export interface Occupation {
  value: string;
  viewValue: string;
}
export interface Code {
  value: string;
  viewValue: string;
}
export interface Department {
  value: string;
  viewValue: string;
}
export interface Job {
  value: string;
  viewValue: string;
}

export interface CardTo {
  value: string;
  viewValue: string;
}
export interface Tenor {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  ZipCode: string;
  CityType: string;
  AddressLine1: String;
  AddressLine2: string;
  AddressLine3:string;
  AddressLine4:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {CityType: 'Office City', ZipCode: '', AddressLine1: '', AddressLine2: '',AddressLine3: '',AddressLine4: ''},
  {CityType: 'Home City', ZipCode: '', AddressLine1: '', AddressLine2: '',AddressLine3: '',AddressLine4: ''},
];
export interface ContactPerson {
  Id:number;
  FistName:string;
  PhoneNumber:string;
  Relationship:string;
}
const ELEMENT_DATA2: ContactPerson[] = [
  {Id: 1, FistName: '', PhoneNumber: '', Relationship: ''},
  {Id: 2, FistName: '', PhoneNumber: '', Relationship: ''},
];
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent{
  

inputFormControl1 = new FormControl('', [
    Validators.required,
  ]);
inputFormControl2 = new FormControl('', [
    Validators.required,
  ]);
inputFormControl3 = new FormControl('', [
    Validators.required,
  ]);
inputFormControl4 = new FormControl('', [
    Validators.required,
  ]);
inputFormControl5 = new FormControl('', [
    Validators.required,
  ]);
inputFormControl6 = new FormControl('', [
    Validators.required,
  ]);
inputFormControl7 = new FormControl('', [
    Validators.required,
  ]);
inputFormControl8 = new FormControl('', [
    Validators.required,
  ]);
inputFormControl9 = new FormControl('', [
    Validators.required,
  ]);
inputFormControl10 = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
inputFormControl11 = new FormControl('', [
    Validators.email,
  ]);
inputFormControl12 = new FormControl('', [
    Validators.required,
  ]);
inputFormControl13 = new FormControl('', [
    Validators.required,
  ]);
inputFormControl14 = new FormControl('', [
    Validators.required,
  ]);
inputFormControl15 = new FormControl('', [
    Validators.required,
  ]);
inputFormControl16 = new FormControl('', [
    Validators.required,
  ]);
inputFormControl17 = new FormControl('', [
    Validators.required,
  ]);
inputFormControl18 = new FormControl('', [
    Validators.required,
  ]);
inputFormControl19 = new FormControl('', [
    Validators.required,
  ]);
inputFormControl20 = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();





  reactiveForm: FormGroup;
  constructor(private fb: FormBuilder) { 
      this.reactiveForm = this.fb.group({
        LastName:['',[Validators.required]],
      })
  }

  ngOnInit() {
  }
  CustomerIDProof: CustomerID[] = [
    {value: '0', viewValue: 'one'},
    {value: '1', viewValue: 'two'},
    {value: '2', viewValue: 'three'}
  ];
  sex: Sex[] = [
    {value: '0', viewValue: 'female'},
    {value: '1', viewValue: 'male'}
  ];
  Nationality: Nationality[] = [
    {value: '0', viewValue: 'one'},
    {value: '1', viewValue: 'two'}
  ];
  Material: Material[] = [
    {value: '0', viewValue: 'one'},
    {value: '1', viewValue: 'two'}
  ];
  Educational: Educational[] = [
    {value: '0', viewValue: 'one'},
    {value: '1', viewValue: 'two'},
    {value: '2', viewValue:'three'}
  ];
  Business: Business[] = [
    {value: '0', viewValue: 'one'},
    {value: '1', viewValue: 'two'},
    {value: '2', viewValue:'three'}
  ];
  Occupation: Occupation[] = [
    {value: '0', viewValue: 'one'},
    {value: '1', viewValue: 'two'},
    {value: '2', viewValue:'three'}
  ];
  Code: Code[] = [
    {value: '0', viewValue: 'one'},
    {value: '1', viewValue: 'two'},
    {value: '2', viewValue:'three'}
  ];
  Department: Department[] = [
    {value: '0', viewValue: 'one'},
    {value: '1', viewValue: 'two'},
    {value: '2', viewValue:'three'}
  ];
  Job: Job[] = [
    {value: '0', viewValue: 'one'},
    {value: '1', viewValue: 'two'},
    {value: '2', viewValue:'three'}
  ];

  displayedColumns: string[] = ['CityType', 'ZipCode', 'AddressLine1', 'AddressLine2','AddressLine3','AddressLine4'];
  dataSource = ELEMENT_DATA;

  displayedColumns2: string[] = ['Id', 'FirstName', 'PhoneNumber', 'Relationship'];
  dataSource2 = ELEMENT_DATA2;
  CardTo: CardTo[] = [
    {value: '0', viewValue: 'one'},
    {value: '1', viewValue: 'two'},
    {value: '2', viewValue:'three'}
  ];
  Tenor: Tenor[] = [
    {value: '0', viewValue: 'one'},
    {value: '1', viewValue: 'two'},
    {value: '2', viewValue:'three'}
  ];





}
