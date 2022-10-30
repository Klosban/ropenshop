import './Products.sass'

import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { CiShoppingCart } from 'react-icons/ci'
import { useFetch } from '../../hooks/useFetch'

const Products = () => {
    const url = "http://localhost:3000/products"
    const { data } = useFetch(url)

  return (
    <div className='products'>
        <div className="container-products-off">
            {data && data.map((item) => (
                <div className="card" key={item.id}>
                    <img src={item.img} alt={item.name} />
                    {item.favorite ? <BsHeartFill className='icon-heart heart-active'/> : <BsHeart className='icon-heart'/>}
                    <div className="container-off">
                        <span className="alert-off">{item.offPer}% off</span><h1 className="title-off">Produto em oferta</h1>
                    </div>
                    <div className='container-price'>
                        <span className="coin">R$</span><span className="price">{item.price - (item.price * item.offPer / 100).toFixed(2)}</span>
                    </div>
                    {item.off && <span className="alert-old-price">De: <span className="price">R${item.price}</span></span>}
                    <h1 className="title-product">{item.name}</h1>
                    <div className="cart">
                            <button><CiShoppingCart className='icon-cart'/>Adicionar ao carrinho</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products;