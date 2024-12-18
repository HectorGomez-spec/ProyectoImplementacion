import React from 'react';
import styles from '../../styles/Salas.module.css'; // Importa los estilos desde el archivo CSS módulo
import img1 from '../../Img/hospital.png'
import img2 from '../../Img/hospital.png'
import img3 from '../../Img/cardiology.png'
import img4 from '../../Img/emergencia.png'
import img5 from '../../Img/endoscopia.png'
import img6 from '../../Img/maternidad.png'
import img7 from '../../Img/oncologia.png'
import img8 from '../../Img/mesa-quirurgica.png'

const Salas = () => {
    
    return (
        <div className={styles.container}>
            <h2>Salas - Sistema de Vigilancia Epidemiológica</h2>
            <ul className={styles.list}>
                {[
                    { src: img1, alt: '2do Piso', link: '/Pages/2do Piso.html' },
                    { src: img2, alt: '5to Piso', link: '/Pages/5do Piso.html' },
                    { src: img3, alt: 'Intermedios', link: '/SalaCardiologia' },
                    { src: img4, alt: 'Emergencia', link: '/Pages/Sala_Emergencias.html' },
                    { src: img5, alt: 'Endoscopia', link: '/Pages/Sala_Endoscopia.html' },
                    { src: img6, alt: 'Maternidad', link: '/Pages/Sala_Maternidad.html' },
                    { src: img7, alt: 'Oncología', link: '/SalaOncologia' },
                    { src: img8, alt: 'Quirofano', link: '/Pages/Sala_Quirofano.html' },
                    
                    
                    
                ].map(({ src, alt, link }) => (
                    <li key={alt} className={styles.listItem}>
                        <img src={src} alt={alt} className={styles.salaImage} />
                        <a href={link} className={styles.link}>{alt}</a>
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default Salas;


