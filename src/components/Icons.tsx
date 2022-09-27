import React from "react"
import github from '../assets/githubLogo.svg';
import linkedin from '../assets/linkedinLogo.png';
import email from '../assets/mailLogo.png';
import phone from '../assets/phoneLogo.png';
import './Icons.css'
export function Icon(props: { img: string, link: string, alt?: string }) {
  return (
    <li>
      <a href={props.link}>
        <img className="linkLogo" src={props.img} alt={props.alt ?? ""} />
      </a>
    </li>
  )
}

export function IconPopup(props: { img: string, link: string, alt?: string, text: string }) {
  const [visible, toggleVisible] = React.useState(false)
  return (
    <li>
      <a href={props.link}>
        <img className="linkLogo" src={props.img} alt={props.alt ?? ""} onClick={() => { toggleVisible(!visible) }} />
        {visible ? props.text : ""}
      </a>
    </li>
  )
}
export function IconList() {
  return (
    <ul className='IconList'>
      <Icon link="https://github.com/Dev-ardi" alt='github' img={github} />
      <Icon link="https://www.linkedin.com/in/oriong/" alt="LinkedIn" img={linkedin}></Icon>
      <IconPopup link="mailto:oriongonza@gmail.com" alt="email" img={email} text="oriongonza@gmail.com" />
      <IconPopup link="tel:+34652522142" alt="phone number" img={phone} text="+34 652 522 142" />
    </ul>
  )
}