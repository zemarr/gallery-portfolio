import styled from "styled-components";

export const StyledSidebar = styled.div`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    width: 23%;
    position: relative;
    height: 100vh;
    padding-top: 50px;
    padding-bottom: 50px;
    /* border: solid 1px grey; */

    @media screen and (max-width: 768px) {
      flex-direction: column;
      width: 100%;
      padding-top: 20px;
      height: fit-content;
      position: absolute;
      background-color: black;
      left: 0;
      top: 68px;
      transform: ${({isOpen}) => (isOpen ? "translateY(-500px)" : "")};
      transition: all .5s cubic-bezier(0.42, 0.01, 0, 1.04);
    }

    /* ::after {
        content: "";
        width: 70px;
        height: 30px;
        background-color: red;
        position: absolute;
        right: -50px;
        top: 0;
    } */

    .logo-container {
        margin-left: 50px;

        @media screen and (max-width: 834px) {
            margin-left: 20px;
        }

        h4 {
            margin-top: 0;
            font-weight: 500;
        }
    }

    .sidebar-logo-container {
        padding: 0 50px;
        margin-bottom: 50px;

        @media screen and (max-width: 768px) {
            display: none;
            visibility: hidden;
            opacity: 0;
        }
    }

    .navigation {
        margin: 0;
        padding: 0 20px;
        list-style: none;

        li {
            margin-left: 30px;
            margin-bottom: 1rem;

            @media screen and (max-width: 1024px) {
                margin-left: 0;
            }
            /* @media screen and (max-width: 768px) {
                margin-left: 0;
            } */
        }

        a {
            color: white;
            font-size: 14px;
            text-decoration: none;
        }
    }
`

export const StyledMobileSidebar = styled.div`
    width: 260px;
    display: none;
    /* position */
`