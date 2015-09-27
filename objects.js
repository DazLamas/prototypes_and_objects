function CuentaBancaria (nombre, apellido, saldo) {

  this.nombreTitular    = nombre;
  this.apellidosTitular = apellido;
  this.saldo            = saldo;

  this.mostrarDatos = function () {

      var msg = 'Los datos de la cuenta son Nombre: ' + this.nombreTitular + '; Apellidos: ' + this.apellidosTitular + '; Saldo: ' + this.saldo;
      document.getElementById('data_display').innerHTML = msg;

  };
};

function getData() {

  var userName    = prompt("userName");
  var userSurname = prompt("userSurname");
  var money       = prompt("money");

  var cuenta1 = new CuentaBancaria(userName, userSurname, money);
  cuenta1.mostrarDatos();

};

// document.getElementById('create-account').addEventListener('click', getData, false);


/////////////////////////////////// 1º sintaxis para la creación de objetos
//funciones internas

function CuentaBancaria () {

  this.nombreTitular    = prompt("userName");
  this.apellidosTitular = prompt("userSurname");
  this.saldo            = prompt("money");

  this.mostrarDatos = function () {

      var msg = 'Los datos de la cuenta son Nombre: ' + this.nombreTitular + '; Apellidos: ' + this.apellidosTitular + '; Saldo: ' + this.saldo;
      document.getElementById('data_display').innerHTML = msg;

  };

};

function createAccount() {
  var cuenta1 = new CuentaBancaria();
  cuenta1.mostrarDatos();
};

document.getElementById('create-account').addEventListener('click', createAccount, false);



/////////////////////////////////// 2º sintaxis para la creación de objetos
//funciones auxiliares/externas


function objetoSerie(unArray) {
  this.nombre = 'Nombre del objeto';
  this.contenidoArray = unArray;
  this.suma = obtenerSuma;
}

function obtenerSuma() {
  var suma=0;

  for (var i=0; i<this.contenidoArray.length; i++){
   suma = suma + this.contenidoArray[i];
  }

  return suma;
}

function ejemploObjetos() {
  var suma  = 0;
  var serie = [3, 2, 9];

  for (var i=0; i<serie.length; i++){
   suma = suma + serie[i];
  }

  alert ('La suma de los números visto como array simple es: ' + suma);

  serieOb = new objetoSerie(serie);
  alert ('La suma de los números visto como objeto es: ' + serieOb.suma());

  otroObjeto = new objetoSerie([2,1,3,4]);
  alert ('La suma para otro objeto es: ' + otroObjeto.suma());
}

document.getElementById('pulsador').addEventListener('click', ejemploObjetos, false);

//ejercicio:

//A:

function Medico_int(doctorName, personasCuradas, especialidad) {

  this.doctorName       = doctorName      ;
  this.personasCuradas  = personasCuradas ;
  this.especialidad     = especialidad    ;

  this.curarPersona = function() {
    this.personasCuradas ++ ;
  };

  this.mostrarDatos = function() {
    var msg = 'Nombre del Médico: ' + this.doctorName + '<br>' + 'Curas: ' + this.personasCuradas + '<br>' +'Especialidad: ' + this.especialidad;
    document.getElementById('data_display').innerHTML = msg;
  }
}

function addDoctor() {
  var medico1 = new Medico_int("Maria", 3, "odontólogo");
  medico1.mostrarDatos();
}

document.getElementById('ex-1-A').addEventListener('click', addDoctor, false);

//B:

function Medico_ext(doctorName, personasCuradas, especialidad) {
  this.doctorName       = doctorName      ;
  this.personasCuradas  = personasCuradas ;
  this.especialidad     = especialidad    ;

  this.mostrarDatosExt  = mostrarDatosExt    ;
  this.addNewCuration   = addNewCuration    ;
};

function mostrarDatosExt() {
  var msg = 'Nombre del Médico: ' + this.doctorName + '<br>' + 'Curas: ' + this.personasCuradas + '<br>' +'Especialidad: ' + this.especialidad;
  document.getElementById('data_display').innerHTML = msg;
};

function addNewCuration() {
  this.personasCuradas ++ ;
};


function addDoctorExt() {
  var medico1 = new Medico_ext("Idoia", 3, "odontólogo");
  medico1.mostrarDatosExt();
};

document.getElementById('ex-1-B').addEventListener('click', addDoctorExt, false);

// CONSTRUCTORES

var pintura1 = {};

Object.defineProperty(
  pintura1,
  'autor',
  {
    value: 'Vincent Van Gogh',
    writable:true,
    enumerable:true,
    configurable:true
  }
);

alert ('La propiedad autor del objeto pintura1 es: ' + pintura1.autor);
pintura1.autor = 'Michelangelo';
alert ('La propiedad autor del objeto pintura1 es: ' + pintura1.autor);

pintura1.deletrear = function () {
  var letras = [];
  var msg = '';

  for(var i=0; i<pintura1.autor.length;i++){
    msg = msg+pintura1.autor[i]+'-';
  };

  alert (msg);
}
pintura1.deletrear();






























