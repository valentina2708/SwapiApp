import { Text as PaperText } from "react-native-paper";

type Props = {
  children: React.ReactNode;
  variant?: "headlineLarge" | "titleMedium" | "bodyMedium";
};

export default function Text({ children, variant = "bodyMedium" }: Props) {
  return <PaperText variant={variant}>{children}</PaperText>;
}
