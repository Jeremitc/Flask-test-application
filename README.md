# Flask Test Application

Este proyecto es una aplicación de prueba desarrollada con Flask, diseñada para demostrar la configuración de un servidor local y la conexión a una base de datos MySQL.

## Descripción del Proyecto

La aplicación sirve como ejemplo para ilustrar cómo configurar un entorno de desarrollo con Flask y conectarlo a una base de datos MySQL. Incluye plantillas HTML para la interfaz de usuario y archivos estáticos como CSS y JavaScript para mejorar la presentación y funcionalidad.

## Estructura del Proyecto

- **app.py**: Archivo principal que inicia la aplicación Flask y define las rutas y vistas.
- **templates/**: Directorio que contiene las plantillas HTML utilizadas para renderizar las páginas web.
- **static/**: Carpeta que almacena archivos estáticos como CSS, JavaScript e imágenes.
- **myenv/**: Entorno virtual que contiene las dependencias y paquetes necesarios para ejecutar la aplicación.

## Requisitos Previos

- **Python**: Asegúrese de tener Python instalado en su sistema.
- **Flask**: Framework web para Python.
- **MySQL**: Sistema de gestión de bases de datos relacional.

## Instalación y Configuración

1. **Clonar el Repositorio**:
   ```bash
   git clone https://github.com/Jeremitc/Flask-test-application.git
   ```

2. **Crear y Activar un Entorno Virtual**:
   Navegue al directorio del proyecto y cree un entorno virtual:
   ```bash
   cd Flask-test-application
   python -m venv myenv
   ```
   Active el entorno virtual:
   - En Windows:
     ```bash
     myenv\Scripts\activate
     ```
   - En macOS y Linux:
     ```bash
     source myenv/bin/activate
     ```

3. **Instalar las Dependencias**:
   Con el entorno virtual activado, instale Flask:
   ```bash
   pip install Flask
   ```

4. **Configurar la Base de Datos MySQL**:
   - Cree una base de datos en MySQL para la aplicación.
   - Actualice la configuración de la base de datos en `app.py` con las credenciales y detalles de su base de datos MySQL.

5. **Ejecutar la Aplicación**:
   Inicie el servidor Flask:
   ```bash
   python app.py
   ```
   La aplicación estará disponible en `http://localhost:5000`.

## Uso

Una vez que la aplicación esté en funcionamiento, puede acceder a las diferentes rutas definidas en `app.py` para interactuar con la aplicación y la base de datos MySQL.

## Contribuciones

Las contribuciones son bienvenidas. Si desea mejorar este proyecto:

1. Haga un fork del repositorio.
2. Cree una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realice sus cambios y haga commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Haga push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Cree un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulte el archivo `LICENSE` para más detalles.

---
