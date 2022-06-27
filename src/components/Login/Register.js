import styled from 'styled-components'

const Register = () => {
	return (
		<Container>
			<MainTitle>Вход в Trello</MainTitle>
			<form>
				<Input placeholder='Укажите адрес электронной почты' />
                <Input placeholder='Введите пароль' />
				<Button>Войти</Button>
			</form>
		</Container>
	)
}

const Container = styled.div`
	margin: 0 auto;
	width: 400px;
	height: 760px;
	border-radius: 3px;
	box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
	padding: 25px 40px;
	background-color: #ffffff;
`

const MainTitle = styled.h1`
	text-align: center;
	color: #5e6c84;
	font-size: 16px;
	letter-spacing: -0.01rem;
	line-height: 28px;
	margin-top: 10px;
	margin-bottom: 15px;
`

const Input = styled.input`
	font-size: 14px;
	background-color: #fafbfc;
	border: 2px solid #dfe1e6;
	border-radius: 3px;
	height: 44px;
	-webkit-transition: background-color 0.2s ease-in-out 0s,
		border-color 0.2s ease-in-out 0s;
	transition: background-color 0.2s ease-in-out 0s,
		border-color 0.2s ease-in-out 0s;
    width: 95%;
	margin: 10px 0;
	padding-left: 15px;
	outline: none;
	color: gray;
	&:focus {
		border: 2px solid blue;
	}
`

const Button = styled.button`
	width: 100%;
	height: 38px;
	background: #5AAC44;
	color: white;
	border: none;
	font-size: 13.5px;
	font-weight: 700;
	border-radius: 4px;
	margin: 10px 0;
`

export default Register
