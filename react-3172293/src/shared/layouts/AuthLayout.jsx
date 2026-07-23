import { Outlet } from "react-router-dom";
import { useState, useEffect} from "react";
import authBg from "@/assets/images/bg-1.png"; 
import { 
  Input,
  Button, 
  Select,
  // Checkbox
} 
  from "@/shared"; 
import { getDocumentTypes } from "../../services/selectServices";


export default function AuthLayout(){
   // Estado para los tipos de documentos
 const[documentTypes, setDocumentTypes] = useState([])

//  Uso del estado useEffect
 useEffect(() => {
  getDocumentTypes().then(setDocumentTypes);
 },[])
  return (
      <>
      <div 
        className="min-h-screen w-full"
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
            <Select 
            label="Tipos de documentos"
            name="userDocumentTypes"
            htmlFor="userDocumentTypes"
            options={documentTypes}
            />
          <Input 
            label="Documento"
            type="text"
            placeholder="Escribe tu numero de documento"
            htmlFor="user-document-number"
          />

          {/* Actions */}
          <div className="flex gap-6 items-center">
           <Button
            variant="secondary"
            size="sm"
            type="button"
            onClick= {() => console.log("Boton presionado")}
            > cancelar
            </Button>
            
            <Button
            variant="primary"
            size="md"
            type="button"
            onClick= {() => console.log("Boton presionado")}
            > Guardar
            </Button>
          </div>
          
          {/*Actions*/ }

          {/* Imprementacion del estado de useState */}
          {/* <div className="mt-10">
            <h1>Ejemplo sin useState</h1>
            <DeleteCounter2/>
          </div> */}

          {/* Imprementacion del estado de useEffect
          <div className="mt-12">
            <CounterEffect/>
          </div> */}

            {/* Aqui es para escoger la opcion */}
          {/* <Select 
            label="Tipos de documentos"
            name="userDocumentTypes"
            htmlFor="userDocumentTypes"
            options={documentTypes}
            /> */}

            {/* <Checkbox
            id="isStaff"
            name="isStaff"
             */}

          <Outlet/>
        </main>
      </div>
    </>
  );
}