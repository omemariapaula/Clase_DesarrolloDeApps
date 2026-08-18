import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Operacion = 'suma' | 'resta' | 'multiplicacion' | 'division';

interface RegistroHistorial {
  num1: number;
  num2: number;
  operacion: Operacion;
  resultado: number;
}

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class Calculadora {

  // Modelo del formulario
  num1: number | null = null;
  num2: number | null = null;
  operacion: Operacion = 'suma';

  // Estado de salida
  resultado: number | null = null;
  mensajeError: string = '';

  // Historial de operaciones, más reciente primero
  historial: RegistroHistorial[] = [];

  calcular(): void {
    this.mensajeError = '';
    this.resultado = null;

    if (this.num1 === null || this.num2 === null) {
      this.mensajeError = 'Ingresa ambos números.';
      return;
    }

    if (this.operacion === 'division' && this.num2 === 0) {
      this.mensajeError = 'No se puede dividir entre cero.';
      return;
    }

    const valor = this.ejecutarOperacion(this.num1, this.num2, this.operacion);
    this.resultado = valor;

    this.historial.unshift({
      num1: this.num1,
      num2: this.num2,
      operacion: this.operacion,
      resultado: valor
    });
  }

  private ejecutarOperacion(num1: number, num2: number, operacion: Operacion): number {
    switch (operacion) {
      case 'suma':
        return num1 + num2;
      case 'resta':
        return num1 - num2;
      case 'multiplicacion':
        return num1 * num2;
      case 'division':
        return num1 / num2;
    }
  }

  simboloOperacion(operacion: Operacion): string {
    const simbolos: Record<Operacion, string> = {
      suma: '+',
      resta: '-',
      multiplicacion: 'x',
      division: '/'
    };
    return simbolos[operacion];
  }

  limpiarHistorial(): void {
    this.historial = [];
  }
}