import React from 'react'
import { useRouter } from 'next/router';  /** Hook based router */
import { withRouter } from 'next/router'; /** Higher Order  Component */

const PortfolioProjectPage = ({router}) => {

  const {query : {id}, pathname} = router;
  

  /**
   * With the id from the query
   * we could send a request to some backend server
   * to fetch the piece of data with and id of router.query.id
   */
  
  return (
    <h1>Project {id}</h1>
  )
}

export default withRouter(PortfolioProjectPage);