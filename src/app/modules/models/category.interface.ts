export interface ICategory {
  _id?: string;
  title: string;
  children?: ICategory[];
}
