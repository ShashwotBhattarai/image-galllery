import ImageCard from "./imageCard"
import './app.css'
import {images} from '../public/data'

function App() {

  return (
    <div className="mainContainer">
      {images.map((image, index) => (
        <ImageCard
         key={index}
         imageProps={image}
        />
      ))}
    </div>
     
  )
}

export default App
