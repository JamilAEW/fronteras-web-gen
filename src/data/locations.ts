export interface Location {
  name: string;
  address: string;
  district: string;
  zipCode: string;
  city: string;
  metro: string;
  phone?: string;
  email?: string;
}

export const locations: Location[] = [
  {
    name: 'Training Center and Information Office',
    address: 'Calle Doctor Esquerdo, 6',
    district: 'Salamanca',
    zipCode: '28028',
    city: 'Madrid',
    metro: 'Manuel Becerra (L2 and L6)',
    phone: '+34 658 40 39 06',
    email: 'info@educarsinfronteras.es',
  },
  {
    name: 'Information Office',
    address: 'Calle Marcelo Usera, 35',
    district: 'Usera',
    zipCode: '28026',
    city: 'Madrid',
    metro: 'Usera (L6) Mirasierra exit',
    phone: '+34 658 40 39 06',
    email: 'info@educarsinfronteras.es',
  },
  {
    name: 'Information Office',
    address: 'Paseo Marcelino Camacho, 54',
    district: 'Carabanchel',
    zipCode: '28025',
    city: 'Madrid',
    metro: 'Carabanchel (L5)',
    phone: '+34 658 40 39 06',
    email: 'info@educarsinfronteras.es',
  },
];
