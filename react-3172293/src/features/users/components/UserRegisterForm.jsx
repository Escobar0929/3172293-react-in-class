// UserRegisterForm es un compnente para registrar un usuario 

import { useState, useEffect } from "react";
import { Input, Select, Checkbox, Button } from "react";
import { getDocumentTypes } from "@/services/selectServices";


export default function userRisterForm (){
    // Estado del formulario 
    const [formData, setFormData] = useState({
        userName: "",
        userEmail: "",
        userPhone: "",
        userDocumentType: "",
        userDocumentNumber: "",
        usePassword: "",

        //Flgs booleanos
        isStaff: false;
        isActive: true;
        isSuperUser: false;
    })

 // =======================
 //     Handle Generico
 // =======================
 /**
  * Funcion que se ejecuta cada vez que cambia el valor de u Input del formulario 
  */
 const handleChange = (e) => {
    // Se obtine el nombre del campo y su valor
    const { name, value, checked } = e.target;

    setFormData((prev) => ({
        //Se copian todos los valores anteriores del estado 
        ...prev,

        // Se actualiza unicamente lo que cambio
        [name]: type === "checkbox" ? checked : value,
    }));
 };

   // ===========HANDLE SUBMIT============
   const handleSubmit = async (e) => {
    // Evita que el formulario recargue la pagina 
    e.preventDefalt();

    // Validamos los datos del formulario contra el esquema Zop 
    // safeParse NO lanza excepción, retorna un objeto contrlado
    const result = userSchema.safeParse(formData);

    // Verifica en consola si el esquema esta funcionando correctaente 
    //console.log(resul);

    // Si la validación falla 
    if (!result.succes) {
        // Objeto donde almacenamos los errores del campo
        const fieldErrors = {};

        // Recorremos cada error generando por Zop 
        result.error.issues.forEach((issue) => {
            // issues.path[0] corresponde al noombre del campo
            // issue.message contiene el mensaje de error definido en el schema 
            fieldError[issue.path[0]] = issue.message;
        });

        // Actualizamos el estado de errores para mostrarlos en la UI 
        setErrors(fieldErrors);

        // Cortamos la ejecución: NO se envia nada al backend

        return;
    }

    // Si la validacion pasa, limpiamos errores previos 
    setErrors({});
   }












    // Estado para los tipos de documento
     const [documentTypes, setDocumentTypes] = useState([]);

     useEffect(()=> {
         getDocumentTypes().then(setDocumentTypes);
       }, []);  

    return (
        <div>
            <Input 
            label="Nombre"
            type="text"
            placeholder="Escribe tu nombre"
            htmlFor="name"
          />
          <Input 
            label="Correo"
            type="email"
            placeholder="Escribe tu correo"
            htmlFor="user-email"
          />
          <Input 
            label="Telefono"
            type="tel"
            placeholder="Escribe tu telefono"
            htmlFor="user-phone"
          />
          <Input 
            label="Tipo de documento"
            type="text"
            placeholder="Escribe tu telefono"
            htmlFor="name"
          />
          <Input 
            label="Documento"
            type="text"
            placeholder="Escribe tu numero de documento"
            htmlFor="user-document-number"
            />
          <Select
            label="Tipos de documentos"
            name="userdocumentTypes"
            htmlFor="userdocumentTypes"
            options={documentTypes}
            />
            <Input 
              label="password"
              type="text"
              placeholder="Escribe tu password"
              htmlFor="user-password"
            />

            {/* Actions */}
            <div className="flex gap-6 items-center">
            <Button
            variant="secondary"
            size="sm"
            type="button"
            onClick= {() => console.log("Se oprimio cancelar")}
            > cancelar
            </Button>
            
            <Button
            variant="primary"
            size="md"
            type="button"
            onClick= {() => console.log("Se oprimio guardar")}
            > Guardar
            </Button>
          </div>


        </div>
    )
}
