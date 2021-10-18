import styled from "styled-components";

export const StyledGallery = styled.div`
    column-count: 2;
    -moz-column-count: 2;
    column-width: 43%;
    -moz-column-width: 43%;
    padding: 0 12px;
    padding-top: 40px;

    @media screen and (max-width: 768px) {
        padding: 0;
    }

    @media screen and (max-width: 425px) {
        column-gap: 6px;
    }

    .pics {
        transition: all 350ms cubic-bezier(0.42, 0.01, 0, 1.04);
        cursor: pointer;
        margin-bottom: 12px;

        :hover {
            filter: opacity(.8);
        }

        @media screen and (max-width: 425px) {
            margin-bottom: 6px;
        }
    }
`