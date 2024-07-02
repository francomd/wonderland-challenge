import { SInput } from '@/components/Input/styles';

export default function Input({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <SInput {...props} />;
}
