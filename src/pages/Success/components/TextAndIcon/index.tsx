import { ReactNode } from "react";
import { Icon, Text, TextAndIconContainer } from "./style";

interface TextAndIconProps {
  icon: ReactNode;
  color: "purple-500" | "yellow-500" | "yellow-900";
  text: string | ReactNode;
  subText: string | ReactNode;
}
export function TextAndIcon({ icon, color, text, subText }: TextAndIconProps) {
  return (
    <TextAndIconContainer>
      <Icon color={color}>{icon}</Icon>
      <Text>
        <span>{text}</span>
        <span>{subText}</span>
      </Text>
    </TextAndIconContainer>
  );
}
