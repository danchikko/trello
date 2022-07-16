import styled from "styled-components"
import logo from "../../aseets/image/logo.svg"
const LoginHeader = () => {
    return (
        <Container>
            <Logo src={logo} alt="logo" />
        </Container>
    )
}

const Container = styled.header`
    width: 100%;
    text-align: center;
`

const Logo = styled.img`
    width: 195px;
    margin-top: 40px;
    margin-bottom: 40px;
`

export default LoginHeader