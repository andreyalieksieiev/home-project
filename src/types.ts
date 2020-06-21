export type ButtonProps = {
  children: String
  onClick: () => void
};

export type InputProps = {
  name: string
  onChange: () => void
  type: string
  value: string
  placeholder: string
};
