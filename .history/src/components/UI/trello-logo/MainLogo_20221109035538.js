import styled from 'styled-components'

const MainLogo = () => {
	return (
		<Logo>
			<ImgTrello>
                <FirstBlock />
                <SecondBlock />
            </ImgTrello>
			<TrelloContent>Trello</TrelloContent>
		</Logo>
	)
}

const Logo = styled.div`
	width: 109px;
	height: 22px;
    display: flex;
`

const ImgTrello = styled.div`
	width: 21px;
	height: 100%;
    display: flex;
    background-color: blue;
    justify-content: space-between;
`

const FirstBlock = styled.div`
    width: 5px;
    height: 16px;
    background-color: white;
`

const SecondBlock = styled.div`
    width: 5px;
    height: 7px;
    background-color: white;
`

const TrelloContent = styled.h3`
	color: rgb(9, 30, 66);
	font-size: 30px;
	font-weight: bold;
`

export default MainLogo
