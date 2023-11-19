export interface ConversionModel {
  conversionType: string;
  fromUnit: string;
  toUnit: string;
  fromValue: number | null;
  toValue: number | null;
}
