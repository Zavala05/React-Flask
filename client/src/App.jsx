import { useState } from "react";

export default function App() {
  const [nombre, setnombre] = useState(null);

  if (nombre == null){
    return(
     <div>
      <h1>Presiona el boton para saludar</h1>
      <button onClick={() => setnombre("Juan")}>Saludar a Juan</button>
     </div> 
    )
  }else{
    return(
      <div>
        <h1>Hola {nombre}</h1>
      </div>
    )
  }
  


}