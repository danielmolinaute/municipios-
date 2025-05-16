/*Pedir a CHATGPT que nos haga un programa con HTML5 ,CSS3 y Javascript.
Enlazar en nuestro proyecto estos lenguajes y cada uno en su carpeta.
El programa consiste en un formulario donde pueda escribir un municipio y me diga si pertenece a la provincia de Jaén o no.

*/

 // Función para normalizar texto: minúsculas y sin tildes
   

   const localidadesDeJaen = [
      "Jaén", "Linares", "Andújar", "Úbeda", "Baeza", "Martos", "Alcalá la Real", 
      "La Carolina", "Mengíbar", "Torreperogil", "Villanueva del Arzobispo",
      "Peal de Becerro", "Huelma", "Cazorla", "Jódar", "Mancha Real", "Castillo de Locubín",
      "Arjonilla", "Arjona", "Begíjar", "Canena", "Carboneros", "Espeluy",
      "Guarromán", "Lahiguera", "Lopera", "Marmolejo", "Noalejo", "Porcuna",
      "Sabiote", "Torredelcampo", "Torredonjimeno", "Valdepeñas de Jaén",
      "Los Villares", "Villacarrillo", "Villatorres", "Santiago de Calatrava",
      "La Quintería", "El Mármol", "La Ropera", "Puente del Obispo", 
      "Santa Ana", "El Centenillo", "El Molar", "Venta de los Santos"
    ];

     function normalizar(texto) {
      return texto
        .toLowerCase()
        .normalize("NFD") // separa letras de sus tildes
        .replace(/[\u0300-\u036f]/g, "") // elimina los signos diacríticos
        .trim();
    }

    function verificarMunicipio() {
      const input = normalizar(document.getElementById("municipio").value);
      const resultado = document.getElementById("resultado");

      const estaEnJaen = localidadesDeJaen.some(localidad =>
        normalizar(localidad) === input
      );

      if (estaEnJaen) {
        resultado.textContent = "✅ Sí, pertenece a la provincia de Jaén.";
        resultado.style.color = "green";
      } else {
        resultado.textContent = "❌ No pertenece a la provincia de Jaén.";
        resultado.style.color = "black";
      }
    }
 function resetFormulario() {
      document.getElementById("municipio").value = "";
      document.getElementById("resultado").textContent = "";
    }
     function normalizarTexto(texto) {
      return texto
        .normalize("NFD")                     // descompone tildes
        .replace(/[\u0300-\u036f]/g, "")     // elimina los signos diacríticos
        .toLowerCase()                       // pasa a minúsculas
        .replace(/[^a-z0-9\s]/g, "")         // quita símbolos raros
        .replace(/\s+/g, " ")                // espacios dobles a uno solo
        .trim();                             // quita espacios al principio/fin
    }

/*     function verificarMunicipio() {
      const inputUsuario = document.getElementById("municipio").value;
      const resultado = document.getElementById("resultado");
      const normalizadoUsuario = normalizarTexto(inputUsuario);

      const estaEnJaen = municipiosJaen.some(muni => {
        return normalizarTexto(muni) === normalizadoUsuario;
      });

      if (estaEnJaen) {
        resultado.innerText = `"${inputUsuario}" está en la provincia de Jaén. ✅`;
        resultado.style.color = "#2c7a7b";
      } else {
        resultado.innerText = `"${inputUsuario}" no pertenece a la provincia de Jaén. ❌`;
        resultado.style.color = "#a94442";
      }
    }*/