import styled from "styled-components";

function Icon({ children }) {
    const Wrap = styled.div`
        width: 3rem;
        height: 3rem;
        position: relative;

        * {
            width: 100%;
            height: 100%;
        }
    `;

    return <Wrap>{children}</Wrap>;
}

export default Icon;
