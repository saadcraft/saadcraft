export default function SkillCom(prop){
    let cond 
    if(prop.condition === "None"){
        cond = 'Not Yet'
    }else if(prop.condition === "Loading"){
        cond = 'Loading...'
    }
    return(
        <span>
            {cond && <div className="condition">{cond}</div>}
            <img src={prop.img} />
            <p>{prop.name}</p>
          </span>
    )
}