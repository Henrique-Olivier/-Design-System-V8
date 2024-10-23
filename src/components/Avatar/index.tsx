import styled from "styled-components";
import ProfileIcon from "./assets/profile.svg";
import { theme } from "../colors/colorts";

type AvatarTypes = "default" | "picture" | "initials";
type AvatarColorTypes =
  | "default"
  | "purpleGradient"
  | "lightPurpleGradient"
  | "greenGradient"
  | "pinkGradient"
  | "orangeGradient";

interface AvatarProps {
  type: AvatarTypes;
  color?: AvatarColorTypes;
  img?: string;
  initial?: string;
  fontSize?: string;
}

const bgColorMap = {
  default: `background-color:${theme.corporate.purple};`,
  purpleGradient: `background:${theme.corporate.gradient};`,
  lightPurpleGradient:
    "background: linear-gradient(180deg, #C55FF5 0%, #985FF5 100%);",
  greenGradient:
    "background: linear-gradient(159.13deg, #00E55C -24.13%, #0063AF 132.21%);",
  pinkGradient:
    "background: linear-gradient(159.13deg, #FF00C7 -24.13%, #1C649B 132.21%);",
  orangeGradient:
    "background: linear-gradient(159.13deg, #E0E500 -24.13%, #DC04C6 132.21%);",
};

const imgSizeMap = {
  default: "width: 55%; height: 55%;",
  picture: "width: 100%; height: 100%;",
  initials: "width: 55%; height: 55%;",
};

const AvatarDiv = styled.div<{
  $color: AvatarColorTypes;
  $type: AvatarTypes;
  $font: string;
}>`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.$type != "picture"
      ? bgColorMap[props.$color]
      : "background-color: transparent;"}

  img {
    ${(props) => imgSizeMap[props.$type]}
  }

  p {
    font-family: "intro book", sans-serif;
    font-size: ${(props) => props.$font};
    font-weight: 400;
    line-height: 46.08px;
    text-align: center;
    color: ${theme.grayscale.white};
  }
`;

export default function Avatar({
  type = "default",
  color = "default",
  img,
  initial,
  fontSize = "16px",
}: AvatarProps) {
  return (
    <AvatarDiv $color={color} $type={type} $font={fontSize}>
      {type == "default" && <img src={ProfileIcon} />}
      {type == "picture" && <img src={img} />}
      {type == "initials" && <p>{initial}</p>}
    </AvatarDiv>
  );
}
