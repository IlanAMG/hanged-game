import styled from 'styled-components'

const StyledHome = styled.main`
    width: 100vw;
    height: 100vh;
    background: #050031;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

        h1 {
            color: #FFF;
            font-size: 36px;
            text-align: center;
            font-weight: bold;
            margin-bottom: 24px;
        }

        form {
            display: flex;
            align-items: center;
        }
        label {
            color: white;
            margin-right: 12px;
        }

        input {
            width: 300px;
            height: 48px;
            border-radius: 12px;
            border: 2px solid #b5e1ff;
            padding-left: 8px;
            &.letter {
                font-size: 38px;
                width: 72px;  
            }
        }
        button {
            height: 48px;
            width: 72px;
            margin-left: 8px;
            border-radius: 12px;
            cursor: pointer;
            background: #ffe600;
        }
`

export default StyledHome