import React from 'react'
import styled from 'styled-components'
import { Colors } from '../utils'

const Product = ({name,price}) => {
  return (
    <Wrapper price={price}>
        <h4>{name}</h4>
        <p>${price}</p>
    </Wrapper>
  )
}

const Wrapper = styled.article`

    background-color: white;
    width: 300px;
    padding : 1rem;
    border-radius: 0.25rem;
    margin : 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4{
        text-transform: capitalize;
    }
    p{
        font-weight: 500;
        color : ${({price}) => {
            if(price < 100) return 'green';
            if(price > 500) return 'red';
            return Colors.dark;
        }}
    }
`

export default Product