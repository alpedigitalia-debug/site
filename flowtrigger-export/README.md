# FlowTrigger Website - Exportación Completa

## 📋 Descripción

Sitio web completo de FlowTrigger exportado para edición en Plasmic y despliegue en Vercel. Este proyecto contiene todo el código fuente modular y estructurado para facilitar la edición visual posterior.

## 🏗️ Stack Tecnológico

- **Framework**: Next.js 14 (React)
- **Styling**: TailwindCSS
- **TypeScript**: Para desarrollo type-safe
- **Icons**: Heroicons
- **Deploy**: Vercel (optimizado para static export)

## 📁 Estructura del Proyecto

```
flowtrigger-export/
├── public/
│   └── images/              # Imágenes del sitio
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx      # Layout principal
│   │   └── page.tsx        # Página principal
│   ├── components/         # Componentes reutilizables
│   │   ├── Header.tsx      # Navegación superior
│   │   ├── Footer.tsx      # Pie de página
│   │   └── AudioPlayer.tsx # Reproductor de audio
│   ├── sections/           # Secciones modulares
│   │   ├── HeroSection.tsx        # Sección hero principal
│   │   ├── ProductionMusical.tsx  # Sección música
│   │   ├── VideoIA.tsx            # Sección video IA
│   │   ├── PodcastStreaming.tsx   # Sección podcast
│   │   ├── YouTubeChannels.tsx    # Sección YouTube
│   │   ├── ImagenAvatarizacion.tsx # Sección avatarización
│   │   ├── CanalizacionPublicidad.tsx # Sección publicidad
│   │   └── Contacto.tsx          # Sección contacto
│   ├── hooks/              # Custom hooks
│   │   └── use-mobile.ts   # Detección móvil
│   ├── lib/                # Utilidades
│   │   └── utils.ts        # Funciones utilitarias
│   └── styles/             # Estilos globales
│       └── globals.css     # Estilos base
├── package.json            # Dependencias
├── next.config.js          # Configuración Next.js
├── tailwind.config.js      # Configuración Tailwind
├── tsconfig.json           # Configuración TypeScript
└── README.md              # Este archivo
```

## 🚀 Flujo de Trabajo Recomendado

### 1. Preparación Local
```bash
npm install
npm run dev
```

### 2. Subir a GitHub
1. Crear repositorio en GitHub
2. Subir código: `git push origin main`

### 3. Importar en Plasmic
1. Conectar repositorio de GitHub
2. Plasmic detectará automáticamente los componentes
3. Editor visual disponible para modificaciones

### 4. Exportar desde Plasmic
1. Hacer cambios visuales en Plasmic
2. Exportar como nuevo ZIP o conectar al repo de GitLab

### 5. GitLab para Desarrollo
1. Crear proyecto en GitLab
2. Clonar versión exportada desde Plasmic
3. Desarrollo y testing local

### 6. Deploy en Vercel
```bash
npm run build
npm run export
```
Subir carpeta `out/` a Vercel o conectar directamente desde GitLab.

## 🎨 Características del Diseño

- **Tema**: Dark mode con acentos cyan
- **Responsive**: Optimizado para móvil y desktop
- **Animaciones**: Efectos de scroll y hover
- **Modular**: Cada sección es un componente independiente

## 🔧 Comandos Disponibles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview del build
npm run start

# Exportar como sitio estático
npm run export

# Linting
npm run lint
```

## 📝 Notas para Edición

1. **Plasmic**: Los componentes están diseñados para ser editables visualmente
2. **Tailwind**: Usar clases utilitarias para personalización rápida
3. **TypeScript**: Mantener type safety en nuevas funcionalidades
4. **Responsive**: Siempre probar en móvil y desktop

## 🎯 Próximos Pasos

1. Subir a GitHub para Plasmic
2. Editar diseño visualmente
3. Exportar versión final
4. Configurar pipeline GitLab → Vercel

---

**FlowTrigger** - Transformamos tus ideas en contenido audiovisual de vanguardia