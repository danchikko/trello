import styled from "styled-components";

const Content = (props) => {
    return (
        <Text {...props} />
    )
}

const Text = styled.p`
    font-size: ${(size) => '14px' || size};
    color: ${()};
`

export default Content;