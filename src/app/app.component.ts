import { ChangeDetectorRef, Component, HostListener, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm, NgModel, FormGroup, FormBuilder } from '@angular/forms';
import { BsDatepickerConfig, BsDatepickerDirective, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';

import { getPrices, shop } from './shared/models/Cars';
import { Rectangle } from './shared/models/rectangle';
import { Square } from './shared/models/Square';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app-solid';

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective;

  @HostListener('window:scroll')
  onScrollEvent() {
    this.datepicker.hide();
  }
  
  form: FormGroup;
  datePickerConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();
  bsValue = new Date();
  message: string;
  maxDate = new Date();
  minDate = new Date();

  rectangle = new Rectangle();
  square = new Square();

   
  languages = [
    { key: "he", value: "Hebrew" },
    { key: "fr", value: "Français" },
    { key: "es", value: "Español" },
    { key: "pt-br", value: "Português" },
    { key: "en", value: "English" },
    { key: "ru", value: "Русский" }
  ];
  //locale = this.languages[0];
  locale = "he";
  locales = listLocales();

  constructor(private fr: FormBuilder, private bsLocaleService: BsLocaleService, private cdr: ChangeDetectorRef) {

    this.bsLocaleService.use(this.locale);

    this.datePickerConfig = Object.assign({}, { 
      containerClass: 'theme-dark-blue',
      showWeekNumbers: true,
      isAnimated: true,
      customTodayClass: 'today',
      //dateInputFormat: 'DD/MM/YYYY',
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2020, 12, 31) 
    });
  }

  onChangeLang(event) {
    let locale = event.target.value;
    console.log(locale);
    this.bsLocaleService.use(locale);
  }

  applyLocale(pop: any) {
    this.bsLocaleService.use(this.locale);
    pop.hide();
    pop.show();
  }

  ngOnInit() {
    //this.today = new Date();

    //let current = (<DOM>document.getElementById('dateOfBirth')).value;
    this.rectangle.setWidth(10);
    this.rectangle.setHeight(20);

    console.log(this.rectangle.areaOf());

    this.square.setWidth(20);
    this.square.setHeight(20);

    console.log(this.square.areaOf());

    //getPrice(shop);

    console.log(getPrices(shop));

    this.form = this.fr.group({
      dateOfBirth: this.bsValue
    });
  }

  ngAfterViewInit() {
    this.message = 'all done loading :)'
    this.cdr.detectChanges();
  }

}
