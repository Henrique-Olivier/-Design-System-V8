import styled from "styled-components"
import { theme } from "../colors/colorts"
import LineComplete from './assets/line-complete.svg'
import LineError from './assets/line-error.svg'

type ProgressType = 'smallLine' | 'line' | 'smallCircle' | 'circle'
type StyleType = 'default' | 'complete' | 'error' | 'percent'

interface ProgressBarProps {
    percents: number,
    type: ProgressType
    style: StyleType
}

const StyledDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 8px;  

  p {
  font-family: 'Intro Black', sans-serif;
  color: ${theme.corporate.purple};
  font-weight: 700; 
  font-size: 14px;
  }
`

const height = {
    'smallLine': '4px',
    'line': '8px'
}

const bgColor = {
    'default': theme.corporate.purple,
    'percent': theme.corporate.purple,
    'complete': theme.informing.approval,
    'error': theme.informing.error
}

const StyledProgress = styled.progress<{ $type: ProgressType, $style: StyleType }>`
    border-radius: 15px; 
    background-color: ${theme.grayscale.spacerLight};
    height: ${props => height[props.$type]};
    width: 100%; 

    &::-webkit-progress-bar {
            background-color: ${theme.grayscale.spacerLight};
            border-radius: 15px;
        }

     &::-webkit-progress-value {
            background-color: ${props => bgColor[props.$style]};
            border-radius: 15px;
            transition: width 0.5s;
        }
`

const CircularProgress = styled.div`
            position: relative;
            width: 120px;
            height: 120px;

            circle {
            fill: none;
            stroke-width: 8;
            stroke-linecap: round;
            }
            
            img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50px; 
            height: 50px;
    }
`

const StyledSvg = styled.svg`
    transform: rotate(-90deg); 
`

const BgCircle = styled.circle`
    stroke: #e6e6e6; 
`

function getPercent(percent: number): string {
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (percent / 100) * circumference;

    return offset.toString();
}

const ProgressCircle = styled.circle<{ $percents: number }>`
            stroke: #a74cff; 
            stroke-dasharray: 282; 
            stroke-dashoffset: ${props => getPercent(props.$percents)};
            transition: stroke-dashoffset 1s;
`

export default function ProgressBar({ percents, type, style }: ProgressBarProps) {
    return (
        <StyledDiv>

            <StyledProgress value={percents} max='100' $type={type} $style={style}></StyledProgress>
            {style == 'percent' && <p>{percents}%</p>}
            {style == 'complete' && <img src={LineComplete} />}
            {style == 'error' && <img src={LineError} />}

            <CircularProgress>
                <StyledSvg width="120" height="120" viewBox="0 0 120 120">
                    <BgCircle cx="60" cy="60" r="45" />
                    <ProgressCircle $percents={percents} cx="60" cy="60" r="45" />
                </StyledSvg>
            </CircularProgress>
        </StyledDiv>
    )
}