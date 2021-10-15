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
      transform: ${({isOpen}) => (isOpen ? "translateY(-500px)" : "")};
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

    .navigation {
        margin: 0;
        padding: 0 20px;
        list-style: none;

        li {
            margin-left: 30px;
            margin-bottom: 1rem;
        }

        a {
            color: white;
            text-decoration: none;
        }
    }
`

export const StyledMobileSidebar = styled.div`
    width: 260px;
    display: none;
    /* position */
`