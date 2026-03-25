import React , { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import authService from '../../services/authService';
import { BrainCircuit, Mail, Lock, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

const RegisterPage = () => {
  
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState('');//alex@timetoprogram.com
  const [password , setPassword ] = useState('');//Test@123
  const [error, setError] = useState('')
  const [loading , setLoading ] = useState(false);
  const [focusedField , setFocusedField] = useState(null);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password.length < 6){
      setError("Password must be atleast 6 characters long.")
      return
    }


    setError('');
    setLoading(true);
    try {
        await authService.register(username, email, password);
        toast.success('Registered successfully! Please Login.');
        navigate('/login');
    } catch (err) {
        setError(err.message || 'Failed to register, Please try again.');
        toast.error(err.message || 'Failed to register');
    } finally {
        setLoading(false);
    }
  };

  return (
    <div>RegisterPage</div>
  );
}

export default RegisterPage;