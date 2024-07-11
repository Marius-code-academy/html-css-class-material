import { Alert, Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export default function PokemonForm({ setPokemonData }) {
  const [name, setName] = useState("");
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.get(`${API_URL}/pokemon/${name}`);
      console.log(response.data);
      setPokemonData(response.data);
      setIsSuccess(true)
    } catch (error) {
      setIsError(true)
    }
  }

  useEffect(() => {
    if (isError) {
      setTimeout(() => setIsError(false), 2000)
    }
  }, [isError])

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => setIsSuccess(false), 2000)
    }
  }, [isSuccess])

  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
      <Box onSubmit={handleSubmit} component={"form"} display={"flex"} alignContent={"center"} justifyContent={"center"}>
        <TextField value={name} onChange={(e) => setName(e.target.value)} size="small" id="outlined-basic" label="Name" variant="outlined" />
        <Button type="submit" variant="outlined">
          SEARCH
        </Button>
      </Box>
      {
        isSuccess && <Alert severity="success">This is a success Alert.</Alert>
      }
      {
        isError && <Alert severity="error">This is an error Alert.</Alert>
      }
    </Box>
  );
}
