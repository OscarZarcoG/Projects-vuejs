# 🚀 Vue 3 + Vite: Plantilla de Desarrollo Moderna

![Vue.js](https://img.shields.io/badge/-Vue.js-4FC08D?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint&logoColor=white)
![PNPM](https://img.shields.io/badge/-PNPM-F69220?logo=pnpm&logoColor=white)

Este repositorio contiene una plantilla optimizada para comenzar el desarrollo de aplicaciones web con Vue 3 y Vite, diseñada para ofrecerte una experiencia de desarrollo moderna, rápida y eficiente.

## ✨ Características

- **⚡️ Velocidad excepcional**  
- **🔄 HMR instantáneo**  
- **🧩 Componentes Single-File**  
- **📦 Gestión optimizada**  
- **🔍 Calidad de código** 

## 📋 Requisitos Previos

Para aprovechar al máximo esta plantilla, necesitarás tener instalado:

- [Node.js](https://nodejs.org/) (v16+)
- [PNPM](https://pnpm.io/installation) (recomendado para mejor rendimiento)

## 🛠️ Configuración del Entorno

### Editor Recomendado

Para la mejor experiencia de desarrollo con Vue 3, recomendamos:

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

> **Consejo Pro:** Asegúrate de desactivar la extensión Vetur si la tienes instalada para evitar conflictos con Volar.

### Personalización Avanzada

Para ajustar la configuración de Vite según tus necesidades:

- Consulta la [Referencia de Configuración de Vite](https://vitejs.dev/config/)
- Modifica el archivo `vite.config.js` en la raíz del proyecto

## 🚀 Comenzando

### Instalación

```sh
# Clona este repositorio
git clone https://github.com/OscarZarcoG/Projects-vuejs.git

# Navega al directorio del proyecto
cd Projects-vuejs

# Instala las dependencias
pnpm install
```

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia el servidor de desarrollo con HMR |
| `pnpm build` | Compila y minimiza para producción |
| `pnpm preview` | Vista previa de la versión de producción |
| `pnpm lint` | Ejecuta ESLint para verificar el código |

## 📂 Estructura del Proyecto

```
/
├── public/           
├── src/              
│   ├── assets/      
│   ├── components/   
│   ├── views/        
│   ├── App.vue       
│   └── main.js       
├── .eslintrc.js      
├── index.html        
├── package.json      
└── vite.config.js    
```

## 🔍 Buenas Prácticas

- Utiliza la [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html) para componentes más mantenibles
- Estructura tu estado global con [Pinia](https://pinia.vuejs.org/) (recomendado para Vue 3)
- Implementa pruebas unitarias con [Vitest](https://vitest.dev/)

## 🤝 Contribuir

Las contribuciones son bienvenidas y apreciadas:

1. Haz fork del repositorio
2. Crea una rama para tu funcionalidad (`git checkout -b feature/increible-funcion`)
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir increíble función'`)
4. Sube tus cambios (`git push origin feature/increible-funcion`)
5. Abre un Pull Request

## 📝 Licencia

[MIT](LICENSE) © OSCZ
