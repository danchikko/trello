import styled from "styled-components";

const Text = (props) => {
    return <CreateText {...props}/>
}

const CreateText = styled.p`
    max-width: ${(props) => props.width || '0px'};
    width: 100%;
    color: #091e42;
    font-size: ${(props) => props.size || '14px'};
    letter-spacing: ${(props) => props.spacing || '1.5px'};
    line-height: 30px;
`

export default Text;