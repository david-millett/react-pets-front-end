import { useEffect, useState } from "react";
import { show, update } from "../services/petService";
import { useNavigate, useParams } from "react-router-dom";

// Components
import PetForm from "../components/PetForm";

const PetUpdate = ({ fetchPets }) => {

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        breed: ''
    })


    const navigate = useNavigate()
    const { petId } = useParams()
    console.log(petId)
    

    useEffect(() => {
        const fetchPet = async () => {
            try {
                const { data } = await show(petId)
                setFormData(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPet()
    }, [petId])



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await update(petId, formData)
            fetchPets()
            navigate(`/pets/${petId}`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h1>Edit Pet</h1>
            <PetForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                formData={formData}
            />
        </>
    )
}

export default PetUpdate