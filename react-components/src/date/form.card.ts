export type FormCard = {
  image: FileList;
  title: string;
  valid: string;
  description: string;
  ingredient: string;
  cost: string;
  type: string;
  checkbox: boolean;
};

export type CrdForm = Omit<FormCard, 'image' | 'checkbox'> & { image: string; id: number };
