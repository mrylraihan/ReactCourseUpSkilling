import React , {useReducer} from 'react'

const initial = {name:''}
const nameReducer = (state, action)=>{
  if(action.type == 'name'){
    return {...state, name: action.n}
  }else{
    return initial
  }
}
function TestUseReducer() {
   const [nameState, dispatch] = useReducer(nameReducer, initial)
    const nameDispatch = e =>{
        dispatch({type:'name',n:e.target.value})
    }
    console.log(nameState);
  return (
    <div className='app'>
          <h3>TestUseReducer</h3>
      <h4>{nameState.name}</h4>
          <div>
            <label>
                Name:
          <input type="text" value={nameState.name} onChange={nameDispatch}/>
            </label>
          </div>

          <button onClick={dispatch}>reset</button>
    </div>
  )
}

export default TestUseReducer