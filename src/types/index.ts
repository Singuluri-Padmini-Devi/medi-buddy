export interface HealthPackage {
  id: string;
  title: string;
  testsCount: number;
  reportTime: string;
  includes: string[];
  fasting?: {
    required: boolean;
    hours?: string;
  };
  price: number;
  available: {
    home: boolean;
    lab: boolean;
  };
  sponsored?: boolean;
}

export interface ActiveBooking {
  id: string;
  patientName: string;
  status: 'confirmed' | 'pending' | 'completed';
  date: string;
  time: string;
  type: string;
  testCount: number;
}

export interface LabTest {
  id: string;
  name: string;
  price: {
    original: number;
    discounted: number;
  };
  discount: number;
  reportTime: string;
  available: {
    home: boolean;
    lab: boolean;
  };
  cashless: boolean;
}

export interface PageConfig {
  id: number;
  title?: string;
  subCategories?: string[];
  props?: any;
  categories?: string[];
}