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
    padding: 0 50px;
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
    @media screen and (max-width: 425px) {
        padding: 0 20px;
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
        width: 33px;
        height: 3px;
        background-color: white;
        box-shadow: 0 2px rgba(255,101,47,.2);
        transition: all .5s ease-in-out;
        opacity: ${({menuOpen}) => (menuOpen ? "0" : "1")}
    }

    ::before, ::after {
            content: "";
            position: absolute;
            width: 33px;
            height: 3px;
            background-color: white;
            box-shadow: 0 2px rgba(255,101,47,.2);
            transition: all .5s ease-in-out;
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
