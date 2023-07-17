import React from 'react'
import {useRouter} from 'next/router'
function DetailsPage() {
const router = useRouter()
const newsId = router.query.newsId
  return (
    <div>DetailsPage {newsId}</div>
  )
}

export default DetailsPage