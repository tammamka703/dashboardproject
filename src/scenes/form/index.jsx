import React from 'react'
import {Box , TextField, useMediaQuery } from "@mui/material";
import * as yup from "yup";
import { Formik } from 'formik';
// import useMediaQuery from '@mui/material';


const InitialValues = {
    firstName : "",
    lastName : "",
    phone : "",
    emali : "",
    address1 : "",
    address2 : ""
};

// this is some characters to validate phone number based on...
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
// the schema we are using is just for validation to give the form the validaiton we need 
// string() built in function ensure that the value is a string 
// required() is function that disaple the statment inside of it when the required properity in html is true
const userSchema = yup.object({ 
    firstName : yup.string().required("required"),
    lastName : yup.string().required("required"),
    phone : yup.string().matches(phoneRegExp , "this phone number not valid").required("required"),
    email : yup.string().email("invalid email").required("required"),
    address1 : yup.string().required("required"),
    address2 : yup.string().required("required")
})

// components 
import Header from "../../components/Header";
import { FourMp } from '@mui/icons-material';
function addNewUser() {
// this hook will make us able to use the media query inside javascript
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const HandelFormSubmit = (values)=>{
        console.log(values)
    }

  return (
    <Box>
        <Header
         title="Add New User"
         subtitle='create new user profile'
        />
        <Box
         paddingLeft="10px"
        >
            <Formik
                initialValues={InitialValues}
                validationSchema = {userSchema}
                onSubmit={HandelFormSubmit}
            >
                {/*the childe we pass is a from returned by an announemoi=us function  */}
                {({
                    errors,
                    values,
                    touched,
                    handleSubmit,
                    handleBlur,
                    handleChange
                })=> (
                        <form
                         onSubmit={handleSubmit}
                         onBlur={handleBlur}
                        >   
                            <Box
                                paddingInline={1}
                                display="grid"
                                gap="40px"
                                gridTemplateColumns="repeat(4, minmax(0,1fr))"
                                sx={{
                                    "& > div":{
                                        gridColumn : isNonMobile ? undefined : "span 4",
                                    }
                                }}
                            >
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    type='text'
                                    label="first name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstName}
                                    name='firtsName'
                                    // what is touched it will become true as soon as you touched the box and leave it without typing something inside of it
                                    // so the error message will appear never after touching the box once 
                                    // alsoe it will fire the error style when the validations goes wrong from the yup validation object 
                                    error={!!touched.firstName && !!errors.firstName}
                                    helperText={touched.firstName && errors.firstName}
                                    sx={{
                                        gridColumn : "span 2"
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    type='text'
                                    label="last name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.lastName}
                                    name='lastName'
                                    // what is touched it will become true as soon as you touched the box and leave it without typing something inside of it
                                    // so the error message will appear never after touching the box once 
                                    // alsoe it will fire the error style when the validations goes wrong from the yup validation object 
                                    error={!!touched.lastName && !!errors.lastName}
                                    helperText={!!touched.lastName && !!errors.lastName}
                                    sx={{
                                        gridColumn : "span 2"
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    type='email'
                                    label="email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.emali}
                                    name='email'
                                    // what is touched it will become true as soon as you touched the box and leave it without typing something inside of it
                                    // so the error message will appear never after touching the box once 
                                    // alsoe it will fire the error style when the validations goes wrong from the yup validation object 
                                    error={!!touched.emali && !!errors.emali}
                                    helperText={!!touched.emali && !!errors.emali}
                                    sx={{
                                        gridColumn : "span 4"
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    type='phone'
                                    label="contact phone"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.contact}
                                    name='phone'
                                    // what is touched it will become true as soon as you touched the box and leave it without typing something inside of it
                                    // so the error message will appear never after touching the box once 
                                    // alsoe it will fire the error style when the validations goes wrong from the yup validation object 
                                    error={!!touched.contact && !!errors.contact}
                                    helperText={!!touched.contact && !!errors.contact}
                                    sx={{
                                        gridColumn : "span 4"
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    type='text'
                                    label="address"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.address1}
                                    name='address1'
                                    // what is touched it will become true as soon as you touched the box and leave it without typing something inside of it
                                    // so the error message will appear never after touching the box once 
                                    // alsoe it will fire the error style when the validations goes wrong from the yup validation object 
                                    error={!!touched.address1 && !!errors.address1}
                                    helperText={!!touched.address1 && !!errors.address1}
                                    sx={{
                                        gridColumn : "span 4"
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    variant='filled'
                                    type='text'
                                    label="address"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.address2}
                                    name='address2'
                                    // what is touched it will become true as soon as you touched the box and leave it without typing something inside of it
                                    // so the error message will appear never after touching the box once 
                                    // alsoe it will fire the error style when the validations goes wrong from the yup validation object 
                                    error={!!touched.address2 && !!errors.address2}
                                    helperText={!!touched.address2 && !!errors.address2}
                                    sx={{
                                        gridColumn : "span 4"
                                    }}
                                />
                                

                            </Box>
                        </form>
                    )
                }
            </Formik>
        </Box>
    </Box>
  )
}

export default addNewUser