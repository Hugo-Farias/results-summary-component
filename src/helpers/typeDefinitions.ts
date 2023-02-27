export interface jsonShape {
  category: string;
  score: number;
  icon: string;
  color: string;
}

export interface jsonProps {
  data: Array<jsonShape>;
}
