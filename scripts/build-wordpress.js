#!/usr/bin/env node

/**
 * Script para generar el build y empaquetarlo para WordPress
 * Uso: node scripts/build-wordpress.js
 */

import { execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import archiver from 'archiver';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.join(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const PLUGIN_DIR = path.join(ROOT_DIR, 'wordpress-plugin', 'jam-educar-react');
const PLUGIN_DIST_DIR = path.join(PLUGIN_DIR, 'dist');
const OUTPUT_DIR = path.join(ROOT_DIR, 'wordpress-builds');
const TIMESTAMP = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
const ZIP_NAME = `jam-educar-react-${TIMESTAMP}.zip`;

console.log('🚀 Iniciando build para WordPress...\n');

// Paso 1: Limpiar directorios previos
console.log('📦 Limpiando builds anteriores...');
if (fs.existsSync(PLUGIN_DIST_DIR)) {
  fs.removeSync(PLUGIN_DIST_DIR);
}
if (fs.existsSync(OUTPUT_DIR)) {
  fs.removeSync(OUTPUT_DIR);
}
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// Paso 2: Ejecutar build de Vite
console.log('⚡ Ejecutando npm run build...');
try {
  execSync('npm run build', { 
    cwd: ROOT_DIR, 
    stdio: 'inherit' 
  });
  console.log('✅ Build completado\n');
} catch (error) {
  console.error('❌ Error al ejecutar el build:', error.message);
  process.exit(1);
}

// Paso 3: Copiar dist al plugin
console.log('📁 Copiando archivos al plugin...');
if (!fs.existsSync(DIST_DIR)) {
  console.error('❌ No se encontró la carpeta dist/');
  process.exit(1);
}

try {
  fs.copySync(DIST_DIR, PLUGIN_DIST_DIR);
  console.log('✅ Archivos copiados correctamente\n');
} catch (error) {
  console.error('❌ Error al copiar archivos:', error.message);
  process.exit(1);
}

// Paso 4: Crear ZIP del plugin
console.log('🗜️  Creando archivo ZIP...');
const outputPath = path.join(OUTPUT_DIR, ZIP_NAME);
const output = fs.createWriteStream(outputPath);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  const sizeInMB = (archive.pointer() / 1024 / 1024).toFixed(2);
  console.log(`✅ ZIP creado: ${ZIP_NAME} (${sizeInMB} MB)`);
  console.log(`📍 Ubicación: ${outputPath}\n`);
  console.log('🎉 ¡Listo para subir a WordPress!');
  console.log('\n📝 Pasos siguientes:');
  console.log('   1. Ve a WordPress Admin → Plugins → Añadir nuevo');
  console.log('   2. Haz clic en "Subir plugin"');
  console.log(`   3. Selecciona: ${outputPath}`);
  console.log('   4. Activa el plugin\n');
});

archive.on('error', (err) => {
  console.error('❌ Error al crear ZIP:', err.message);
  process.exit(1);
});

archive.pipe(output);
archive.directory(PLUGIN_DIR, 'jam-educar-react');
archive.finalize();
