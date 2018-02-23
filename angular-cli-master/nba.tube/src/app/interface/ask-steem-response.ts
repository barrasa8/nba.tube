import { Result } from './result'
import { Page} from './page'

export interface AskSteemResponse {
  error:boolean;
  hits:number;
  time:number;
  pages:Page;
  results:Result[];
}
