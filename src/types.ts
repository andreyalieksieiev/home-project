export interface ButtonProps {
  children: String
  onClick: () => void
};

export interface InputProps {
  name: string
  onChange: (e: any) => void
  type: string
  value: string
  placeholder?: string
};

export interface CountryProps {
  id: string
  name: string
  flag: string
};

export interface CountryPropsEvent {
  target: { 
    name: string; 
    value: string;
  }
}

export interface CatsProps {
  id: string | number | undefined 
  name: React.ReactNode
} 

export interface DelayCountryProps extends CountryProps {}
export interface DelayCountryPropsEvent extends CountryPropsEvent {}
export interface ProfileEvent extends CountryPropsEvent {}

