import styled from "styled-components";

const MainLogo = () => {
    return (
        <Logo>
            <ImgTrello>
            </ImgTrello>
            <TrelloContent>
                Trello
            </TrelloContent>
        </Logo>
    )
}

const Logo = styled.div`
    width: 109px;
    height: 42px;
`

const ImgTrello = styled.div`
    width: 21px;
    height: 100%;
`

const TrelloContent = styled.h3`
    color: rgb(9, 30, 66);
    font-size: 30px;
    font-weight: 900;
`

export default MainLogo;