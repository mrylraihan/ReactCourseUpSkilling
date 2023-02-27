import React, { useRef } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addressActions } from '../store/addresSlice'
function TestAddress() {
    const address = useSelector(state => state.address.address)
    // const state = useSelector(state => state)
    const dispatch = useDispatch()
    const addiRef = useRef()

    const getAddress = () =>{
        dispatch(addressActions.getAddress({addi:addiRef.current.value}))
        addiRef.current.value = ''
    }
  return (
    <div>
          <h1>TestAddress</h1>
          <div>
            <label>Address
                <input type="text" ref={addiRef}/>
            </label>
            <button onClick={getAddress}>Submit Address</button>
          </div>
    </div>
  )
}

export default TestAddress