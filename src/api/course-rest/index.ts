import { BasicRest } from "../basic-rest";

import type { AxiosInstance } from "axios";
import { CourseList } from "./types";
// import type { Advisor, AdvisorList, Registered } from './types'

export class CourseRest extends BasicRest {
  public constructor(endpoint: AxiosInstance) {
    super(endpoint);
  }

  public courses() {
    return this.getRequest<CourseList>("/courses/");
  }
}
