import './App.css';
import {useState} from 'react'
import Days from './component/Days';
import Todos from './component/Todos';

function App() {

  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <Days />
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => {setToDo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => { setToDos([...toDos, {id: Date.now(), text: toDo, status: false}])
          setToDo('')
          }} className="fas fa-plus"></i>
      </div>
     
   <div className="todos">
        { toDos.map((obj) => {
        
        return (<div className="todo">
        <div className="left">
          {/* Input Starts */}
          <input onChange={(e) => {
            setToDos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){                  
                  obj2.status = e.target.checked
                }
                return obj2              
            }))
            }} type="checkbox" name="" id="" value={obj.status} />
            
          {obj.status ? <p><del>{obj.text}</del></p> : <p>{obj.text}</p>}
        </div>
        <div className="right">
          <i onClick={() => {
            /* Working here */
            toDos.map((obj) => {
              setToDos(toDos.filter(obj2 => {
                if(obj2.id === obj.id){
                      obj2 = null
                      console.log(toDos)
                }
                return obj2
                 
              }))
              
            })
          }} className="fas fa-times"></i>
        </div>
      </div>) 
        }) }


        
        {/* {toDos.map((obj) => {
          if(obj.status){
            return(<h1>{obj.text}</h1>)
          }
          return null
        })} */}
        
        </div>

    </div>
  );
}

export default App;
