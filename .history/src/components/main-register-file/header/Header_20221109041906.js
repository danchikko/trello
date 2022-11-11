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
				<Down />
			</Features>
		</MainHeader>
	)
}

const MainHeader = styled.header`
	width: 100%;
    display: flex;
    justify-content: center;
`

const Header = styled.div`
    
`

const Features = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2px;
`

const Down = styled(FiChevronDown)`
    width: 12px;
`

export default Header
