import styled from "styled-components";
import { Link } from "react-router-dom";
function Button({ children, path, icon }) {
    const Wrap = styled.div`
        * {
            color: #454545;
        }
    `;
    const IconWrap = styled.div`
        margin-bottom: 0.75rem;

        width: 3rem;
        height: 3rem;
        position: relative;

        * {
            width: 100%;
            height: 100%;
        }
    `;

    return (
        <Wrap>
            <Link to={path}>
                <IconWrap>{icon()}</IconWrap>
                {children}
            </Link>
        </Wrap>
    );
}

export default Button;
