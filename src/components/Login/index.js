import styled from 'styled-components'
import Footer from './Footer'
import LoginHeader from './Header'
import Register from './Register'

const Login = () => {
	return (
		<Container>
			<LoginHeader />
			<Register />
			<Footer />
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	background-color: #f9fafc;
	font-family: '-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`



export default Login
