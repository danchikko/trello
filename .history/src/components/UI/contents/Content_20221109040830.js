import styled from "styled-components";

const Content = (props) => {
    return (
        <Text {...props} />
    )
}

const Text = styled.p`
    font-size: $;
`

export default Content;