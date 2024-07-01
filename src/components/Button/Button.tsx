import { SButton } from '@/components/Button/styles';

export default function Button({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <SButton {...props}>{props.children}</SButton>;
}
