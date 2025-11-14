# Plugin JAM Educar React - Guía de Instalación

## 📋 Requisitos Previos

1. WordPress instalado y funcionando
2. Build de React generado (`dist/` folder)
3. Acceso FTP o panel de administración de WordPress

## 🚀 Instalación

### Opción 1: Instalación Manual (Recomendada)

1. **Preparar el plugin:**
   - Copia la carpeta `jam-educar-react` completa
   - Coloca tu carpeta `dist/` (generada con `npm run build`) dentro de `jam-educar-react/`

2. **Estructura final del plugin:**
   ```
   jam-educar-react/
   ├── jam-educar-react.php
   ├── template-react-app.php
   ├── README.md
   └── dist/
       ├── index.html
       └── assets/
           ├── index-[hash].js
           ├── index-[hash].css
           └── [otras imágenes y archivos]
   ```

3. **Subir a WordPress:**
   - Conecta por FTP a tu servidor
   - Navega a `/wp-content/plugins/`
   - Sube la carpeta completa `jam-educar-react`

4. **Activar el plugin:**
   - Ve a WordPress Admin → Plugins
   - Busca "JAM Educar React App"
   - Haz clic en "Activar"

### Opción 2: Instalación por ZIP

1. Comprime la carpeta `jam-educar-react` en un archivo ZIP
2. WordPress Admin → Plugins → Añadir nuevo → Subir plugin
3. Selecciona el archivo ZIP y haz clic en "Instalar ahora"
4. Activa el plugin

## ✅ Verificación

Una vez activado el plugin:

1. **Página automática creada:**
   - Se creará automáticamente la página: `tudominio.com/jam-educar-app`
   - Esta página carga tu aplicación React en pantalla completa

2. **Usando el Shortcode (Opcional):**
   - Puedes usar `[jam_educar_app]` en cualquier página o post
   - La app se cargará dentro del contenido de esa página

## 🔧 Configuración

### Para actualizar la aplicación:

1. Genera un nuevo build: `npm run build`
2. Reemplaza la carpeta `dist/` en el plugin
3. Limpia la caché de WordPress (si usas plugin de caché)

### Para cambiar la URL:

Edita el archivo `jam-educar-react.php` y cambia:
```php
'post_name' => 'jam-educar-app', // Cambia esto por tu slug preferido
```

## 🎨 Personalización

### Ocultar header/footer de WordPress:

El plugin ya incluye CSS para ocultar el header y footer de WordPress en la página de la app. Si necesitas ajustes adicionales, edita el método `render_react_app()` en `jam-educar-react.php`.

### Cargar solo en páginas específicas:

Modifica la función `enqueue_react_app()` para cambiar dónde se carga la app:

```php
public function enqueue_react_app() {
    // Ejemplo: cargar solo en la página de inicio
    if (!is_front_page()) {
        return;
    }
    // ... resto del código
}
```

## ⚠️ Solución de Problemas

**La app no carga:**
- Verifica que la carpeta `dist/` esté en la ubicación correcta
- Revisa la consola del navegador para errores JS
- Confirma que el plugin esté activado

**Estilos rotos:**
- Limpia la caché de WordPress y del navegador
- Verifica que `base: './'` esté en `vite.config.ts`
- Confirma que uses HashRouter en lugar de BrowserRouter

**Error 404 en rutas:**
- Asegúrate de usar HashRouter (ya configurado)
- Las rutas deben ser: `tudominio.com/jam-educar-app#/cursos`

## 📞 Soporte

Para más información sobre el desarrollo de la app React, consulta la documentación de Lovable:
https://docs.lovable.dev/

## 📄 Licencia

GPL v2 o posterior
