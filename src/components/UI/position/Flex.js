import styled from 'styled-components'

const Flex = (props) => {
	return <StyledFlex {...props} />
}

const StyledFlex = styled.div`
	display: flex;
	justify-content: ${(props) => props.justify || 'stretch'};
	flex-direction: ${(props) => props.direction || 'row'};
	align-items: ${(props) => props.align || 'stretch'};
    height: ${(props) => props.height || ''};
	margin: ${({margin}) => margin || '0'};
	gap: ${(props) => props.gap || '0px'};;
`

export default Flex
