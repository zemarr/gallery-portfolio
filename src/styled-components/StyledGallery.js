import styled from "styled-components";

export const StyledGallery = styled.div`
    /* column-count: 2;
    -moz-column-count: 2;
    column-width: 43%;
    -moz-column-width: 43%; */
    min-width: 320px;
    max-width: 2060px;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fill,minmax(320px, 320px));
    column-gap: 10px;
    row-gap: 10px;
    padding-bottom: 50px;

    @media screen and (max-width: 768px) {
        padding: 0;
    }

    @media screen and (max-width: 425px) {
        column-gap: 6px;
        row-gap: 6px;
    }

    .pics {
        transition: all 350ms cubic-bezier(0.42, 0.01, 0, 1.04);
        cursor: pointer;
        overflow: hidden;
        margin-right: 6px;
        margin-bottom: 6px;

        :hover {
            filter: opacity(.9);
        }

        img {
            object-fit: cover;
            object-position: center;
        }

        @media screen and (max-width: 425px) {
            margin-bottom: 6px;
        }
    }
`