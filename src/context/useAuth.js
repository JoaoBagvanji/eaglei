import { useState, useEffect } from "react";

import api from "../services/api";

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token){
        api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
        setAuthenticated(true)
    }

    setLoading(false)
  }, [])

  async function handleLogin(){
    const {data: {token} } =await api.post('/LogIn')
    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`

    setAuthenticated(true)
  }
}