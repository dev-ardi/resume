import "./Popup.css";

export function Popup(props: {
  closeable?: boolean;
  timeout: 3000 | number;
  text: string;
  x: number;
  y: number;
}) {
  return (
    <div className="Popup" 
    style={{top: props.x}}>
      {props.closeable ? <CloseButton /> : null}
      {props.text}
    </div>
  );
}

function CloseButton() {
  return <img src="" className="CloseButton" />;
}
