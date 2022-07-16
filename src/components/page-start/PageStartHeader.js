import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../aseets/image/logo.svg'
import { HiChevronDown } from 'react-icons/hi'
import Flex from '../UI/position/Flex'

const PageStartHeader = () => {
	return (
		<MainHeader>
			<Flex align="center">
				<Logo src={logo} alt='logo' />
				<Links to='/'>Функции</Links>
				<Icons />
				<Links to='/'>Решения</Links>
				<Icons />
				<Links to='/'>Планы</Links>
				<Icons />
				<Links to='/'>Цены</Links>
				<Links to=''>Ресурсы</Links>
				<Icons />
			</Flex>
			<Flex height="100%" align="center">
				<Sign to='/'>Войти</Sign>
				<GetTrello>Получить Trello бесплатно</GetTrello>
			</Flex>
		</MainHeader>
	)
}

const MainHeader = styled.header`
	position: fixed;
	width: 100%;
	height: 3.8rem;
	background: #fff5ff;
	padding: 0 20px;
	display: flex;
	align-items: center;
    justify-content: space-between;
	:hover {
		box-shadow: 2px 4px 3px skyblue;
	}
`

const Logo = styled.img`
	width: 110px;
	height: 30px;
`

const Links = styled(Link)`
	color: #172b4a;
	text-decoration: none;
	font-size: 17px;
	margin: 0 1px 0 30px;
	font-weight: 100;
	padding-top: 5px;
`

const Icons = styled(HiChevronDown)`
	margin-left: 2px;
`

const Sign = styled(Link)`
	text-decoration: none;
	color: #172b4a;
	font-size: 21.2px;
	font-weight: 500;
	margin-right: 20px;
`

const GetTrello = styled.button`
	font-size: 19.2px;
	color: #fff;
	background: #0065ff;
	height: 100%;
	border: none;
	max-width: 290px;
	width: 100%;
	margin-right: 20px;
`

export default PageStartHeader
