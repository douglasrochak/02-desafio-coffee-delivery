import { ReactNode } from "react";
import { Icon, Text, TextAndIconContainer } from "./style";

interface TextAndIconProps {
  icon: ReactNode;
  text: string | ReactNode;
  subText: string | ReactNode;
}
export function TextAndIcon({ icon, text, subText }: TextAndIconProps) {
  return (
    <TextAndIconContainer>
      <Icon>{icon}</Icon>
      <Text>
        <span>{text}</span>
        <span>{subText}</span>
      </Text>
    </TextAndIconContainer>
  );
}
