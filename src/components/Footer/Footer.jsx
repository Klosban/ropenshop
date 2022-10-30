import './Footer.sass'
import { Link } from 'react-router-dom'

// icons
import { AiOutlineWhatsApp, AiOutlinePhone } from 'react-icons/ai'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="support">
          <h1>Atendimento</h1>
          <span><AiOutlineWhatsApp className='icon'/>{'(22) 9999-9999'}</span>
          <span><AiOutlinePhone className='icon'/>{'(22) 9999-0000'}</span>
          <span><HiOutlineBuildingOffice2 className='icon'/>CEP - Rua Lorem Im. - XXXXXXXXXXXXXX</span>
        </div>
        <div className="help">
          <h1>Ajuda</h1>
          <Link to='/'>Termos e condições</Link>
          <Link to='/'>Política de privacidade</Link>
          <Link to='/'>Política de troca e devolução</Link>
          <Link to='/'>Locais de entrega e prazos</Link>
          <Link to='/'>Atendimento online</Link>
        </div>
        <div className="payments">
          <h1>Formas de Pagamento</h1>
          <span><img src="https://s3-alpha-sig.figma.com/img/430c/f9f2/2288c6a037384a6c0cd70540363e1e3f?Expires=1667779200&Signature=g1wNXsMt9ruQuZl-uHFqAeo7VmX4XmWZalFJM-yNqPqciS3AMf1kPb~b2O0j1nhkocRl-iaBVibEnrnaex0aVMNZjaW-ycWaLB23~BGHcHISbXEtlRutqRDMmVt-dsmRsjTzDh4Lu~TxQNXTpcqZ8GgmVbTejbz7~Vle5KZcRCVwviD55baMM~CyWnjK6z9NIcVzMj4JRjtuw4zb4a4e5vvCYUakQIsukdQDR9tEzgvSkwubXojX6wDyRdSlR8yiRYqdljeb7RIprsEahSmqX9VGPh3C2pTQqLD-9TLvSIrlZbeTnluRrntn9jLUR9hjo2A1poyt1aVHagCPeeqIkg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="pix" className='icon' />Pix</span>
          <span><img src='https://s3-alpha-sig.figma.com/img/9002/9eb4/c55ed3396480306b979c2692731555a5?Expires=1667779200&Signature=J4GKwyB8U61YwdNQBOOm8AvikOux~ITMMldE7GpvBXINO-KZj0N1fKnhhbNNbK-1PqkrtMkRL9-CL1cJ7eMUasxS7DX1DKJdt5Rj5d29pWnEaDEAt4gF5taVzq1LrqZE5Wiyb80j7lZIjeL-uaXFIkyZ0TWgOhLAumf0DFr5X5uJ54kqAramWfIJSkst76wG9s4yzpaRpv7mgMp-AZv1AZ-18Fv8d9U8rSa8U~H0fuQNKIDckIfQ7niOC6H1Pgx8v7ZF48Xprf0zveuoO-xWatfIhAK4XcKm2AUkkYZJqfjMT336h17n3RbxGfXHLMM~1SoBC88ZyxdhWYZWauY4uQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' alt='boleto' className='icon' />Boleto</span>
          <span><img src="https://s3-alpha-sig.figma.com/img/f583/41fe/c7b6cf2a0da5dbcc1612c1db3b9a1494?Expires=1667779200&Signature=D4-owuJDATqDfDnOTal0IRgQeE3IR3WxaGM9kG4HGOhwf5UXMP8L09rVMbUu~SGXSkRWN3iEPSVpx0iWuxRXWPYa9AZ346b54INEGDeuNDEdan9-LXEPgHHM0dl6qsRQLp2JgLXGlkB52J50nh1BMMHxnsPy5gz9SPrlSBvtJJJH5N8y68zI9jT2S6dwaY1PnV-m7N0tJYaGFKq04~DZA-5p03jL6jSU9v854Exwan3yY2Jt~9c6PVvhK8xyDNai1hnRM0KnAOrG~OEEZrgs9IFHsMr1WFkPGoGZLZJuGgqbVMqYeOHdaCbwax7FXLTbVTtd61Y0DIRiqbEarmJ8hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="visa" className='icon' />Visa</span>
          <span><img src="https://s3-alpha-sig.figma.com/img/ae77/f9bc/41c49fb9d702489c4bd9498aba5f9187?Expires=1667779200&Signature=AplI5qGQPvFz-Wqjbw7sEWlAaYh9svjW1E96JynN9NKGJ54KJvjfEH-3gsKuCtgohPXxql5EQGJS-XveHa4ePxMHvWOW6OOF1pEmVQPUpLYHCuEvA~J2AiT4JiEvrKBogsVbsu~oiIAW6fMQU8AbNHvtiAXAks7APGcbcjRR2FBso8J9qhFeiGoZ6WXzS-vPqpIuxM6aZoBrXU5DXbJ4ipzC1-6uK1M1Ubs3j8SKf2HlFvONUhnCQdZ82uXu4PZSQpjgx3egyZA1aHHTeUwjc4REV7R2xBTQEJIjV6RadNS-kngWve2yl2rAwDv1FzmURqVQuaOjxfzixG5VeFqy4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="mastercard" className='icon' />Mastercard</span>
          <span><img src="https://s3-alpha-sig.figma.com/img/45b4/f36f/4fb3008e99a697b9ac6a6b601cb19cc1?Expires=1667779200&Signature=FTdaVcJEloCdeg4T90F1pyC7m8RxIGlNHBMLj5ccqRQ3K5o4NqNjlBIGgjf0twM4eeYxJrJFNb29UiGm~Xy90GKAoZyfxmI5LLED1PDPW1Q3jNrNS~hWUS4rQEQNAlUcGbSra0cecA9pB7JhaoJVYgtxGIoezV2NKHxgpqCbcOmtfVzM2kD02R8ENe8KStjgDIVLCtZikjcWrfUkV2CwwF4MvjFemXiyJZxyA1qRFJU0BFaP57BKiNAMIwrbgWdhz2wUT4zlxoBY52sqD2XC2c0FfD9MIiqdBdua9KDvbZhVGFclnKSUyv42OTC9DLg~2AzbMNs-EIjIkhA9pbONcg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="elo" className='icon'  />Elo</span>
          <span><img src="https://s3-alpha-sig.figma.com/img/36be/7d73/7ab3df924f2325c9e13fd6ee8221e137?Expires=1667779200&Signature=WUyoSrZXBgYrGHMANMikFY1n1Oors4Rhzi7DyWd6ppWNCCLwFtm1j~QCM3lsg8VyBUuYyhpGRQv0viOh8ANVHtHae1OR3fzLvf-4CxJAtHH5QT8RRTzRPZwFvUfRiJounfWvNc8mOwF5168~kcE4kvF7w9JJQDcL6sbF1Qzw0ftawReFm1lPn1bGDC2SyVOfRQ8dlTCuCKgh6zZ9oDkZwk3D7sMPPwMZfmW9CSWN4Mtm-RtJne-hmyFxA9r39~HIQyySu2CgPWXsQRjrZAsIAHCd~YD7M7PyAXyAsSmY40z~1leRfXr1b0ZV5NWmyepF2p05vTCdZ3y5IQdKfoLerQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="american express" className='icon' />American express</span>
        </div>
    </div>
  )
}

export default Footer;