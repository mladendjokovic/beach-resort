import styled from 'styled-components'

const StyledHero = styled.header`
        min-height: 66vh;
        background: url(${props => props.img});
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;`

export default StyledHero