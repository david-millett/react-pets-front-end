import { useState } from "react";
import { create } from "../services/petService";
import { useNavigate } from "react-router-dom";

// Components
import PetForm from "../components/PetForm";

const PetCreate = ({ fetchPets }) => {

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        breed: ''
    })

    const navigate = useNavigate()
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await create(formData)
            fetchPets()
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h1>Add a Pet</h1>
            <PetForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                formData={formData}
            />
        </>
    )
}

export default PetCreate