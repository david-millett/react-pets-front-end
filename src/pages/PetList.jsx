import { Link } from "react-router-dom"

const PetList = ({ petList, error }) => {

    const pets = petList.map(pet => {
        return (
            <Link key={pet._id} to={`/pets/${pet._id}`} >
                <li>{pet.name}</li>
            </Link>
        )
    })

    return (
        <section>
            <h1>Pet List</h1>
            {error
                ? <p className="error">{error}</p>
                : (
                    <>
                        <ul>{pets}</ul>
                        <Link to="/pets/new">Add a pet</Link>
                    </>
                )
            }
        </section>
    )

}

export default PetList