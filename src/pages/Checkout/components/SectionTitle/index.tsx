import { ReactNode } from "react";
import { Icon, SectionTitleContainer } from "./style";

interface SectionTitleProps {
  icon: ReactNode;
  color: "yellow" | "purple";
  title: string;
  subtitle: string;
}

export function SectionTitle({
  icon,
  color,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      <Icon color={color}>{icon}</Icon>
      <span>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </span>
    </SectionTitleContainer>
  );
}
