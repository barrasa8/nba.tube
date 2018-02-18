import { Meta } from './meta'

export interface Result {
  summary: string;
  permlink:string;
  author:string;
  type:string;
  title:string;
  created:string;
  children:string;
  tags:string[];
  meta:Meta[]
  net_votes:string;
}
