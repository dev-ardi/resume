import "./Title.css"

export type styles =
  "Name" | 
  "Section" |
  "Job"


export function Title(props: {name: string, type: styles}) {
  return(
    <div className={props.type}>
	    {props.name}
    </div>
  )
}