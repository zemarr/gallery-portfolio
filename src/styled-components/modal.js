import styled from "styled-components";

export const StyledModal = styled.div`

    img {
        transition: opacity 1.4s cubic-bezier(0.42, 0.01, 0, 1.04),
            visibility 0.4s cubic-bezier(0.42, 0.01, 0, 1.04),
            transform 0.4s cubic-bezier(0.42, 0.01, 0, 1.04);
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