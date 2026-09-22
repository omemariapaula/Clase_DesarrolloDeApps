import { IonicComponente } from '../models/ionic-componente';

export const IONIC_COMPONENTES: IonicComponente[] = [

  {
    nombre: 'Button',
    slug: 'button',
    descripcion: 'Elemento clickeable para usar en formularios o en cualquier lugar que necesite funcionalidad estándar de botón. Puede mostrar texto, íconos o ambos.',
    ejemploCodigo: `<ion-button fill="outline" expand="block" shape="round">
  Presionar
</ion-button>`,
    propiedades: [
      { nombre: 'color', tipo: 'string', porDefecto: 'undefined', descripcion: 'Color de la paleta de la app: primary, secondary, tertiary, success, warning, danger, light, medium, dark.' },
      { nombre: 'disabled', tipo: 'boolean', porDefecto: 'false', descripcion: 'Si es true, el usuario no puede interactuar con el botón.' },
      { nombre: 'expand', tipo: '"block" | "full"', porDefecto: 'undefined', descripcion: 'block = ancho completo con bordes redondeados; full = ancho completo sin bordes laterales.' },
      { nombre: 'fill', tipo: '"clear" | "default" | "outline" | "solid"', porDefecto: 'undefined', descripcion: 'Estilo del fondo: clear (transparente), outline (borde), solid (relleno).' },
      { nombre: 'shape', tipo: '"round"', porDefecto: 'undefined', descripcion: 'Si se define "round", el botón tiene esquinas más redondeadas.' },
      { nombre: 'size', tipo: '"default" | "large" | "small"', porDefecto: 'undefined', descripcion: 'Controla la altura y el padding del botón.' },
      { nombre: 'strong', tipo: 'boolean', porDefecto: 'false', descripcion: 'Si es true, activa un peso de fuente más grueso.' },
      { nombre: 'type', tipo: '"button" | "reset" | "submit"', porDefecto: '"button"', descripcion: 'Tipo nativo del botón HTML.' },
      { nombre: 'href', tipo: 'string', porDefecto: 'undefined', descripcion: 'Si se define, el botón se renderiza como un tag ancla (enlace).' }
    ],
    eventos: [
      { nombre: 'ionFocus', descripcion: 'Se emite cuando el botón recibe el foco.' },
      { nombre: 'ionBlur', descripcion: 'Se emite cuando el botón pierde el foco.' }
    ],
    slots: [
      { nombre: '(default)', descripcion: 'Contenido de texto del botón.' },
      { nombre: 'start', descripcion: 'Contenido colocado a la izquierda del texto (ej. un ícono).' },
      { nombre: 'end', descripcion: 'Contenido colocado a la derecha del texto.' },
      { nombre: 'icon-only', descripcion: 'Usado en un ícono cuando el botón no tiene texto.' }
    ],
    cssProperties: [
      { nombre: '--background', descripcion: 'Fondo del botón.' },
      { nombre: '--color', descripcion: 'Color del texto del botón.' },
      { nombre: '--border-radius', descripcion: 'Radio de las esquinas del botón.' },
      { nombre: '--padding-top / --padding-bottom', descripcion: 'Relleno vertical del botón.' }
    ]
  },

  {
    nombre: 'Card',
    slug: 'card',
    descripcion: 'Contenedor visual con sombra y bordes redondeados, usado para agrupar contenido relacionado como texto, imágenes y acciones.',
    ejemploCodigo: `<ion-card>
  <ion-card-header>
    <ion-card-subtitle>Subtítulo</ion-card-subtitle>
    <ion-card-title>Título de la tarjeta</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    Contenido de la tarjeta.
  </ion-card-content>
</ion-card>`,
    propiedades: [
      { nombre: 'button', tipo: 'boolean', porDefecto: 'false', descripcion: 'Si es true, la tarjeta se comporta como un botón clickeable con efecto ripple.' },
      { nombre: 'disabled', tipo: 'boolean', porDefecto: 'false', descripcion: 'Si es true, la interacción con la tarjeta está deshabilitada (solo aplica si button=true).' },
      { nombre: 'color', tipo: 'string', porDefecto: 'undefined', descripcion: 'Color de la paleta de la app aplicado a la tarjeta.' },
      { nombre: 'href', tipo: 'string', porDefecto: 'undefined', descripcion: 'Si se define, la tarjeta se renderiza como enlace.' }
    ],
    eventos: [],
    slots: [
      { nombre: '(default)', descripcion: 'Contenido de la tarjeta (header, content, imágenes, etc).' }
    ],
    cssProperties: [
      { nombre: '--background', descripcion: 'Fondo de la tarjeta.' },
      { nombre: '--color', descripcion: 'Color de texto de la tarjeta.' }
    ]
  },

  {
    nombre: 'Checkbox',
    slug: 'checkbox',
    descripcion: 'Control que permite seleccionar una opción booleana (marcado/desmarcado). Útil en listas de selección múltiple y formularios.',
    ejemploCodigo: `<ion-checkbox [(ngModel)]="aceptado" labelPlacement="end">
  Acepto los términos
</ion-checkbox>`,
    propiedades: [
      { nombre: 'checked', tipo: 'boolean', porDefecto: 'false', descripcion: 'Si el checkbox está marcado.' },
      { nombre: 'disabled', tipo: 'boolean', porDefecto: 'false', descripcion: 'Si es true, el usuario no puede interactuar.' },
      { nombre: 'indeterminate', tipo: 'boolean', porDefecto: 'false', descripcion: 'Muestra un estado indeterminado (ni marcado ni desmarcado), útil para "seleccionar todos".' },
      { nombre: 'value', tipo: 'any', porDefecto: '"on"', descripcion: 'Valor asociado al checkbox dentro de un formulario.' },
      { nombre: 'labelPlacement', tipo: '"start" | "end" | "fixed" | "stacked"', porDefecto: '"start"', descripcion: 'Posición de la etiqueta respecto al control.' },
      { nombre: 'justify', tipo: '"start" | "end" | "space-between"', porDefecto: '"space-between"', descripcion: 'Cómo se distribuyen label y checkbox dentro del elemento.' }
    ],
    eventos: [
      { nombre: 'ionChange', descripcion: 'Se emite cuando el valor (checked) cambia por interacción del usuario.' },
      { nombre: 'ionFocus', descripcion: 'Se emite cuando el checkbox recibe el foco.' },
      { nombre: 'ionBlur', descripcion: 'Se emite cuando el checkbox pierde el foco.' }
    ],
    slots: [
      { nombre: '(default)', descripcion: 'Texto de la etiqueta del checkbox.' }
    ],
    cssProperties: [
      { nombre: '--background', descripcion: 'Fondo del checkbox cuando no está marcado.' },
      { nombre: '--background-checked', descripcion: 'Fondo del checkbox cuando está marcado.' },
      { nombre: '--border-color', descripcion: 'Color del borde del checkbox.' },
      { nombre: '--checkmark-color', descripcion: 'Color del check (palomita).' }
    ]
  },

  {
    nombre: 'Chip',
    slug: 'chip',
    descripcion: 'Elemento compacto que representa una entrada, atributo o acción. Se usa comúnmente para etiquetas, filtros o tags removibles.',
    ejemploCodigo: `<ion-chip outline="true">
  <ion-icon name="pricetag"></ion-icon>
  <ion-label>Etiqueta</ion-label>
</ion-chip>`,
    propiedades: [
      { nombre: 'color', tipo: 'string', porDefecto: 'undefined', descripcion: 'Color de la paleta de la app aplicado al chip.' },
      { nombre: 'disabled', tipo: 'boolean', porDefecto: 'false', descripcion: 'Si es true, el chip no responde a interacción.' },
      { nombre: 'outline', tipo: 'boolean', porDefecto: 'false', descripcion: 'Si es true, muestra el chip con estilo de solo borde (sin relleno).' }
    ],
    eventos: [],
    slots: [
      { nombre: '(default)', descripcion: 'Contenido del chip (ícono, avatar, texto).' }
    ],
    cssProperties: []
  },

  {
    nombre: 'Datetime',
    slug: 'datetime',
    descripcion: 'Selector visual de fecha y/o hora presentado como calendario, rueda o combinación de ambos, según la plataforma y configuración.',
    ejemploCodigo: `<ion-datetime
  presentation="date"
  [(ngModel)]="fecha"
  [min]="'2024-01-01'"
  [max]="'2026-12-31'"
></ion-datetime>`,
    propiedades: [
      { nombre: 'presentation', tipo: '"date" | "date-time" | "month" | "month-year" | "time" | "time-date" | "year"', porDefecto: '"date-time"', descripcion: 'Qué partes de fecha/hora se muestran y editan.' },
      { nombre: 'min / max', tipo: 'string', porDefecto: 'undefined', descripcion: 'Fechas mínima y máxima seleccionables, en formato ISO 8601.' },
      { nombre: 'multiple', tipo: 'boolean', porDefecto: 'false', descripcion: 'Permite seleccionar múltiples fechas.' },
      { nombre: 'showDefaultButtons', tipo: 'boolean', porDefecto: 'false', descripcion: 'Muestra los botones por defecto de "Cancelar" y "Aceptar".' },
      { nombre: 'firstDayOfWeek', tipo: 'number', porDefecto: '0', descripcion: 'Primer día de la semana en el calendario (0 = domingo).' },
      { nombre: 'disabled', tipo: 'boolean', porDefecto: 'false', descripcion: 'Deshabilita la interacción con el componente.' }
    ],
    eventos: [
      { nombre: 'ionChange', descripcion: 'Se emite cuando el valor seleccionado cambia.' },
      { nombre: 'ionCancel', descripcion: 'Se emite cuando se presiona el botón Cancelar.' }
    ],
    slots: [
      { nombre: 'title', descripcion: 'Título personalizado en la parte superior del datetime.' },
      { nombre: 'buttons', descripcion: 'Botones personalizados de acción (reemplaza los de por defecto).' }
    ],
    cssProperties: [
      { nombre: '--background', descripcion: 'Fondo del componente datetime.' }
    ]
  },

  {
    nombre: 'Fab',
    slug: 'fab',
    descripcion: 'Botón de acción flotante (Floating Action Button) posicionado sobre el contenido, usado para la acción principal de una pantalla.',
    ejemploCodigo: `<ion-fab vertical="bottom" horizontal="end" slot="fixed">
  <ion-fab-button>
    <ion-icon name="add"></ion-icon>
  </ion-fab-button>
</ion-fab>`,
    propiedades: [
      { nombre: 'horizontal', tipo: '"start" | "end" | "center"', porDefecto: 'undefined', descripcion: 'Posición horizontal del FAB dentro del contenedor.' },
      { nombre: 'vertical', tipo: '"top" | "bottom" | "center"', porDefecto: 'undefined', descripcion: 'Posición vertical del FAB.' },
      { nombre: 'edge', tipo: 'boolean', porDefecto: 'false', descripcion: 'Si es true, el FAB se posiciona a la mitad entre header/footer y contenido.' },
      { nombre: 'activated', tipo: 'boolean', porDefecto: 'false', descripcion: 'Si es true, muestra el estado activado del FAB (lista de botones desplegada).' }
    ],
    eventos: [],
    slots: [
      { nombre: '(default)', descripcion: 'Botones FAB (ion-fab-button) y listas (ion-fab-list).' }
    ],
    cssProperties: []
  },

  {
    nombre: 'Grid',
    slug: 'grid',
    descripcion: 'Sistema de rejilla de 12 columnas para organizar contenido en filas y columnas de forma responsiva, similar a Bootstrap.',
    ejemploCodigo: `<ion-grid>
  <ion-row>
    <ion-col size="6">Columna 1</ion-col>
    <ion-col size="6">Columna 2</ion-col>
  </ion-row>
</ion-grid>`,
    propiedades: [
      { nombre: 'fixed', tipo: 'boolean', porDefecto: 'false', descripcion: 'Si es true, el grid tiene un ancho máximo fijo en vez de ocupar el 100%.' }
    ],
    eventos: [],
    slots: [
      { nombre: '(default)', descripcion: 'Filas (ion-row) que a su vez contienen columnas (ion-col).' }
    ],
    cssProperties: []
  },

  {
    nombre: 'Icon',
    slug: 'icon',
    descripcion: 'Muestra íconos de la librería Ionicons o SVGs personalizados, usados para reforzar visualmente acciones o contenido.',
    ejemploCodigo: `<ion-icon name="heart" size="large" color="danger"></ion-icon>`,
    propiedades: [
      { nombre: 'name', tipo: 'string', porDefecto: 'undefined', descripcion: 'Nombre del ícono de Ionicons a mostrar.' },
      { nombre: 'src', tipo: 'string', porDefecto: 'undefined', descripcion: 'URL específica de un ícono SVG a cargar en vez de usar "name".' },
      { nombre: 'color', tipo: 'string', porDefecto: 'undefined', descripcion: 'Color de la paleta de la app aplicado al ícono.' },
      { nombre: 'size', tipo: '"large" | "small"', porDefecto: 'undefined', descripcion: 'Tamaño predefinido del ícono.' },
      { nombre: 'flipRtl', tipo: 'boolean', porDefecto: 'undefined', descripcion: 'Si el ícono debe voltearse automáticamente en layouts RTL.' },
      { nombre: 'lazy', tipo: 'boolean', porDefecto: 'false', descripcion: 'Si es true, retrasa la carga del ícono hasta que esté cerca del viewport.' }
    ],
    eventos: [
      { nombre: 'ionError', descripcion: 'Se emite cuando el ícono no se pudo cargar correctamente.' }
    ],
    slots: [],
    cssProperties: []
  },

  {
    nombre: 'Infinite Scroll',
    slug: 'infinite-scroll',
    descripcion: 'Dispara un evento para cargar más contenido automáticamente cuando el usuario llega cerca del final del scroll, evitando paginación manual.',
    ejemploCodigo: `<ion-infinite-scroll (ionInfinite)="cargarMas($event)">
  <ion-infinite-scroll-content
    loadingSpinner="bubbles"
    loadingText="Cargando más...">
  </ion-infinite-scroll-content>
</ion-infinite-scroll>`,
    propiedades: [
      { nombre: 'disabled', tipo: 'boolean', porDefecto: 'false', descripcion: 'Si es true, el infinite scroll no se dispara.' },
      { nombre: 'position', tipo: '"bottom" | "top"', porDefecto: '"bottom"', descripcion: 'Posición desde donde se detecta el scroll: abajo o arriba de la lista.' },
      { nombre: 'threshold', tipo: 'string', porDefecto: '"15%"', descripcion: 'Distancia desde el borde del scroll a la cual se dispara la carga.' }
    ],
    eventos: [
      { nombre: 'ionInfinite', descripcion: 'Se emite cuando se alcanza el umbral definido y se debe cargar más contenido.' }
    ],
    slots: [],
    cssProperties: []
  },

  {
    nombre: 'Input',
    slug: 'input',
    descripcion: 'Campo de texto para captura de datos del usuario, con soporte para distintos tipos como texto, número, contraseña o correo.',
    ejemploCodigo: `<ion-input
  label="Nombre"
  labelPlacement="stacked"
  placeholder="Escribe tu nombre"
  [(ngModel)]="nombre"
  clearInput="true">
</ion-input>`,
    propiedades: [
      { nombre: 'type', tipo: '"text" | "number" | "password" | "email" | "tel" | "url" | "search" ...', porDefecto: '"text"', descripcion: 'Tipo de dato esperado, afecta el teclado en móviles.' },
      { nombre: 'value', tipo: 'string | number', porDefecto: '""', descripcion: 'Valor actual del input.' },
      { nombre: 'placeholder', tipo: 'string', porDefecto: 'undefined', descripcion: 'Texto de ejemplo mostrado cuando el input está vacío.' },
      { nombre: 'disabled', tipo: 'boolean', porDefecto: 'false', descripcion: 'Deshabilita la interacción con el input.' },
      { nombre: 'readonly', tipo: 'boolean', porDefecto: 'false', descripcion: 'El valor no puede modificarse, pero sí puede seleccionarse/copiarse.' },
      { nombre: 'clearInput', tipo: 'boolean', porDefecto: 'false', descripcion: 'Muestra un botón "x" para limpiar el campo.' },
      { nombre: 'label', tipo: 'string', porDefecto: 'undefined', descripcion: 'Texto de la etiqueta asociada al input.' },
      { nombre: 'labelPlacement', tipo: '"start" | "end" | "fixed" | "stacked" | "floating"', porDefecto: '"start"', descripcion: 'Posición de la etiqueta respecto al campo.' },
      { nombre: 'counter', tipo: 'boolean', porDefecto: 'false', descripcion: 'Muestra un contador de caracteres si se definió maxlength.' }
    ],
    eventos: [
      { nombre: 'ionInput', descripcion: 'Se emite en cada cambio de valor mientras el usuario escribe.' },
      { nombre: 'ionChange', descripcion: 'Se emite cuando el valor cambia y el input pierde el foco.' },
      { nombre: 'ionFocus', descripcion: 'Se emite cuando el input recibe el foco.' },
      { nombre: 'ionBlur', descripcion: 'Se emite cuando el input pierde el foco.' }
    ],
    slots: [
      { nombre: 'start', descripcion: 'Contenido antes del campo de texto (ej. un ícono).' },
      { nombre: 'end', descripcion: 'Contenido después del campo de texto.' },
      { nombre: 'label', descripcion: 'Etiqueta personalizada (alternativa a la propiedad label).' }
    ],
    cssProperties: [
      { nombre: '--background', descripcion: 'Fondo del input.' },
      { nombre: '--color', descripcion: 'Color del texto ingresado.' },
      { nombre: '--placeholder-color', descripcion: 'Color del texto de placeholder.' },
      { nombre: '--padding-start / --padding-end', descripcion: 'Relleno horizontal del input.' }
    ]
  },

  {
    nombre: 'Item',
    slug: 'item',
    descripcion: 'Bloque de contenido usado dentro de listas o formularios, capaz de contener labels, inputs, íconos y botones alineados horizontalmente.',
    ejemploCodigo: `<ion-item button="true" detail="true" lines="full">
  <ion-icon name="person" slot="start"></ion-icon>
  <ion-label>Perfil</ion-label>
</ion-item>`,
    propiedades: [
      { nombre: 'button', tipo: 'boolean', porDefecto: 'false', descripcion: 'Si es true, el item se comporta como un botón clickeable con efecto ripple.' },
      { nombre: 'detail', tipo: 'boolean', porDefecto: 'undefined', descripcion: 'Muestra una flecha ">" indicando navegación (común en iOS).' },
      { nombre: 'disabled', tipo: 'boolean', porDefecto: 'false', descripcion: 'Deshabilita la interacción con el item.' },
      { nombre: 'lines', tipo: '"full" | "inset" | "none"', porDefecto: 'undefined', descripcion: 'Cómo se muestra la línea divisoria inferior del item.' },
      { nombre: 'color', tipo: 'string', porDefecto: 'undefined', descripcion: 'Color de la paleta de la app aplicado al item.' },
      { nombre: 'href', tipo: 'string', porDefecto: 'undefined', descripcion: 'Si se define, el item se renderiza como enlace.' }
    ],
    eventos: [],
    slots: [
      { nombre: 'start', descripcion: 'Contenido al inicio del item (íconos, avatares, checkboxes).' },
      { nombre: 'end', descripcion: 'Contenido al final del item (íconos, botones, notas).' },
      { nombre: '(default)', descripcion: 'Contenido principal, típicamente ion-label.' }
    ],
    cssProperties: [
      { nombre: '--background', descripcion: 'Fondo del item.' },
      { nombre: '--padding-start', descripcion: 'Relleno izquierdo del item.' },
      { nombre: '--inner-border-width', descripcion: 'Ancho del borde interno (línea divisoria).' }
    ]
  },

  {
    nombre: 'List',
    slug: 'list',
    descripcion: 'Contenedor que agrupa varios ion-item en una sola columna vertical. Es la base típica de menús, listados de datos e historiales.',
    ejemploCodigo: `<ion-list lines="inset" inset="true">
  <ion-item>Elemento 1</ion-item>
  <ion-item>Elemento 2</ion-item>
  <ion-item>Elemento 3</ion-item>
</ion-list>`,
    propiedades: [
      { nombre: 'lines', tipo: '"full" | "inset" | "none"', porDefecto: 'undefined', descripcion: 'Define cómo se muestran las líneas divisorias entre items de la lista, salvo que cada item lo sobreescriba.' },
      { nombre: 'inset', tipo: 'boolean', porDefecto: 'false', descripcion: 'Si es true, la lista se muestra con márgenes y bordes redondeados en vez de ancho completo.' }
    ],
    eventos: [],
    slots: [
      { nombre: '(default)', descripcion: 'Elementos ion-item o ion-item-sliding que conforman la lista.' }
    ],
    cssProperties: [
      { nombre: '--background', descripcion: 'Fondo de la lista.' }
    ]
  },

  {
    nombre: 'Loading',
    slug: 'loading',
    descripcion: 'Overlay que indica una operación en curso, bloqueando la interacción con la pantalla mientras muestra un spinner y un mensaje opcional. Se crea de forma programática (no como etiqueta HTML directa).',
    ejemploCodigo: `// En el componente TypeScript:
async mostrarCarga() {
  const loading = await this.loadingCtrl.create({
    message: 'Cargando...',
    duration: 2000,
    spinner: 'circles'
  });
  await loading.present();
}`,
    propiedades: [
      { nombre: 'message', tipo: 'string | IonicSafeString', porDefecto: 'undefined', descripcion: 'Texto mostrado junto al spinner mientras carga.' },
      { nombre: 'duration', tipo: 'number', porDefecto: '0', descripcion: 'Tiempo en milisegundos antes de cerrarse automáticamente (0 = no se cierra solo).' },
      { nombre: 'spinner', tipo: '"bubbles" | "circles" | "circular" | "crescent" | "dots" | "lines" | ...', porDefecto: 'según plataforma', descripcion: 'Tipo de animación de carga a mostrar.' },
      { nombre: 'backdropDismiss', tipo: 'boolean', porDefecto: 'false', descripcion: 'Si es true, se puede cerrar tocando fuera del loading.' },
      { nombre: 'showBackdrop', tipo: 'boolean', porDefecto: 'true', descripcion: 'Muestra un fondo oscuro semi-transparente detrás del loading.' }
    ],
    eventos: [
      { nombre: 'ionLoadingDidPresent', descripcion: 'Se emite cuando el loading termina de mostrarse.' },
      { nombre: 'ionLoadingDidDismiss', descripcion: 'Se emite cuando el loading se cierra por completo.' }
    ],
    slots: [],
    cssProperties: [
      { nombre: '--background', descripcion: 'Fondo del recuadro del loading.' },
      { nombre: '--spinner-color', descripcion: 'Color del spinner de carga.' }
    ]
  },

  {
    nombre: 'Menu',
    slug: 'menu',
    descripcion: 'Panel lateral deslizable (drawer) que aparece desde un borde de la pantalla, usado normalmente para navegación principal de la app.',
    ejemploCodigo: `<ion-menu contentId="main-content">
  <ion-content>
    <ion-list>
      <ion-item>Inicio</ion-item>
      <ion-item>Ajustes</ion-item>
    </ion-list>
  </ion-content>
</ion-menu>

<ion-router-outlet id="main-content"></ion-router-outlet>`,
    propiedades: [
      { nombre: 'contentId', tipo: 'string', porDefecto: 'undefined', descripcion: 'Id del elemento de contenido principal asociado a este menú.' },
      { nombre: 'side', tipo: '"start" | "end"', porDefecto: '"start"', descripcion: 'Lado de la pantalla desde donde se despliega el menú.' },
      { nombre: 'type', tipo: '"overlay" | "reveal" | "push"', porDefecto: 'según plataforma', descripcion: 'Estilo de animación al abrir/cerrar el menú.' },
      { nombre: 'disabled', tipo: 'boolean', porDefecto: 'false', descripcion: 'Si es true, el menú no puede abrirse.' },
      { nombre: 'swipeGesture', tipo: 'boolean', porDefecto: 'true', descripcion: 'Permite abrir/cerrar el menú deslizando el dedo.' }
    ],
    eventos: [
      { nombre: 'ionWillOpen', descripcion: 'Se emite justo antes de que el menú se abra.' },
      { nombre: 'ionDidOpen', descripcion: 'Se emite cuando el menú terminó de abrirse.' },
      { nombre: 'ionWillClose', descripcion: 'Se emite justo antes de que el menú se cierre.' },
      { nombre: 'ionDidClose', descripcion: 'Se emite cuando el menú terminó de cerrarse.' }
    ],
    slots: [
      { nombre: '(default)', descripcion: 'Contenido del menú, típicamente ion-header y ion-content.' }
    ],
    cssProperties: []
  },

  {
    nombre: 'Modal',
    slug: 'modal',
    descripcion: 'Ventana emergente que se superpone al contenido principal, usada para formularios, detalles o confirmaciones sin salir de la pantalla actual.',
    ejemploCodigo: `<ion-modal trigger="abrir-modal">
  <ng-template>
    <ion-header>
      <ion-toolbar>
        <ion-title>Detalle</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      Contenido del modal
    </ion-content>
  </ng-template>
</ion-modal>

<ion-button id="abrir-modal">Abrir modal</ion-button>`,
    propiedades: [
      { nombre: 'isOpen', tipo: 'boolean', porDefecto: 'false', descripcion: 'Controla si el modal está abierto (para control manual con binding).' },
      { nombre: 'trigger', tipo: 'string', porDefecto: 'undefined', descripcion: 'Id del elemento que al presionarse abre el modal automáticamente.' },
      { nombre: 'backdropDismiss', tipo: 'boolean', porDefecto: 'true', descripcion: 'Permite cerrar el modal tocando el fondo oscuro.' },
      { nombre: 'breakpoints', tipo: 'number[]', porDefecto: 'undefined', descripcion: 'Puntos de altura (0 a 1) para convertir el modal en un "sheet" deslizable.' },
      { nombre: 'initialBreakpoint', tipo: 'number', porDefecto: 'undefined', descripcion: 'Breakpoint inicial en el que se abre el modal tipo sheet.' },
      { nombre: 'showBackdrop', tipo: 'boolean', porDefecto: 'true', descripcion: 'Muestra el fondo oscuro detrás del modal.' }
    ],
    eventos: [
      { nombre: 'ionModalDidPresent', descripcion: 'Se emite cuando el modal termina de mostrarse.' },
      { nombre: 'ionModalDidDismiss', descripcion: 'Se emite cuando el modal se cierra por completo.' },
      { nombre: 'didDismiss', descripcion: 'Se emite al cerrarse, incluye el dato devuelto por el modal si aplica.' }
    ],
    slots: [],
    cssProperties: [
      { nombre: '--background', descripcion: 'Fondo del contenido del modal.' },
      { nombre: '--height / --width', descripcion: 'Alto y ancho del modal (útil en desktop).' }
    ]
  },

  {
    nombre: 'Popover',
    slug: 'popover',
    descripcion: 'Overlay pequeño y contextual que aparece cerca del elemento que lo activó. Útil para menús de opciones o información adicional breve.',
    ejemploCodigo: `<ion-popover trigger="abrir-popover" side="bottom">
  <ng-template>
    <ion-content class="ion-padding">
      Opciones disponibles
    </ion-content>
  </ng-template>
</ion-popover>

<ion-button id="abrir-popover">Ver opciones</ion-button>`,
    propiedades: [
      { nombre: 'trigger', tipo: 'string', porDefecto: 'undefined', descripcion: 'Id del elemento que al presionarse abre el popover.' },
      { nombre: 'side', tipo: '"top" | "bottom" | "start" | "end"', porDefecto: '"bottom"', descripcion: 'Lado del elemento activador donde aparece el popover.' },
      { nombre: 'dismissOnSelect', tipo: 'boolean', porDefecto: 'false', descripcion: 'Si es true, el popover se cierra automáticamente al seleccionar una opción interna.' },
      { nombre: 'showBackdrop', tipo: 'boolean', porDefecto: 'true', descripcion: 'Muestra un fondo semi-transparente detrás del popover.' },
      { nombre: 'arrow', tipo: 'boolean', porDefecto: 'true', descripcion: 'Muestra una pequeña flecha apuntando al elemento activador (en iOS).' }
    ],
    eventos: [
      { nombre: 'ionPopoverDidPresent', descripcion: 'Se emite cuando el popover termina de mostrarse.' },
      { nombre: 'ionPopoverDidDismiss', descripcion: 'Se emite cuando el popover se cierra.' }
    ],
    slots: [],
    cssProperties: [
      { nombre: '--background', descripcion: 'Fondo del contenido del popover.' },
      { nombre: '--width', descripcion: 'Ancho del popover.' }
    ]
  },

  {
    nombre: 'Radio',
    slug: 'radio',
    descripcion: 'Control de selección única dentro de un grupo (ion-radio-group), donde solo una opción puede estar activa a la vez.',
    ejemploCodigo: `<ion-radio-group [(ngModel)]="opcionSeleccionada">
  <ion-radio value="a">Opción A</ion-radio>
  <ion-radio value="b">Opción B</ion-radio>
  <ion-radio value="c">Opción C</ion-radio>
</ion-radio-group>`,
    propiedades: [
      { nombre: 'value', tipo: 'any', porDefecto: 'undefined', descripcion: 'Valor asociado a este radio dentro del grupo.' },
      { nombre: 'disabled', tipo: 'boolean', porDefecto: 'false', descripcion: 'Deshabilita la interacción con este radio.' },
      { nombre: 'labelPlacement', tipo: '"start" | "end" | "fixed" | "stacked"', porDefecto: '"start"', descripcion: 'Posición de la etiqueta respecto al control.' },
      { nombre: 'justify', tipo: '"start" | "end" | "space-between"', porDefecto: '"space-between"', descripcion: 'Distribución entre label y el control radio.' }
    ],
    eventos: [
      { nombre: 'ionFocus', descripcion: 'Se emite cuando el radio recibe el foco.' },
      { nombre: 'ionBlur', descripcion: 'Se emite cuando el radio pierde el foco.' }
    ],
    slots: [
      { nombre: '(default)', descripcion: 'Texto de la etiqueta del radio.' }
    ],
    cssProperties: [
      { nombre: '--color-checked', descripcion: 'Color del radio cuando está seleccionado.' }
    ]
  },

  {
    nombre: 'Range',
    slug: 'range',
    descripcion: 'Control deslizante para seleccionar un valor numérico (o un rango de dos valores) dentro de un intervalo definido.',
    ejemploCodigo: `<ion-range
  [(ngModel)]="volumen"
  min="0"
  max="100"
  pin="true"
  color="secondary">
  <ion-icon slot="start" name="volume-low"></ion-icon>
  <ion-icon slot="end" name="volume-high"></ion-icon>
</ion-range>`,
    propiedades: [
      { nombre: 'min / max', tipo: 'number', porDefecto: '0 / 100', descripcion: 'Valores mínimo y máximo seleccionables.' },
      { nombre: 'step', tipo: 'number', porDefecto: '1', descripcion: 'Incremento entre valores seleccionables.' },
      { nombre: 'dualKnobs', tipo: 'boolean', porDefecto: 'false', descripcion: 'Si es true, muestra dos controles para seleccionar un rango en vez de un valor único.' },
      { nombre: 'pin', tipo: 'boolean', porDefecto: 'false', descripcion: 'Muestra el valor numérico actual sobre el control mientras se arrastra.' },
      { nombre: 'snaps', tipo: 'boolean', porDefecto: 'false', descripcion: 'El control se ajusta (snap) a los valores definidos por "step".' },
      { nombre: 'ticks', tipo: 'boolean', porDefecto: 'true', descripcion: 'Muestra marcas visuales en cada "step" (solo si snaps=true).' },
      { nombre: 'disabled', tipo: 'boolean', porDefecto: 'false', descripcion: 'Deshabilita la interacción con el range.' }
    ],
    eventos: [
      { nombre: 'ionInput', descripcion: 'Se emite continuamente mientras se arrastra el control.' },
      { nombre: 'ionChange', descripcion: 'Se emite cuando el usuario suelta el control tras cambiar el valor.' }
    ],
    slots: [
      { nombre: 'start', descripcion: 'Contenido antes del slider (ej. un ícono).' },
      { nombre: 'end', descripcion: 'Contenido después del slider.' },
      { nombre: 'label', descripcion: 'Etiqueta del range.' }
    ],
    cssProperties: [
      { nombre: '--bar-background', descripcion: 'Color de la barra sin rellenar.' },
      { nombre: '--bar-background-active', descripcion: 'Color de la barra ya recorrida.' },
      { nombre: '--knob-background', descripcion: 'Color del control deslizante (knob).' }
    ]
  },

  {
    nombre: 'Searchbar',
    slug: 'searchbar',
    descripcion: 'Campo de búsqueda con ícono y botón de limpiar integrados, pensado para filtrar listas o resultados en tiempo real.',
    ejemploCodigo: `<ion-searchbar
  placeholder="Buscar..."
  [(ngModel)]="busqueda"
  [debounce]="300"
  showCancelButton="focus">
</ion-searchbar>`,
    propiedades: [
      { nombre: 'placeholder', tipo: 'string', porDefecto: '"Search"', descripcion: 'Texto de ejemplo mostrado cuando el campo está vacío.' },
      { nombre: 'value', tipo: 'string', porDefecto: '""', descripcion: 'Valor actual de la búsqueda.' },
      { nombre: 'debounce', tipo: 'number', porDefecto: '250', descripcion: 'Milisegundos de espera antes de emitir ionInput tras dejar de escribir.' },
      { nombre: 'showCancelButton', tipo: '"always" | "focus" | "never"', porDefecto: '"never"', descripcion: 'Cuándo mostrar el botón de cancelar.' },
      { nombre: 'showClearButton', tipo: '"always" | "focus" | "never"', porDefecto: '"always"', descripcion: 'Cuándo mostrar el botón "x" para limpiar el texto.' },
      { nombre: 'disabled', tipo: 'boolean', porDefecto: 'false', descripcion: 'Deshabilita la interacción con la barra de búsqueda.' },
      { nombre: 'type', tipo: '"text" | "email" | "number" | "search" | "tel" | "url"', porDefecto: '"search"', descripcion: 'Tipo de teclado a mostrar en móviles.' }
    ],
    eventos: [
      { nombre: 'ionInput', descripcion: 'Se emite cuando el valor cambia (respetando el debounce).' },
      { nombre: 'ionChange', descripcion: 'Se emite cuando el valor cambia y el campo pierde el foco.' },
      { nombre: 'ionCancel', descripcion: 'Se emite al presionar el botón de cancelar.' },
      { nombre: 'ionClear', descripcion: 'Se emite al presionar el botón de limpiar.' }
    ],
    slots: [],
    cssProperties: [
      { nombre: '--background', descripcion: 'Fondo del campo de búsqueda.' },
      { nombre: '--color', descripcion: 'Color del texto ingresado.' },
      { nombre: '--icon-color', descripcion: 'Color del ícono de lupa.' }
    ]
  },

  {
    nombre: 'Segment',
    slug: 'segment',
    descripcion: 'Grupo de botones que actúan como pestañas para alternar entre vistas o filtros dentro de la misma pantalla, sin navegar a otra página.',
    ejemploCodigo: `<ion-segment [(ngModel)]="vistaActual">
  <ion-segment-button value="uno">
    <ion-label>Uno</ion-label>
  </ion-segment-button>
  <ion-segment-button value="dos">
    <ion-label>Dos</ion-label>
  </ion-segment-button>
</ion-segment>`,
    propiedades: [
      { nombre: 'value', tipo: 'string | number', porDefecto: 'undefined', descripcion: 'Valor del segmento actualmente seleccionado.' },
      { nombre: 'disabled', tipo: 'boolean', porDefecto: 'false', descripcion: 'Deshabilita la interacción con todo el segment.' },
      { nombre: 'scrollable', tipo: 'boolean', porDefecto: 'false', descripcion: 'Permite hacer scroll horizontal cuando los botones no caben en pantalla.' },
      { nombre: 'swipeGesture', tipo: 'boolean', porDefecto: 'true', descripcion: 'Permite cambiar de segmento deslizando el dedo.' }
    ],
    eventos: [
      { nombre: 'ionChange', descripcion: 'Se emite cuando el valor seleccionado cambia.' }
    ],
    slots: [
      { nombre: '(default)', descripcion: 'Botones ion-segment-button que conforman las pestañas.' }
    ],
    cssProperties: [
      { nombre: '--background', descripcion: 'Fondo del segment.' },
      { nombre: '--indicator-color', descripcion: 'Color del indicador que resalta el segmento seleccionado.' }
    ]
  }

];