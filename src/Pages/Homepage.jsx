import HomeBody from '../Components/HomeBody';
import Dreamer from '../Components/Dreamer';
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