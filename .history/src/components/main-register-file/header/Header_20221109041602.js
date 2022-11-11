import styled from 'styled-components'
import MainLogo from '../../UI/trello-logo/MainLogo'
import Content from '../../UI/contents/Content'
import { FiChevronDown } from 'react-icons/fi'

const Header = () => {
	return (
		<MainHeader>
			<MainLogo />
			<Features>
				<Content>Features</Content>
				<FiChevronDown />
			</Features>
		</MainHeader>
	)
}

const MainHeader = styled.header`
	width: 100%;
`

const Features = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
`

const 

export default Header
