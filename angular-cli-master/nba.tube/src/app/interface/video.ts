import { Info} from './info'
import { Content} from './content'

export interface Video {
  info:Info[];
  content:Content[];
  _id:string;
}
