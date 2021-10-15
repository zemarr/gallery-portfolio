import styled from "styled-components";

export const StyledModal = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    transition: opacity 1.4s cubic-bezier(0.42, 0.01, 0, 1.04), visibility .4s cubic-bezier(0.42, 0.01, 0, 1.04), transform .4s cubic-bezier(0.42, 0.01, 0, 1.04);
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    z-index: 9999;

    img {
        width: auto;
        max-width: 100%;
        height: auto;
        max-height: 80%;
        display: block;
        line-height: 0;
        box-sizing: border-box;
        padding: 20px 0 20px;
        margin: 0 auto;
        position: relative;
        /* top: -40px; */
    }
`