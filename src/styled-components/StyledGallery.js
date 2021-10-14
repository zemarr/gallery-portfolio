import styled from "styled-components";

export const StyledGallery = styled.div`
    column-count: 2;
    -moz-column-count: 2;
    column-width: 43%;
    -moz-column-width: 43%;
    padding: 0 12px;

    @media screen and (max-width: 425px) {
        column-count: 1;
        -moz-column-count: 1;
        column-width: 100%;
        -moz-column-width: 100%;
    }

    .pics {
        transition: all 350ms ease-in-out;
        cursor: pointer;
        margin-bottom: 12px;
    }
`