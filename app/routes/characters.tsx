//Se ejecuta en el servidor todo
import { redirect } from "@remix-run/node"
import { Link, Outlet, useLoaderData } from "@remix-run/react"
import { useEffect } from "react"

//la data que trae el loader la trae para los meta
export const meta = ({data}) => {
    return [
        {
            title: data[0].name
            // title: 'Mari'
        }
    ]
}



export const loader = async() => {
    const data = await (await fetch('https://rickandmortyapi.com/api/character/')).json()
    return data.results
    // return redirect('/dondequieras')
}

//si corre en el cliente pero se entrega deshidratados
export default function Characters(){
    const data = useLoaderData()

    //Document corre en el navegador no en el servidor para eso podemos utiliza useEffect 
    useEffect(() => {
        console.log(document.querySelector('div'))
    },[])


    return(
        <>
            <h2>Hola Mari</h2>
            {data.map(char => (
                <Link  
                    style={{
                        display:'block'
                    }}
                    to={`${char.id}`} 
                    key={char.id}>
                        {char.name}
                </Link>
            ))}
            {/*  solo es para hijos */}
            {/* <Outlet /> */}
            <div>
                {/* //Para rutas hijas nombre character.$id.tsx */}
                {/* <Outlet /> */}
                {/* {/* //Para ruta hermanam no es su hijas, pero comparte segmento nombre */}
                {/* // characters_.$id} */}
                {/* characters_.$id.$otra para otra variable
                characters_.$id.edit
                */}

            </div>
            
        </>
    )
}