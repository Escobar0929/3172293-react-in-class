import { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";
import authBg from "@/assets/images/bg-1.png"; 
import {
  Input,
  Button,
  DeleteCounter2,
  Select,
  Checkbox} 
from "@/shared";
import { getDocumentTypes } from "../../services/selectServices";
 


export default function AuthLayout(){

  // Estado para los tipos de documentos 
  const [documentTypes, setDocumentTypes] = useState([]);

  // Uso del estado useEffect
  useEffect(()=> {
    getDocumentTypes().then(setDocumentTypes);
  }, []);

  return (
    <>
      <div 
        className="min-h-screen w-full "
        style={{
          backgroundImage: `url(${authBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className="mx-auto">
        {/* Envolvemos el input en un div con ancho controlado */}
          <Input 
            label="Nombre"
            type="text"
            placeholder="Escribe tu nombre"
            htmlFor="name"
            variant="primary"
            size="lg"
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
            label="tipo de documento"
            type="text"
            placeholder="Escribe tu telefono"
            htmlFor="name"
          />
          <Input 
            label="Contraseña"
            type="password"
            placeholder="Escribe tu password
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
          {/*Actions  */}
          {/* Implementacion del estado useState */}
          
          <div className="mt-10">
            <h1>Ejemplo sin useState</h1>
            <DeleteCounter2/>
          </div>

          {/* <h1>Hola que tal</h1>*/}

          {/*  Implmentación de useEffect*/}

          {/* <div className="mt-12">
            <h1>Este es mi useEffect</h1>
            <EffectDemo />
          </div> */}
        
          {/* <CounterEffect/> */}

          <Select
            label="Tipos de documentos"
            name="userdocumentTypes"
            htmlFor="userdocumentTypes"
            options={documentTypes}
          />  

          {/* <Checkbox 
            id="isSuperUser"
            name="isSuperUser"
            label="Es el super usuario"
            Checked={FormData.isSuperUser}
            onChange={handleChange}
          />
          <Checkbox 
            id="isStaff"
            name="isStaff"
            label="Es staff"
            Checked={FormData.isStaff}
            onChange={handleChange}
          />
          <Checkbox 
            id="isActive"
            name="isActive"
            label="Esta activo"
            Checked={FormData.isAcitve}
            onChange={handleChange}
          /> */}


          <Outlet/>
        </main>
      </div>
    </>
  );
}