import styled from 'styled-components'

const StyledGame = styled.div`
    width: 94vw;
    height: 800px;
    background: #FFF;
    border: 4px solid #b5e1ff;
    border-radius: 12px;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 32px;

        img {
            width: 400px;
            height: 400px;
        }
        .wrapper-letter {
            h4 {
                font-size: 16px;
                text-align: center;
                margin-bottom: 12px;
                font-weight: bold;
                text-transform: uppercase;
                text-decoration: underline; 
            }
            span {
                margin: 16px;
                font-weight: bold;
                font-size: 20px;
            }
        }

        .hidden-word{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 72px;
            p {
                font-weight: bold;
                font-size: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 72px;
                height: 72px;
                margin: 0 12px;
                border-bottom: 6px solid #000;
                text-transform: uppercase;
            }
        }

`

export default StyledGame