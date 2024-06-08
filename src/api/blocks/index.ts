import { BlockList } from "net";
import { BasicRest } from "../basic-rest";

import type { AxiosInstance } from "axios";
// import type { Advisor, AdvisorList, Registered } from './types'

export class BlocksRest extends BasicRest {
  public constructor(endpoint: AxiosInstance) {
    super(endpoint);
  }

  public block() {
    return this.getRequest<BlockList>("/blocks/");
  }
}
