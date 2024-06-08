import axios from "axios";
import { BlocksRest } from "./blocks";
import { CourseRest } from "./course-rest";
import { MentorRest } from "./mentor-rest";
import { SpecialitiesRest } from "./specialities-rest";

class Api {
  constructor() {
    this.endpoint = Api.createEndpoint();
    this.blocks = new BlocksRest(this.endpoint);
    this.courses = new CourseRest(this.endpoint);
    this.mentors = new MentorRest(this.endpoint);
    this.specialities = new SpecialitiesRest(this.endpoint);
  }

  private static createEndpoint() {
    return axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
      paramsSerializer: {
        indexes: null,
      },
      transformRequest: [(data) => JSON.stringify(data)],
      transformResponse: [(data) => JSON.parse(data ? data : "{}")],
    });
  }

  private readonly endpoint;

  public readonly courses;
  public readonly blocks;
  public readonly mentors;
  public readonly specialities;
}

export const api = new Api();
