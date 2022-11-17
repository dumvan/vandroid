import {React} from "react"
import Hero from "../../Hero"
import SocialLinks from "../../SocialLinks"
import data from '../../assets/profile.json'


export default function Home(){
  
  return (
    <section>
        {data && data.map((info ,index)=> 
        <Hero 
          key={index}
          intro={info.intro} 
          name={info.name}
          href={info.href}
          download={info.download}
          profile={info.profile}
          />)}
        <SocialLinks/>
    </section> 
  )
}