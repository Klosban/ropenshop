import './Navbar.sass'

import { NavLink } from 'react-router-dom';

// icons
import { BsSearch } from 'react-icons/bs'
import { CiLocationOn, CiHeart, CiShoppingCart, CiUser, CiDiscount1 } from 'react-icons/ci'

const Navbar = () => {
  return (
    <div className='container-navbar'>
        <div className="container-top">
            <h1>Ropen <span>Shop</span></h1>
            <div className="container-search">
                <select name="category" id="category">
                    <option value="all">Todas categorias</option>
                    <option value="fashion">Moda</option>
                    <option value="books">Livros</option>
                    <option value="electronics">Eletrônicos</option>
                    <option value="computing">Informática</option>
                    <option value="food">Alimentos</option>
                </select>
                <input type="text" placeholder='Pesquisar...' /><BsSearch className='icon-search' />
            </div>
            <div className="container-address">
              <CiLocationOn className='icon-location' /><input type="text" defaultValue='Rua Lorem I. 117'/>
            </div>
            <div className="container-cart">
              <CiShoppingCart className='icon-cart' /><div className="notification">1</div><span>Carrinho</span>
            </div>
            <div className="container-favorites">
              <CiHeart className='icon-heart' /><div className="notification">4</div><span>Favoritos</span>
            </div>
        </div>
        <div className="container-bottom">
          <nav>
            <NavLink to='/' end className={({isActive}) => (isActive ? 'active' : '')}>Início</NavLink>
            <NavLink to='/support' className={({isActive}) => (isActive ? 'active' : '')}>Acompanhar Produto</NavLink>
            <NavLink to='/offers' className={({isActive}) => (isActive ? 'active' : '')}>Ofertas</NavLink>
            <NavLink to='/topsellers' className={({isActive}) => (isActive ? 'active' : '')}>Mais vendidos</NavLink>
          </nav>
          <span className='bar'>|</span>
          <div className="container-right">
            <div className="container-discount">
              <CiDiscount1 className='icon-discount'/><span>Cupom de<br/>Desconto</span>
            </div>
            <div className="container-user">
              <CiUser className='icon-user'/><span>Entre ou registre-se<br/>para ganhar um cupom!</span>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Navbar;