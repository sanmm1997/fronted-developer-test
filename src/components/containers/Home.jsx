import React, { useState, useEffect } from 'react';
import Container from "../layout/Container";
import {getHomeData} from "../../utils/api";
import './../../assets/styles/components/Home.scss';

const Home = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await getHomeData();
        setTools(data);
    };

    return (
        <Container>
            <div className="Home row mt-5 text-center justify-content-center">
                <div className="col-sm-12 col-md-8">
                    <h2>Proyecto</h2>
                    <p>Este proyecto realizado para la prueba de "Frontend developer" es desarrollado con las
                    siguientes tecnologías.</p>
                    <div className="Tools-list row justify-content-center">
                        {tools.map((tool) => (
                            <div className="Tools-list__item col-3" key={tool.name}>
                                <h3>{tool.title}</h3>
                                <img src={tool.image} className="w-100" alt={tool.title}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
};

export default Home;
