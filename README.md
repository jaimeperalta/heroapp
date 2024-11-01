# HeroApp

HeroApp es una aplicación desarrollada utilizando Angular 18 e Ionic 8 con la característica de componentes independientes (standalone). La aplicación está diseñada para ser modular, fácil de mantener y escalable, proporcionando una experiencia de usuario moderna.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Características

- **Interfaz de usuario**: Utiliza componentes de Ionic para una experiencia de usuario fluida y moderna.
- **Modularidad**: La arquitectura basada en módulos permite una fácil escalabilidad y mantenimiento.
- **Soporte de traducciones**: Implementación de internacionalización con `ngx-translate` para soportar múltiples idiomas.
- **Funcionalidad offline**: Integración de Capacitor para habilitar características nativas en dispositivos móviles.

## Tecnologías Utilizadas

- [Angular 18](https://angular.io/)
- [Ionic 8](https://ionicframework.com/)
- [Capacitor](https://capacitorjs.com/)
- [ngx-translate](https://github.com/ngx-translate/core)
- [TypeScript](https://www.typescriptlang.org/)
- [HTML/CSS](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [RxJS](https://rxjs.dev/)

## Instalación

Para instalar el proyecto, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/heroapp.git
   
2. Cambia a la rama master:

   ```bash
   git checkout master

3. Navega a la carpeta del proyecto:

   ```bash
    cd heroapp

4. Instala las dependencias:

   ```bash
    npm install
   
5. EJecuta el servidor:

   ```bash
    npm start

6. Ejecución en dispositivo android:

   ```bash
   npx cap add android
   npm run build && npx cap sync android && ionic cap build android --no-open
   cd android && ./gradlew assembleDebug

7. Ubicación apk

  Navega a /heroapp/android/app/build/outputs/apk/debug y podras encotrar el archivo app-debug.apk


## Estructura del proyecto

heroapp/
├── src/
│   ├── app/
│   │   ├── components/    # Componentes independientes
│   │   ├── services/      # Servicios de la aplicación
│   │   ├── pages/         # Páginas de la aplicación
│   │   ├── app.module.ts   # Módulo principal de la aplicación
│   │   └── main.ts        # Archivo principal
│   ├── assets/            # Archivos estáticos como imágenes y estilos
│   ├── environments/       # Configuraciones de entorno
│   └── index.html         # Archivo HTML principal
└── package.json           # Archivo de configuración del proyecto

   

## Licencia
Este proyecto está bajo la Licencia MIT.
