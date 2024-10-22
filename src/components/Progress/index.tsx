import styled from "styled-components";
import { theme } from "../colors/colorts";
import LineComplete from "./assets/line-complete.svg";
import LineError from "./assets/line-error.svg";
import CircleComplete from "./assets/circle-complete.svg";
import CircleError from "./assets/circle-error.svg";

type ProgressType = "smallLine" | "line" | "smallCircle" | "circle";
type StyleType = "default" | "complete" | "error" | "percent";

interface ProgressBarProps {
  percents: number;
  type?: ProgressType;
  style?: StyleType;
}

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  p {
    font-family: "Intro Black", sans-serif;
    color: ${theme.corporate.purple};
    font-weight: 700;
    font-size: 14px;
  }
`;

const height = {
  'smallLine': "4px",
  'line': "8px",
};

const bgColor = {
  'default': theme.corporate.purple,
  'percent': theme.corporate.purple,
  'complete': theme.informing.approval,
  'error': theme.informing.error,
};

const StyledProgress = styled.progress<{
  $type: 'smallLine' | 'line';
  $style: StyleType;
}>`
  border-radius: 15px;
  background-color: ${theme.grayscale.spacerLight};
  height: ${props => height[props.$type]};
  width: 100%;

  &::-webkit-progress-bar {
    background-color: ${theme.grayscale.spacerLight};
    border-radius: 15px;
  }

  &::-webkit-progress-value {
    background-color: ${(props) => bgColor[props.$style]};
    border-radius: 15px;
    transition: width 0.5s;
  }
`;
///////////

const circleSize = {
  small: "  width: 84px; height: 84px;",
  large: "  width: 140px; height: 140px;",
};

const CircularProgress = styled.div<{ $size: "small" | "large" }>`
  position: relative;
  ${(props) => circleSize[props.$size]}
  circle {
    fill: none;
    stroke-width: 5;
    stroke-linecap: round;
  }
  svg {
    transform: rotate(-90deg);
  }
`;

const CircleBg = styled.circle`
  stroke: #e0dce6;
`;

const dasharray = {
  small: "210",
  large: "440",
};


const Progress = styled.circle<{
  $percentage: number;
  $size: "small" | "large";
  $style: StyleType;
}>`
  stroke: ${props => bgColor[props.$style]};
  transition: stroke-dashoffset 0.5s ease;
  stroke-dasharray: ${(props) => dasharray[props.$size]};
  stroke-dashoffset: ${(props) => getPercents(props.$percentage, props.$size)};
`;

const fontSize = {
    'small' : 'font-size: 16px;',
    'large' : 'font-size: 25px;'
}

const PercentText = styled.div <{$size: "small" | "large";}>`
  font-family: "Intro Black", sans-serif;
  font-weight: 700;
  color: ${theme.corporate.purple};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  ${props => fontSize[props.$size]}s
`;


const imgSize = {
    'small': 'width: 20px; height: 20px;' ,
    'large': 'width: 40px; height: 40px;'
}

const CircleImg = styled.img<{$size: "small" | "large";}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    ${props => imgSize[props.$size]}
`;

function getPercents(percentage: number, size: "small" | "large") {
  const circunference = {
    small: 33.5,
    large: 70,
  };

  const circumferenceSmall = 2 * Math.PI * circunference[size];
  const offsetSmall =
    circumferenceSmall - (percentage / 100) * circumferenceSmall;
  return offsetSmall;
}

export default function ProgressBar({
  percents,
  type = 'line',
  style = 'default',
}: ProgressBarProps) {
  if (type == "line" || type == "smallLine") {
    return (
      <StyledDiv>
        <StyledProgress
          value={percents}
          max="100"
          $type={type}
          $style={style}
        ></StyledProgress>
        {style == "percent" && <p>{percents}%</p>}
        {style == "complete" && <img src={LineComplete} />}
        {style == "error" && <img src={LineError} />}
      </StyledDiv>
    );
  }

  if (type == "smallCircle") {
    return (
      <CircularProgress $size="small">
        <svg width="84" height="84" viewBox="0 0 84 84">
          <CircleBg cx="42" cy="42" r="33.5" />
          <Progress
            $percentage={percents}
            $size="small"
            $style={style}
            cx="42"
            cy="42"
            r="33.5"
          />
        </svg>
        {style == "percent" && <PercentText $size="small">{percents}%</PercentText>}
        {style == "complete" && <CircleImg $size="small" src={CircleComplete}/>}
        {style == "error" && <CircleImg $size="small" src={CircleError}/>}
      </CircularProgress>
    );
  }
  if (type == "circle") {
    return (
      <CircularProgress $size="large">
        <svg width="140" height="140" viewBox="0 0 160 160">
          <CircleBg cx="80" cy="80" r="70" />
          <Progress
            $percentage={percents}
            $size="large"
            $style={style}
            cx="80"
            cy="80"
            r="70"
          />
        </svg>
        {style == "percent" && <PercentText $size="large">{percents}%</PercentText>}
        {style == "complete" && <CircleImg $size="large" src={CircleComplete}/>}
        {style == "error" && <CircleImg $size="large" src={CircleError}/>}
      </CircularProgress>
    );
  }
}
