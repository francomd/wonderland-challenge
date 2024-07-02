import { SLabel } from '@/components/Label/styles';

export default function Label({ ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <SLabel>{props.children}</SLabel>;
}
