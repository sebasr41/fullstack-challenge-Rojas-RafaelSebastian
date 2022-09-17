

const Char = ({ name, status, species, image, setCharS }) => {
    return (
        <div className="color-square" onClick={() => {setCharS(image)}}>
        <img src={image} alt={name} />
        <p> Nombre: {name}</p>
        <p>Species: {species}</p>
        <p>Status: {status}</p>
      </div>
    )
  }
  export default Char;