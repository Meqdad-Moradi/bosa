export interface IProjectExplorer {
  id: number;
  name: string;
  icon: string;
  children?: [
    {
      childId: number;
      childName: string;
    }
  ];
}
