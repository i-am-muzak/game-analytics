export type Series = {
  name: string;
  data: number[];
};

export interface Line {
  title: string;
  unitTitle: string;
  categories: string[];
  series: Series[];
}
