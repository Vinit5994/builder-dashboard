import React, { Fragment , useState } from 'react'
import Button from './Button'
import Input from './Input'
import {useNavigate} from "react-router-dom"
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

const AuthForm = ({signup }) => {
  const [firstName , setFirstName]=useState();
  const [lastName ,setLastName]=useState();
  const [email,setEmail]=useState();
  const[password,setPassword]=useState();

  const [password2, setPassword2] = useState("");
  const [type, setType] = useState('password2');
  const [icon, setIcon] = useState(eyeOff);
  const navigate = useNavigate();

    
  // const auth =getAuth();
  const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
  }
  const register= async()=>{ 
    navigate('/builder-app');
    // if(signup){
    //   axios.post("http://localhost:8081/",{
    //     fname : firstName,
    //     lname : lastName,
    //     email:email,
    //     password : password
    //   }).then((res)=>{
    //     console.log(fname)
    //   })

    //   console.log("signup");

    // }else
    // console.log("login")
    // // console.log(user)
  }
  const login=async()=>{ }
  return (
    <div className='form'>
        {/* {signup && <> 
        <Input  icon="fa-solid fa-user" type="text" placeholder="first name "
        onChange={(e)=>{
          setFirstName(e.target.value)
        }}/>
      <Input icon="fa-solid fa-user" type="text" placeholder="last name "
      onChange={(e)=>{
        setLastName(e.target.value)
      }}/>
      </>} */}




      <span>EMAIL</span>
      <Input  type="email" placeholder="Email-address"
      onChange={(e)=>{
        setEmail(e.target.value)
      }}/>

      <span>PASSWORD</span>
      <span id='forgote'>Forgote password?</span>

      <div className='password-eye'>
      <Input id="password" type="password" placeholder="Password"
      onChange={(e)=>{
        setPassword(e.target.value)
      }}/>
      <span id='eye' class="flex justify-around items-center" onClick={handleToggle}>
                <Icon class="absolute mr-10" icon={icon} size={25}/>
      </span>
      </div>
      <Button value={'Log in'
        // `${!signup ? 'Log in' : 'Sign up'}`
         } onClick={register} />
    </div>
  )
}

export default AuthForm
