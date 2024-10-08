# Plataforma de Visualización de Acciones - Twelve Data

## Descripción

Este proyecto es una plataforma interactiva que permite visualizar y analizar datos en tiempo real e históricos de acciones y stocks, utilizando la API de **Twelve Data**. Desarrollada con **React 18** y **Vite**, la aplicación ofrece una interfaz intuitiva y rápida para consultar información financiera detallada de diferentes mercados.

## Características

- **Datos en tiempo real**: Obtén cotizaciones, volumen y tendencias de acciones actualizadas al instante gracias a la integración con Twelve Data.
- **Gráficos históricos**: Visualiza el comportamiento de las acciones a lo largo del tiempo con gráficos interactivos usando **Highcharts**.
- **Selección de rango de fechas**: Usa el componente `DateTimePicker` de **MUI** para elegir intervalos de fechas personalizados para análisis detallado.
- **Información detallada de acciones**: Consulta detalles como país, moneda, intercambio, código figi, código mic, nombre, símbolo y tipo.
- **Seguridad de variables sensibles**: Las claves API y URL base están gestionadas en el servidor para mayor seguridad.
- **Optimización con RTK Query**: Las consultas a la API se gestionan eficientemente, optimizando el rendimiento de la aplicación.

## Tecnologías Utilizadas

- **React 18** con **Vite**: Base del frontend moderno, optimizado para velocidad y desarrollo ágil.
- **RTK Query**: Gestión de consultas a la API, optimizando la obtención de datos en tiempo real e históricos.
- **Highcharts**: Generación de gráficos interactivos y personalizables para la visualización de datos financieros.
- **Dayjs**: Manipulación y formato de fechas.
- **Twelve Data API**: Fuente principal de información financiera.

## Instalación y Despliegue

Para ejecutar el proyecto en tu entorno local, sigue estos pasos detallados:

### 1. Clonar el repositorio

Abre una terminal y ejecuta el siguiente comando para clonar el repositorio:

```bash
git clone https://github.com/alejandromoises02/stocks
```
### 2. Instalar Depedencias
Luego de clonar el repo entra en la carpeta e instala las dependencias necesarias
```bash
cd stocks
npm install
```

### 3. Ejecutar el server
Se debe ejecutar el server para evitar exponer las apikey en navegador
```bash
node server.js
```

### 4. Levanta la UI del proyecto
En otra consola en la misma direccion ejecuta el comando para correr el proyecto en el navegador
```bash
npm run dev
```
