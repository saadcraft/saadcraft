import skills from './skills.jsx';
import SkillCom from '../SkillCom.jsx';

export default function Skill(){
    const skill = skills.map( skillpara => {
        return (<SkillCom 
                  key={skillpara.id}
                  {...skillpara}
                  /*
                  name={skillpara.name} 
                  img={skillpara.img} 
                  condition={skillpara.condition}  you can call with every single value or use like up case
                  you can use filter instead map for select just what you want from data  
                  visit this link : https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
                  */
                />)
      })

      return(
        <div className="skills">
            <h1>Skills</h1>
            <div className='skill'>
                {skill}
            </div>
         </div>
      )
}