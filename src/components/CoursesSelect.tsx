import { courses } from '@/data/courses';

interface CoursesSelectProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const CoursesSelect = ({ value, onChange, required = false }: CoursesSelectProps) => {
  const cursosVisado = courses.filter((c) => c.categoria === 'visado-estancia');
  const cursosArraigo = courses.filter((c) => c.categoria === 'arraigo');

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="w-full px-4 py-2.5 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
      aria-label="Selecciona el curso de interés"
    >
      <option value="">Selecciona un curso</option>
      <optgroup label="Visado / Estancia por estudios">
        {cursosVisado.map((curso) => (
          <option key={curso.slug} value={curso.slug}>
            {curso.titulo}
          </option>
        ))}
      </optgroup>
      <optgroup label="Arraigo Socioformativo">
        {cursosArraigo.map((curso) => (
          <option key={curso.slug} value={curso.slug}>
            {curso.titulo}
          </option>
        ))}
      </optgroup>
    </select>
  );
};

export default CoursesSelect;
