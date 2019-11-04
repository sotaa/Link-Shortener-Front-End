import { AnalyticsData } from "./analytics-data.interface";
export interface ILink {
  createDateFa: any;
  password: string;
  private: boolean;
  _id: string;
  userId?: string;
  categories?: string[]; //TODO: has to be in tag system, just now it's fine
  address: string;
  shorten: string;
  createDate: Date;
  data: AnalyticsData[];
  conditions?: ICondition[];
}

export class Link implements ILink {
  password: string;
  private: boolean;
  _id: string;
  userId?: string;
  address: string;
  shorten: string;
  createDate: Date;
  createDateFa: Date;
  categories: string[];
  data: AnalyticsData[];
  conditions: ICondition[];
  constructor() {
    this.categories = [];
  }
}

export enum UserAgent {
  mobile = 10,
  pc = 20
}

export interface ICondition {
  platform: UserAgent;
  address: string;
}
