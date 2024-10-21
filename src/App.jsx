import { useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom"
import { index } from "./services/petService";

// Components
import PetList from './pages/PetList'
import PetDetail from "./pages/PetDetail";
import PetCreate from "./pages/PetCreate";
import PetUpdate from "./pages/PetUpdate";

const App = () => {
  // ! State
  const [petList, setPetList] = useState([])
  const [error, setError] = useState('')

  // ! Functions
  const fetchPets = useCallback(async () => {
    try {
        const { data } = await index()
        setPetList(data)
    } catch (error) {
      console.log(error)
      setError(error.response.data.error)
    }
  }, [])

  // ! On initial render (mount)
  // Make a call to the index route of our API
  useEffect(() => {
    fetchPets()
  }, [fetchPets])

  return (
    <>
      <Routes>
        <Route path="/" element={<PetList petList={petList} error={error} />} />
        <Route path="/pets/:petId" element={<PetDetail />} />
        <Route path="/pets/new" element={<PetCreate fetchPets={fetchPets} />} />
        <Route path="/pets/:petId/edit" element={<PetUpdate fetchPets={fetchPets} />} />
      </Routes>
      
    </>
  )
};

export default App;