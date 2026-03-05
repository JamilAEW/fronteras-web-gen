export interface Sede {
  nombre: string;
  direccion: string;
  distrito: string;
  cp: string;
  ciudad: string;
  metro: string;
  telefono?: string;
  email?: string;
}

export const sedes: Sede[] = [
  {
    nombre: 'Centro de Formación y Oficina de Información',
    direccion: 'Calle Dr. Esquerdo, 6',
    distrito: 'Salamanca',
    cp: '28028',
    ciudad: 'Madrid',
    metro: 'Manuel Becerra (L2 y L6)',
    telefono: '+34 658 40 39 06',
    email: 'info@educarsinfronteras.es',
  },
  {
    nombre: 'Oficina de Información',
    direccion: 'Calle Marcelo Usera, 35',
    distrito: 'Usera',
    cp: '28026',
    ciudad: 'Madrid',
    metro: 'Usera (L6) salida Mirasierra',
    telefono: '+34 658 40 39 06',
    email: 'info@educarsinfronteras.es',
  },
  {
    nombre: 'Oficina de Información',
    direccion: 'Paseo Marcelino Camacho, 54',
    distrito: 'Carabanchel',
    cp: '28025',
    ciudad: 'Madrid',
    metro: 'Carabanchel (L5)',
    telefono: '+34 658 40 39 06',
    email: 'info@educarsinfronteras.es',
  },
  {
    nombre: 'Oficina de Información',
    direccion: 'Av. de la Albufera, 76',
    distrito: 'Puente de Vallecas',
    cp: '',
    ciudad: 'Madrid',
    metro: 'Nueva Numancia (L1)',
    telefono: '+34 657 111 506',
    email: 'info@educarsinfronteras.es',
  },
];
