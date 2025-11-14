# Scripts de Build para WordPress

Este directorio contiene scripts automatizados para generar el build de React y empaquetarlo listo para WordPress.

## 🚀 Uso Rápido

### Opción 1: Script Node.js (Recomendado)

```bash
# Instalar dependencia necesaria (solo la primera vez)
npm install archiver fs-extra

# Ejecutar script
node scripts/build-wordpress.js
```

**Ventajas:**
- Multiplataforma (funciona en Windows, Mac, Linux)
- No requiere herramientas externas
- Más información durante el proceso

### Opción 2: Script Bash (Linux/Mac)

```bash
# Dar permisos de ejecución (solo la primera vez)
chmod +x scripts/build-wordpress.sh

# Ejecutar script
./scripts/build-wordpress.sh
```

**Ventajas:**
- Más rápido
- No requiere dependencias de Node adicionales
- Requiere `zip` instalado en el sistema

## 📦 Qué hace el script

1. **Limpia builds anteriores** - Elimina `dist/` del plugin
2. **Ejecuta `npm run build`** - Genera el build de producción de React
3. **Copia archivos** - Mueve `dist/` a `wordpress-plugin/jam-educar-react/`
4. **Crea ZIP** - Empaqueta todo el plugin en `wordpress-builds/jam-educar-react-[timestamp].zip`

## 📁 Estructura resultante

```
proyecto/
├── wordpress-builds/
│   └── jam-educar-react-2024-01-15_14-30-00.zip  ← ESTE archivo subes a WordPress
│
└── wordpress-plugin/
    └── jam-educar-react/
        ├── dist/              ← Build de React copiado aquí
        ├── jam-educar-react.php
        ├── template-react-app.php
        └── README.md
```

## 🔄 Workflow completo

1. **Desarrollo:** Haz cambios en tu código React
2. **Build:** Ejecuta el script de build
3. **Upload:** Sube el ZIP generado a WordPress
4. **Activar:** Activa/Actualiza el plugin en WordPress Admin

## ⚙️ Personalización

### Cambiar nombre del ZIP

Edita la variable en el script:

```javascript
// En build-wordpress.js
const ZIP_NAME = `mi-plugin-${TIMESTAMP}.zip`;
```

```bash
# En build-wordpress.sh
ZIP_NAME="mi-plugin-${TIMESTAMP}.zip"
```

### Cambiar directorio de salida

```javascript
// En build-wordpress.js
const OUTPUT_DIR = path.join(ROOT_DIR, 'mi-carpeta-builds');
```

## 🐛 Solución de problemas

**Error: "command not found: npm"**
- Asegúrate de tener Node.js instalado

**Error: "archiver not found"**
```bash
npm install archiver fs-extra
```

**Error: "zip not found" (script bash)**
```bash
# Ubuntu/Debian
sudo apt-get install zip

# Mac
brew install zip
```

**El ZIP está corrupto**
- Verifica que `npm run build` se ejecute correctamente
- Asegúrate de tener permisos de escritura en el directorio

## 📝 Notas

- Cada build genera un ZIP con timestamp único
- Los builds se guardan en `wordpress-builds/` (esta carpeta se crea automáticamente)
- El script NO elimina ZIPs antiguos automáticamente
- Asegúrate de tener espacio en disco suficiente
