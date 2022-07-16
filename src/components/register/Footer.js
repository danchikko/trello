import styled from 'styled-components'
import left from '../../aseets/image/left.svg'
import right from '../../aseets/image/right.svg'

const Footer = () => {
	return (
		<ImgDiv>
			<LeftImg src={left} alt='left' />
			<option>
				<section>Русский</section>
				<section>English</section>
			</option>
			<RightImg src={right} alt='right' />
		</ImgDiv>
	)
}

const ImgDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`
const LeftImg = styled.img`
	max-width: 400px;
	width: 100%;
	position: fixed;
	left: 0;
	bottom: 0;
	/* z-index: auto; */
`

const RightImg = styled.img`
	max-width: 400px;
	width: 100%;
	position: fixed;
	right: 0;
	bottom: 0;
	/* z-index: auto; */
`

export default Footer
