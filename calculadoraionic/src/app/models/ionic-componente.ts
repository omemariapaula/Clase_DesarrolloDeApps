export interface PropiedadDoc {
  nombre: string; tipo: string; porDefecto: string; descripcion: string;
}
export interface EventoDoc { nombre: string; descripcion: string; }
export interface SlotDoc { nombre: string; descripcion: string; }
export interface CssPropDoc { nombre: string; descripcion: string; }

export interface IonicComponente {
  nombre: string;
  slug: string;
  descripcion: string;
  ejemploCodigo: string;
  propiedades: PropiedadDoc[];
  eventos: EventoDoc[];
  slots: SlotDoc[];
  cssProperties: CssPropDoc[];
}