

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useContextoDental } from "../Context"
import Card from '../Components/Card'


const Home = () => {

  const {stateDental} = useContextoDental()



  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        	{stateDental.listaDentistas?.map(dentist => <Card did={dentist.id} dname={dentist.name} dusername={dentist.username} />)}
      </div>
    </main>
  )
}

export default Home