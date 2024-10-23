from flask import Flask, render_template, request
from flask_cors import CORS 
import mysql.connector
import os

app = Flask(__name__)
CORS(app)

# Configuración de la conexión a la base de datos MySQL
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="RegistroUser"
)

cursor = db.cursor()

# Ruta para la página de inicio
@app.route('/')
def home():
    return render_template('index.html')

# Ruta para procesar el formulario de inicio de sesión
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        iphonenumber = request.form['email']
    
    # Ejemplo de consulta a la base de datos para verificar las credenciales
        cursor.execute("SELECT * FROM usuarios WHERE username = %s AND password = %s AND email = %s", (username, password, iphonenumber))
        user = cursor.fetchone()
    
        if user:
            return "Inicio de sesión exitoso" # Puedes redirigir a otra página o mostrar un mensaje de éxito
        else:
            return "Error de inicio de sesión" # Puedes redirigir a otra página o mostrar un mensaje de error
    return render_template('login.html')

# Ruta para el formulario de registro
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']
        # Otros campos del formulario

        # Insertar el nuevo usuario en la base de datos
        sql = "INSERT INTO usuarios (username, password, email) VALUES (%s, %s, %s)"
        values = (username, password, email)
        cursor.execute(sql, values)
        db.commit()

        return "Usuario registrado exitosamente"
    return render_template('register.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
