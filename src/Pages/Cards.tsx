import React from 'react'
import Mycard from '../components/Mycard'

const Cards: React.FC = () => {
    return (
        <div className="container mt-3">
            <p className="h3 text-info">Cards</p>
            <div className="row">
                <Mycard heading='Good Morning' />
                <Mycard heading='Good Afternoon' />
                <Mycard heading='Good Evening' />
                <Mycard heading='Good Night' />
            </div>
        </div>
    )
}

export default Cards