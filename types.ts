
export interface ParentInfo {
  parentName: string;
  parentEmail: string;
  childName: string;
  childAge: number;
}

export enum BookingStep {
  FORM = 'FORM',
  CALENDAR = 'CALENDAR',
  OUT_OF_RANGE = 'OUT_OF_RANGE'
}
