import styled from 'styled-components'
import MainLogo from '../../UI/trello-logo/MainLogo'
import { FiChevronDown } from 'react-icons/fi'

const Header = () => {
	return (
		<MainHeader>
			<HeaderContent>
				<MainLogo />
				<MainContents>
					<Content>Features</Content>
					<Down />
				</MainContents>
                <MainContents>
                    <Content>Solu</Content>
                </MainContents>
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

const MainContents = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2px;
    cursor: pointer;
    :hover{
        color: blue;
    }
`

const Content = styled.p`
    font-size: 19px;
    font-family: 'Times New Roman', Times, serif;
`

const Down = styled(FiChevronDown)`
	width: 12px;
`

export default Header
