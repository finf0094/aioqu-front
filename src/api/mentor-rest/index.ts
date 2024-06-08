import { BasicRest } from "../basic-rest";

import type { AxiosInstance } from "axios";
import { MentorList } from "./types";
// import type { Advisor, AdvisorList, Registered } from './types'

export class MentorRest extends BasicRest {
  public constructor(endpoint: AxiosInstance) {
    super(endpoint);
  }

  public mentors() {
    return this.getRequest<MentorList>("/mentors/");
  }
}
