import React  from "react";
import '../assets/css/style.css'
export default function Jumbotron(){
    return(
        <>
        <div className="jumbotron row d-flex flex-row mt-5">
            <div className="col d-flex flex-column">
                <p className="mt-2">Welcome to The Daira Room Apartemen</p>
                <h4>Find Your Depok Apartment Fast, Right from Your Phone</h4>
                <p>Temukan Apartemen Impian Anda di Depok – Cepat, Mudah, Terpercaya Start from 80k!!</p>
            </div>
            <div className="col d-flex flex-column ">
                <img src="/img/apart.png" alt="" srcset="" />
            </div>
        </div>
        </>
    )
}