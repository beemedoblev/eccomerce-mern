import React from 'react'
import styled from 'styled-components'
import {Send} from '@mui/icons-material'
import {mobile} from "../responsive"

function NewsLetter() {

    const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `
    const Title = styled.h1`
    font-size:70px;
    margin-bottom: 20px;
    `
    const Desc = styled.p`
        font-size: 24px;
        font-weight:300;
        margin-bottom: 20px;
        ${mobile({ textAlign: "center" })}

    `
    const InputContainer = styled.div`
        width:50%;
        height:40px;
        background-color: white;
        display:flex;
        justify-content: space-between;
        border:1px solid lightgray;
        ${mobile({ width: "80%" })}

    `
    const Input = styled.input`
    border:none;
    flex:8;
    padding-left: 20px;
    `
    const Button = styled.button`
        flex:1;
        border:none;
        background-color: teal;
        color:white;
    `


    return (
        <Container>
            <Title>NewsLetter</Title>
            <Desc>No te pierdas las novedades de tus productos favoritos.</Desc>
            <InputContainer>
                <Input placeholder="Dejanos tu e-mail"/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter
