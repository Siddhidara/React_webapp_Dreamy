import Header from '../Components/Header';
import HomeBody from '../Components/HomeBody';
import PageFooter from '../Components/PageFooter';
import Dreamer from '../Components/Dreamer';
import './home.css'
import { useState } from 'react';
function Home()
{
    const [showdream,setshowdream]=useState(false);
    const[description,setdescription]=useState("");
    return<>
    {showdream?<Dreamer description={description}/>:<HomeBody setdescription={setdescription} setshowdream={setshowdream}/> }
    </>
}
export default Home;