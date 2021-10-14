import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Color pallette */

    :root {
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
        font-family: 'PT Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`;

export const StyledHeader = styled.header`
    padding: 50px;
    display: flex;
    justify-content: space-between;
`

export default GlobalStyle;
