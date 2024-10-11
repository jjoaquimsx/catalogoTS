import { Header, Container, Box, Chevronright, Chevronleft, Middle, Box2 } from "./styled"
import { Link } from "react-router-dom"
import itemFem from "../../../itemfem.json"
import Modal from "react-modal"
import Modaltypescript from "./modalType/modalType"
import ModalType from 'react-bootstrap/Modal';
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { useContext, useState } from "react";
import "./styles.css"
import { ImageContext } from "../hooks/hookContext"


export default function PageFem(  ) {
    const [scrollX, setScrollX] = useState(-400);
    const [show, setShow] = useState(false); // Controle do ModalType (modal de compra)
    const [modalOpen, setModalOpen] = useState(false); // Controle do Modal (modal de imagem)
    const [images, setImages] = useState(''); // Guarda a imagem selecionada

    const handleClose = () => {
        setShow(false);
    };

    const {image, setImage} = useContext(ImageContext)
    

    const handleShow = () => {
        setShow(true);
    };

    const openModal = (image: string) => {
        setImages(image);
        setModalOpen(true);
        setImage({url: image})
        // Abre o modal de imagem
    };

    const closeModal = () => {
        setModalOpen(false); // Fecha o modal de imagem
        setImages(""); // Reseta a imagem
    };

    const handleLeft = () => {
        let x = scrollX + 250;
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
        setImage({url: images})
    };


    const handleRight = () => {
        let x = scrollX - 250;
        let listW = itemFem.length * 150;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) + 15;
        }
        setScrollX(x);
    };

    return (
        <>
            <Header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaMMxVKb0821Bi4c06NVQxxgE4bRWvSnUeeoH3uz9dtr92cUnkOrqlMIRgz-Dp-YbzaGQ&usqp=CAU" alt="logo-kallifon" />
                
                <Link to={"/"}>
                    <button className="center">
                        <span>Voltar</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 74 74"
                            height="34"
                            width="34"
                        >
                            <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                            <path
                                fill="black"
                                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                            ></path>
                        </svg>
                    </button>
                </Link>
            </Header>

            <Container style={{ width: itemFem.length * 150, marginLeft: scrollX }}>
                <Chevronright onClick={handleLeft} className="chevron">
                    <FaCircleChevronLeft size={30} color="white" />
                </Chevronright>
                {itemFem.length > 0 &&
                    itemFem.map((item) => (
                        <Box key={item.id}>
                            <img src={item.img} alt="" onClick={() => openModal(item.img)} style={{ objectFit: "cover" }} />
                        </Box>
                    ))}

                <Chevronleft onClick={handleRight}>
                    <FaCircleChevronLeft size={30} color="white" />
                </Chevronleft>
            </Container>

            <Middle>
                {itemFem.length > 0 && itemFem.map((item) => (
                    <Box2 key={item.id}>
                        <img src={item.img} alt="" onClick={() => openModal(item.img)} style={{ objectFit: "cover" }} />
                    </Box2>
                ))}
            </Middle>



            {/* Modal de imagem */}
            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                contentLabel="Imagem em tela"
                className="full-screen"
                overlayClassName="overlay"
            >
                <div onClick={closeModal} style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1em",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0, 0, 0, .6)",
                    width: "100vw",
                    height: "100vh",
                }}>
                    <img src={images} alt="" className="fullscreen" style={{ objectFit: "cover", width: "70%", height: "70%" }} />
                    <div>
                        <button onClick={() => handleShow()} style={{
                            backgroundColor: "#8C3A60",
                            color: "#f2b6c1",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "10px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            fontSize: "1.4em",
                            fontFamily: "Poppins, sans-serif",
                        }}>
                            Comprar <FaSquareWhatsapp style={{ marginLeft: "10px" }} color="#25d366" size={30} />
                        </button>
                    </div>
                </div>
            </Modal>

            {/* Modal de compra */}
            <ModalType show={show} onHide={handleClose}>
                <Modaltypescript/>
            </ModalType>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
        </>
    );
}
