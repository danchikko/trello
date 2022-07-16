import styled from 'styled-components'
import Flex from '../UI/position/Flex'
import Text from '../UI/typography/Text'
import Title from '../UI/typography/Title'
import backroundImg from '../../aseets/image/hero.webp'

const PageStart = () => {
	return (
		<Container>
			<Flex direction='column'>
				<Title size='48px' width='580px' margin='0 0 10px 0'>
					<Span>Trello</Span> помогает командам достигать успеха.
				</Title>
				<Text width='610px' size='20.5px' spacing='0.5px'>
					Объединяйте усилия, управляйте проектами и выводите
					продуктивность на новые высоты. Откуда бы вы ни работали -
					из офиса в небоскребе или из дома - ваш совместный труд
					неповторим. Добейтесь всех своих целей с Trello.
				</Text>
				<Email type='email' placeholder='Эл. почта' />
				<Submit>Зарегистрируйтесь - это бесплатно!</Submit>
			</Flex>
			<Img src={backroundImg} alt='logo' />
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	height: 700px;
	background: #fff;
	padding-top: 150px;
	display: flex;
	justify-content: space-evenly;
`

const Img = styled.img`
	width: 350px;
	height: 450px;
`

const Span = styled.span`
	font-weight: 700;
`

const Email = styled.input`
	width: 370px;
	height: 43px;
	padding-left: 12px;
	font-size: 16px;
	border-radius: 5px;
	border: 0.2px solid gray;
`

const Submit = styled.button`
	width: 320px;
	height: 46px;
	background-color: #0065ff;
	border: none;
	border-radius: 5px;
	font-size: 16px;
	margin-top: 20px;
	color: #FFFF;
	font-weight: 100;
	:hover {
		background-color: blue;
	}
`

export default PageStart
