
import React from "react"
import { Formik,Form, Field,ErrorMessage } from "formik"
import * as Yup from 'yup';
// import { Form } from "react-router-dom";
import { Button, CardActionArea, CardActions } from '@mui/material';

function Contactus(){
    return(
        <>
        <div style={{marginTop:180+"px" , display:"flex" , flexDirection:"column"}}>
        <h1 style={{textAlign:"center"}}>GET IN TOUCH WITH US</h1>
        <Formik
        initialValues={{email :"",firstName:""}} //inital value start 
      
        validationSchema={Yup.object({
            firstName:Yup.string().min(10,"min lettr 10").required(),
            email:Yup.string().email("Invalid email address").required()
        }) }
        onSubmit={(value)=>{
            console.log(value)
        }}
        >
            <Form style={{ textAlign: 'center', marginTop: '30px', marginBottom:"20px"}}>
        <Field
          placeholder="EMAIL ADDRESS*"
          name="email"
          style={{ width: '100%', minWidth: '100px',maxWidth: '350px', height: '50px', marginBottom: '10px' }}
        />
        <br />
        <ErrorMessage name="email" />
        <br />

        <Field
          placeholder="FIRST NAME*"
          name="firstName"
          style={{ width: '100%', minWidth: '100px',maxWidth: '350px', height: '50px', marginBottom: '10px' }}
        />
        <br />
        <ErrorMessage name="firstName" />
        <br />

        <Button
          size="large"
          style={{ width: '100%', maxWidth: '350px', minWidth: '100px', color: 'white', backgroundColor: 'black' }}
          variant="contained"
        >
          SEND
        </Button>
      </Form>
        </Formik>
        </div>
        </>

    )
}



export default Contactus