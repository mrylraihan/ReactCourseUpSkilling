import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {nameActions} from '../store/index'
function TestRedux() {
    const name = useSelector(state=>state.name)
    const state = useSelector(state=>state)
    const dispatch = useDispatch()
    console.log(state);
    const nameDispatch = e =>{
        dispatch(nameActions.getName({n:e.target.value}))
    }
    const resetState = ()=>{
        dispatch(nameActions.getReset())
    }
  return (
    <div className='app'>
          <h3>TestRedux</h3>
          <h4>{name}</h4>
          <div>
            <label>
                Name:
                  <input type="text" value={name} onChange={nameDispatch}/>
            </label>
          </div>
          <button onClick={resetState}>reset</button>
    </div>
  )
}

export default TestRedux