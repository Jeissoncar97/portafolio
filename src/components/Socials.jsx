import '../Estilos/social.css'


function Social(props) {
  return (
    <div className='img-social'>
      <a target='_blank' href={props.link}>
        <img src={props.img} alt={props.alt} title ={props.title} className={props.className}/>
      </a>
    </div>
  );
}



export default Social;
