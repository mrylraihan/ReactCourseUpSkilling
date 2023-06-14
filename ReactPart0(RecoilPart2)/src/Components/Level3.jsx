import React from 'react'
import { useRecoilValue } from 'recoil'
import ListSelector from '../store/NameSelector'
// import ListData from '../store/ListData'
function Level3() {
    // const [list, setList] = useRecoilState(ListData)
  const name = useRecoilValue(ListSelector)
  const { fullName } = useRecoilValue(ListSelector)
  console.log(name)
  return (
    <div>
          <p>Level3</p>
          {fullName && <h3>{fullName}</h3>}
    </div>
  )
}

export default Level3