import { useState } from 'react'
import classes from './Form.module.css'
import {useRouter} from 'next/router'

const Form = () => {
    const [date,setDate] = useState({})
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [image,setImage] = useState('')

    const router = useRouter()

    const dateChangeHandler = event => {
        const data = event.target.value.split('T')
        const date = data[0].split("-")
        const time = data[1].split(":")
        const newDate = new Date(date[0],date[1],date[2],time[0],time[1])
        
        setDate(newDate.getTime())
    }

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }

    const imageChangeHandler = (event) => {
        setImage(event.target.value)
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value)
    }

    const submitFormHandler = async(event) => {
        event.preventDefault();
        const url = "https://meetup-reactjs-default-rtdb.firebaseio.com/meetups.json"
        const reponse = await fetch(url, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title,
                image,
                date,
                description
            })
        })
        const data = await reponse.json()
        setTitle('')
        setImage('')
        setDate({})
        setDescription('')
        router.replace('/')
    }
    return(
        <form className = {classes.Box} onSubmit = {submitFormHandler}>
          <h3 style = {{textAlign:"center"}}>Add Meetup</h3>
          <div>
            <label htmlFor = "title">Enter the title : </label>
            <input onChange  = {titleChangeHandler} id = "title" value = {title} />
          </div>
          <div>
            <label htmlFor = "image">Enter the image : </label>
            <input onChange = {imageChangeHandler} id = "image" value = {image} />
          </div>
          <div>
            <label htmlFor = "date">Enter the Date : </label>
            <input onChange = {dateChangeHandler} type = "datetime-local" id = "date" />
          </div>
          <div>
            <label htmlFor = "desc">Enter the Description : </label>
            <input onChange = {descriptionChangeHandler} type = "textfield" id = "desc" value = {description} />
          </div>
          <button type = "submit">Add</button>
        </form>
    )
}

export default Form