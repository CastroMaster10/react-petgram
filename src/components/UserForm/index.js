import React from 'react';
import {userInputValue} from '../../hooks/userInputForm'
import {Form,Input,Button,FormWrapper} from './styles';


export const UserForm = ({onSubmit, title}) => {

    const email = userInputValue('')
    const password = userInputValue('')

    return(
        <FormWrapper>
        <h2>{title}</h2>
        <Form onSubmit={onSubmit}>

            <Input type='text' placeholder= "Email" {...email}/>
            <Input type= "password" placeholder= "Password" {...password}/>
            <Button>{title}</Button>
        </Form>
        </FormWrapper>  
    )
}