import styled from 'styled-components'

const Content = (props) => {
	return <Text {...props}>{props.co}</Text>
}

const Text = styled.p`
	font-size: ${(size) => '14px' || size};
	color: ${(color) => '#000' || color};
`

export default Content
