import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonList
} from '@ionic/angular';

interface Operacion {
  numero1: number;
  numero2: number;
  tipo: string;
  resultado: number;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonList
  ],
})
export class Tab1Page {
  numero1: number = 0;
  numero2: number = 0;
  operacionSeleccionada: 'suma' | 'resta' | 'multiplicacion' | 'division' = 'suma';
  resultado: number | null = null;
  errorMensaje: string = '';
  historial: Operacion[] = [];

  constructor() {}

  calcular(): void {
    this.errorMensaje = '';
    let resultado: number;

    switch (this.operacionSeleccionada) {
      case 'suma': resultado = this.numero1 + this.numero2; break;
      case 'resta': resultado = this.numero1 - this.numero2; break;
      case 'multiplicacion': resultado = this.numero1 * this.numero2; break;
      case 'division':
        if (this.numero2 === 0) {
          this.errorMensaje = 'No se puede dividir entre cero';
          this.resultado = null;
          return;
        }
        resultado = this.numero1 / this.numero2;
        break;
    }

    this.resultado = resultado;
    this.historial.unshift({
      numero1: this.numero1,
      numero2: this.numero2,
      tipo: this.simboloOperacion(this.operacionSeleccionada),
      resultado: resultado
    });
  }

  simboloOperacion(tipo: string): string {
    switch (tipo) {
      case 'suma': return '+';
      case 'resta': return '-';
      case 'multiplicacion': return '×';
      case 'division': return '÷';
      default: return '';
    }
  }

  limpiarHistorial(): void {
    this.historial = [];
  }
}