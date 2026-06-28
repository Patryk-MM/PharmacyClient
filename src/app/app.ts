import { Component, signal } from '@angular/core';
import { Medication, PharmacyService } from './pharmacy-service';
import { OnInit } from '../../node_modules/@angular/core/types/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App implements OnInit {
  protected readonly title = signal('Pharmacy');

  medications: Medication[] = [];

  constructor(private pharmacyService: PharmacyService) { }

  ngOnInit(): void {
    this.pharmacyService.getMedications()
      .subscribe(data => {
        this.medications = data;
      });
  }
}
