import styled from 'styled-components'
import { IoMdApps } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { RiTrelloFill } from 'react-icons/ri'

const MainPageHeader = () => {
	return (
		<Header>
			<ButtonDots>
				<Dots />
			</ButtonDots>
			<MainLink to='/'>
				<LogoTrello />
				<h1>Trello</h1>
			</MainLink>
		</Header>
	)
}

const Header = styled.header`
	width: 100%;
	height: 50px;
	background-color: #026aa7;
	display: flex;
	padding: 0 5px;
`

const ButtonDots = styled.button`
	width: 35px;
	height: 35px;
	border: none;
	margin-top: 10px;
	background-color: #026aa7;
	& :hover {
		opacity: 0.8;
	}
`

const Dots = styled(IoMdApps)`
	width: 24px;
	height: 24px;
	color: #fff;
`

const MainLink = styled(Link)`
	display: flex;
	color: #fff;
	text-decoration: none;
	& h1 {
        font-size: 22px;
		font-family: 'Kanit', sans-serif;
		font-family: 'M PLUS 1 Code', sans-serif;
		font-family: 'Oxygen', sans-serif;
		font-family: 'PT Sans Narrow', sans-serif;
	}
`

const LogoTrello = styled(RiTrelloFill)`
    width: 23px;
    height: 23px;
    margin: 14.3px 5px 0 5px;
`

export default MainPageHeader
