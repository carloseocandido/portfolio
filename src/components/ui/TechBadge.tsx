import { Chip } from "./Chip";

type TechBadgeProps = {
  label: string;
};

export function TechBadge({ label }: TechBadgeProps) {
  return <Chip>{label}</Chip>;
}
