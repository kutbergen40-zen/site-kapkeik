import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

interface Product {
  id: number
  title: string
  image_url: string
  bg_color: string
}

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function getProducts() {
      const { data } = await supabase.from('products').select('*')
      if (data) setProducts(data)
    }
    getProducts()
  }, [])
    
  return (
  <div>

    {/* HEADER */}
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "30px 80px",
      zIndex: 2
    }}>
      <div style={{fontSize: "28px", fontWeight: "500"}}>
        <span style={{fontStyle:"italic", fontSize:"18px"}}>The</span><br/>
        Sweet Spot
      </div>

      <div style={{display:"flex", gap:"40px", fontSize:"18px"}}>
        <a href="#" style={navStyle}>Home</a>
        <a href="#" style={navStyle}>Menu</a>
        <a href="#" style={navStyle}>About Us</a>
        <a href="#" style={navStyle}>Contact</a>
      </div>
    </div>

    {/* HERO BANNER */}
    <div style={{
      height: "620px",
      backgroundImage:
        "url(https://i.pinimg.com/1200x/9d/9a/97/9d9a97babf0141e446918fe19a995a9a.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "#000",
      marginBottom: "20px"
    }}>
      <h1 style={{
        fontSize: "72px",
        fontStyle: "italic",
        fontWeight: "400",
        marginBottom: "5px"
      }}>
        Taste the Sweetness
      </h1>

      <p style={{
        fontSize: "20px",
        color: "#333",
        letterSpacing: "1px"
      }}>
        Handcrafted Delights for Every Occasions
      </p>
    </div>

      {/* 3. СЕТКА ТОВАРОВ */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 100px' }}>
        <h2 style={{ 
          textAlign: 'center', 
          letterSpacing: '5px', 
          fontSize: '20px', 
          marginBottom: '50px',
          fontWeight: 'normal'
        }}>PRODUCTS</h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '25px' 
        }}>
          {products.map((item) => (
            <div
  key={item.id}
  style={{
    backgroundColor: item.bg_color || '#F6F1FF',
    borderRadius: '20px',
    padding: '30px',
    textAlign: 'center',
    boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px) scale(1.02)"
    e.currentTarget.style.boxShadow = "0 25px 45px rgba(0,0,0,0.15)"
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)"
    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.08)"
  }}
>
 <img
  src={item.image_url}
  alt={item.title}
  style={{
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '18px',
    marginBottom: '25px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
  }}
/>
 <h3 style={{
  fontSize: '24px',
  fontWeight: '600',
  marginBottom: '15px',
  color: '#333'
}}>
  {item.title}
</h3>
 <button style={{
  background: '#000',
  color: '#fff',
  border: 'none',
  borderRadius: '30px',
  padding: '10px 25px',
  fontSize: '12px',
  cursor: 'pointer',
  letterSpacing: '1px',
  transition: 'all 0.3s'
}}>
  VIEW DETAILS
</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Простой стиль для ссылок
const navStyle = {
  textDecoration: "none",
  color: "#000",
  fontSize: "18px",
  paddingBottom: "5px"
}

export default App