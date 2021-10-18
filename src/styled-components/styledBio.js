import styled from "styled-components";

export const StyledBio = styled.section`
    /* padding: 0 12px; */

    @media screen and (max-width: 768px) {
        padding: 0;
    }

    @media screen and (max-width: 425px) {
        column-gap: 6px;
    }

    .bio-portrait {
        width: 100%;
        height: 100vh;
        left: 0%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 30px;
        background-color: black;
        transition: opacity 1.4s cubic-bezier(0.42, 0.01, 0, 1.04),
            visibility 0.4s cubic-bezier(0.42, 0.01, 0, 1.04),
            transform 0.4s cubic-bezier(0.42, 0.01, 0, 1.04);
        visibility: visible;
        opacity: 1;
        overflow: hidden;

        @media screen and (max-width: 425px) {
            height: max-content;
            
        }
    }

    .bio-portrait img {
        width: 100%;
        max-width: 100%;
        height: auto;
        /* max-height: 80%; */
        display: block;
        line-height: 0;
        box-sizing: border-box;
        padding: 20px 0 20px;
        margin: 0 auto;
        position: relative;
    }

    .bio-content {
        padding: 40px 20px 20px 0;
        font-size: 18px;
        font-family: var(--heading-font);
        overflow-y: scroll;
        height: calc(100vh - 20px);
        scrollbar-width: thin;

        
        ::-webkit-scrollbar {
            width: 3px !important;
        }

        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1) !important;
            border-radius: 50px !important;
        }

        ::-webkit-scrollbar-thumb {
            background-color: var(--font-color) !important;
            /* border-radius: 50px; */
        }

        @media screen and (max-width: 768px) {
            overflow-y: hidden;
            height: fit-content;
            padding-right: 0;
        }
        @media screen and (max-width: 425px) {
            /* padding-top: 0; */

        }
    }

`