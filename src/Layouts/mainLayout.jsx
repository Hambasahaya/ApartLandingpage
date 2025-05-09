import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Jumbotron from "../Components/Jumbotron";
import Aboutsection from "../Components/Aboutsection";
import Unit from "../Components/Unit";

// import '../Styles/style.css'

export default function MainLayout({children}){
    return(
    <>
<Navbar/>
    <div className="main d-flex flex-column gap-5">
        <section id="home">
        <Jumbotron/>
        </section>

        <section id="about">
        <Aboutsection/>
        </section>

        <section id="unit">
        <Unit/>
        </section>
<Footer/>
</div>
</>
    );
}