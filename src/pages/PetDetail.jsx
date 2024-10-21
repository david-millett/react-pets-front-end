import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { show } from "../services/petService"

const PetDetail = () => {
    const [pet, setPet] = useState(null)

    //! Location variables
    const { petId } = useParams()

    useEffect(() => {
        const fetchPet = async () => {
            try {
                const { data } = await show(petId)
                setPet(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPet()
    }, [petId])

    return (
        <>
            { pet &&
                <section>
                    <h1>{pet.name}</h1>
                    <h3>Breed: {pet.breed}</h3>
                    <h3>Age: {pet.age} year{pet.age === 1 ? '' : 's'}</h3>
                    <Link to={`/pets/${pet._id}/edit`}>Edit {pet.name}</Link>
                </section>
            }
        </>
    )
}

export default PetDetail