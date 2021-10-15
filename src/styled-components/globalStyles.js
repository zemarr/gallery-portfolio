import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Color pallette */

    :root {
        --text-font: "Neue Haas Unica";
        --heading-font: "'Playfair Display', serif";
        --background-color: #0C0C0C;
        --font-color: #FAFAFA;
    }

    * {
        scroll-behavior: smooth;
    }


    body {
        margin: 0;
        padding: 0;
        background-color: var(--background-color);
        color: var(--font-color);
        font-family: var(--text-font);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: var(--text-font)!important;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`;

export const StyledHeader = styled.header`
    background-color: var(--background-color);
    padding: 0 50px;
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 888;
    top: -70px;
    opacity: 0;
    visibility: hidden;

    /* transform: translateY(-70px); */

    @media screen and (max-width: 1024px) {
        padding: 20px;
    }
    @media screen and (max-width: 768px) {
        position: relative;
        top: 0;
        opacity: 1;
        visibility: visible;
        padding: 0px;
    }
    @media screen and (max-width: 425px) {
        padding: 0;
    }

`

export const StyledHamburger = styled.div`
    position: relative;
    flex-direction: column;
    padding: 16px 2px;
    opacity: 0;
    display: none;

    @media screen and (max-width: 768px) {
        opacity: 1;
        display: flex;
    }

    .menu-btn_hamburger {
        width: 28px;
        height: 2px;
        background-color: white;
        box-shadow: 0 2px rgba(255,101,47,.2);
        transition: all .5s cubic-bezier(0.42, 0.01, 0, 1.04);
        opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")}
    }

    ::before, ::after {
            content: "";
            position: absolute;
            width: 28px;
            height: 2px;
            background-color: white;
            box-shadow: 0 2px rgba(255,101,47,.2);
            transition: all .5s cubic-bezier(0.42, 0.01, 0, 1.04);
        }

        ::before {
            transform: ${({ menuOpen }) => (menuOpen ? "" : "translateY(-9px)")};
            transform: ${({ menuOpen }) => (menuOpen ? "rotate(45deg)" : "")};
        }
            ::after {
            transform: translateY(9px);
            transform: ${({ menuOpen }) => (menuOpen ? "rotate(-45deg)" : "")};
        }
    
`

export default GlobalStyle;
