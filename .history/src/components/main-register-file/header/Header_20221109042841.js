import styled from 'styled-components'
import MainLogo from '../../UI/trello-logo/MainLogo'
import { FiChevronDown } from 'react-icons/fi'

const Header = () => {
	return (
		<MainHeader>
			<HeaderContent>
				<MainLogo />
				<Features>
					<Content>Features</Content>
					<Down />
				</Features>
			</HeaderContent>
		</MainHeader>
	)
}

const MainHeader = styled.header`
	width: 100%;
	display: flex;
	justify-content: center;
`

const HeaderContent = styled.div`
    max-width: 1270px;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Features = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2px;
    cursor: pointer;
    :hover{
        color: skyblue;
        .p{
            color: skyblue;
        }
    }
`

const Content = styled.p`
    font-size: 19px;
`

const Down = styled(FiChevronDown)`
	width: 12px;
`

export default Header
