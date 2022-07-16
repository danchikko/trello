import styled from 'styled-components'

const Title = (props) => {
	return <CreateTitle {...props} />
}

const CreateTitle = styled.h2`
	font-size: ${(props) => props.size || '14px'};
	color: ${(props) => props.color || '#091E42'};
	max-width: ${(props) => props.width || '0px'};
	width: 100%;
	margin: ${(props) => props.margin || '0px'};
    font-weight: ${(props) => props.weight || '400'};
	font-family: 'Albert Sans', sans-serif;
	font-family: 'Kanit', sans-serif;
	font-family: 'M PLUS 1 Code', sans-serif;
	font-family: 'Oxygen', sans-serif;
	font-family: 'PT Sans Narrow', sans-serif;
`

export default Title
