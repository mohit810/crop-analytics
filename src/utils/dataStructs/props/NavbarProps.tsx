export interface NavbarProps {
  states: {
    displayAvgTable: boolean;
    displayMaxMinTable: boolean;
  };
  setFlags: (tableNumber: number) => void;
}
