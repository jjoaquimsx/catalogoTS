import styled from "styled-components";

export const Container = styled.div`
    background-color: #8C3A60;
    font-family: Poppins, sans-serif;
    color: #f2b6c1;
`;

export const Header = styled.header`
    background-color: #8C3A60;
    font-family: Poppins, sans-serif;
    color: #f2b6c1;
    height: 2em;
    display: grid;
    place-items: center;
    font-size: 1.5em;
    border-bottom: 1px solid #f2b6c1;
`;

export const Main = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5em;
    padding-bottom: 4em;

    form{
        margin-top: 2em;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;
    }

    form > div label{
        font-family: Poppins, sans-serif;
    }

    form > div{
        display: flex;
        flex-direction: column;
        width: 80%;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 2.5em;
    border: 1px solid #f2b6c1;
    border-radius: 10px;
    padding: 0 10px;
    font-family: Poppins, sans-serif;
    outline: none;
`;

export const Submit = styled.button`
    cursor: pointer;
    border-radius: 10px;
    font-size: 1.4em;
    padding: 5px 10px;
    outline: none;
    border: none;
    background-color: #f2b6c1;
    color: #8C3A60;
    font-family: Poppins, sans-serif;
    font-weight: bold;
`;