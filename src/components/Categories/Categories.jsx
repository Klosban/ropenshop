import './Categories.sass'

// icons
import { IoShirtSharp } from 'react-icons/io5'
import { AiFillGift } from 'react-icons/ai'
import { FaHeadphonesAlt, FaBook } from 'react-icons/fa'
import { MdComputer, MdFastfood } from 'react-icons/md'

const Categories = () => {
  return (
    <div className='categories'>
        <h1 className='title-categories'>Compre <span>por categorias</span></h1>
        <div className="container-categories">
            <div className="card">
                <IoShirtSharp className='icon'/><span>Moda</span>
            </div>
            <div className="card">
                <AiFillGift className='icon'/><span>Presentes</span>
            </div>
            <div className="card">
                <FaHeadphonesAlt className='icon'/><span>Eletrônicos</span>
            </div>
            <div className="card">
                <FaBook className='icon'/><span>Livros</span>
            </div>
            <div className="card">
                <MdComputer className='icon'/><span>Informática</span>
            </div>
            <div className="card">
                <MdFastfood className='icon'/><span>Alimentos</span>
            </div>
        </div>
    </div>
  )
}

export default Categories;