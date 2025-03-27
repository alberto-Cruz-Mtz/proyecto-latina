# Proyecto React con Bun.js

Este proyecto utiliza [Bun](https://bun.sh/) como runtime de JavaScript para gestionar dependencias y ejecutar el servidor de desarrollo.

## Requisitos previos

Antes de iniciar, asegúrate de tener instalado Bun en tu sistema. Si no lo tienes, puedes instalarlo con el siguiente comando:
En linux
```sh
curl -fsSL https://bun.sh/install | bash
```
En Windows
```sh
powershell -c "irm bun.sh/install.ps1|iex"
```
También puedes consultar la [documentación oficial](https://bun.sh/docs) para más opciones de instalación.

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```sh
bun install
```

## Ejecución del proyecto

Para iniciar el servidor de desarrollo, usa:

```sh
bun run dev
```

Este comando iniciará el servidor y podrás acceder a la aplicación en tu navegador.

## Construcción para producción

Si deseas construir el proyecto para producción, ejecuta:

```sh
bun run build
```

Esto generará los archivos optimizados para su despliegue.

## Notas

- Asegúrate de que `bun.lockb` esté en tu control de versiones para mantener la consistencia de las dependencias.
- Puedes usar `bun add <paquete>` para agregar nuevas dependencias al proyecto.

¡Listo! Ahora puedes comenzar a desarrollar con Bun y React 🚀.
