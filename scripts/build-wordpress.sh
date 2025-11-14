#!/bin/bash

# Script para generar el build y empaquetarlo para WordPress
# Alternativa bash (más simple pero requiere zip instalado)

echo "🚀 Iniciando build para WordPress..."
echo ""

# Colores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Variables
TIMESTAMP=$(date +%Y-%m-%d_%H-%M-%S)
PLUGIN_DIR="wordpress-plugin/jam-educar-react"
OUTPUT_DIR="wordpress-builds"
ZIP_NAME="jam-educar-react-${TIMESTAMP}.zip"

# Paso 1: Limpiar builds anteriores
echo "📦 Limpiando builds anteriores..."
rm -rf "$PLUGIN_DIR/dist"
mkdir -p "$OUTPUT_DIR"

# Paso 2: Ejecutar build
echo "⚡ Ejecutando npm run build..."
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Error al ejecutar el build${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Build completado${NC}"
echo ""

# Paso 3: Copiar dist al plugin
echo "📁 Copiando archivos al plugin..."
if [ ! -d "dist" ]; then
    echo -e "${RED}❌ No se encontró la carpeta dist/${NC}"
    exit 1
fi

cp -r dist "$PLUGIN_DIR/"
echo -e "${GREEN}✅ Archivos copiados correctamente${NC}"
echo ""

# Paso 4: Crear ZIP
echo "🗜️  Creando archivo ZIP..."
cd wordpress-plugin
zip -r "../$OUTPUT_DIR/$ZIP_NAME" jam-educar-react -x "*.git*" "*.DS_Store"
cd ..

if [ $? -eq 0 ]; then
    SIZE=$(du -h "$OUTPUT_DIR/$ZIP_NAME" | cut -f1)
    echo -e "${GREEN}✅ ZIP creado: $ZIP_NAME ($SIZE)${NC}"
    echo -e "${YELLOW}📍 Ubicación: $(pwd)/$OUTPUT_DIR/$ZIP_NAME${NC}"
    echo ""
    echo "🎉 ¡Listo para subir a WordPress!"
    echo ""
    echo "📝 Pasos siguientes:"
    echo "   1. Ve a WordPress Admin → Plugins → Añadir nuevo"
    echo "   2. Haz clic en 'Subir plugin'"
    echo "   3. Selecciona: $OUTPUT_DIR/$ZIP_NAME"
    echo "   4. Activa el plugin"
    echo ""
else
    echo -e "${RED}❌ Error al crear ZIP${NC}"
    exit 1
fi
