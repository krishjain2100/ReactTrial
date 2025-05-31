import React from 'react'
import Card from './Card'
import './styles/Cards.css'

export default function Cards() {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Pricing</h2>
      <div className="cards">
        <Card planType="Basic"    price="$14.99" idx={2} />
        <Card planType="Standard" price="$49.99" idx={4} />
        <Card planType="Premium"  price="$89.99" idx={6} />
      </div>
    </section>
  )
}
