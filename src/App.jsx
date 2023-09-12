import focaccia from './pizzas/focaccia.jpg'
import margherita from './pizzas/margherita.jpg'
import spinaci from './pizzas/spinaci.jpg'
import funghi from './pizzas/funghi.jpg'
import salamino from './pizzas/salamino.jpg'
import prosciutto from './pizzas/prosciutto.jpg'

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: focaccia,
    soldOut: false
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: margherita,
    soldOut: false
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: spinaci,
    soldOut: false
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: funghi,
    soldOut: false
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: salamino,
    soldOut: true
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: prosciutto,
    soldOut: false
  }
]

import React from 'react'
import { data } from 'autoprefixer'

const App = () => {
  return (
    <div className=''>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}
function Header() {
  return (
    <div className='max-w-full   bg-yellow-600 text-2xl font-bold uppercase px-8 text-white  flex items-center  '>
      <h1>Fast React Pizza Co.</h1>
    </div>
  )
}
function Menu() {
  const pizzas = pizzaData
  const numPizzas = pizzas.length

  return (
    <main className=' p-8 max-w-screen-md mx-auto '>
      <div className='text-center p-4'>
        <h2
          className='text-xl uppercase tracking-wider  before:content-[" "] before:w-28 before:h-1 before:bg-red-400 before:-top-1   relative before:absolute 
        after:content-[" "] after:w-28  after:h-1 after:bg-red-400 after:-bottom-1 transform after:translate-x-24 after:left-80 after:absolute
      '
        >
          Our Menu
        </h2>
        <p>Authentic Italian cusine. 6 creative dishes to choose from. All from our stone oven. all organic all delicious</p>
      </div>
      {numPizzas ? (
        <ul className=' grid grid-cols-2 gap-y-12'>
          {pizzas.map((pizza) => (
            <Pizza key={pizza.name} pizza={pizza} />
          ))}
        </ul>
      ) : (
        <p>Come Back letter</p>
      )}
    </main>
  )
}
function Pizza({ pizza }) {
  return (
    <li className={`${pizza.soldOut?"grayscale":"flex items-center gap-8"}`}>
      <img src={pizza.photoName} className='h-32 object-cover ' alt='' />
      <div className=' flex flex-col gap-2'>
        <h2>{pizza.name}</h2>
        <p className='w-40 italic' >
          <span>{pizza.ingredients}</span>
        </p>
        <span>{pizza.soldOut ? 'SOLD OUT' : pizza.price}</span>
      </div>
    </li>
  )
}

function Footer() {
  const hour = new Date().getHours()
  const openHour = 23
  const closeHour = 24
  const isOpen = hour >= openHour && hour <= closeHour
  // if ()
  return (
    <footer className=' flex flex-col gap-8 '>
      <div className='flex flex-col items-center gap-3'>
        {isOpen ? <Order closeHour={closeHour} /> : <p>We are close</p>}

        <button className='bg-yellow-600  py-2 px-8'>Order</button>
      </div>
      <div className='bg-yellow-600 h-4'></div>
    </footer>
  )
}
const Order = ({ closeHour }) => {
  return <h1>We re open until {closeHour}. Come vist us or order online </h1>
}
export default App
