import api from "./api";

export type EpsodesType = {
  id: number;
  name: string;
  synopsis: string;
  order: number;
  videoUrl: string;
  secondesLong: number;
};

export type CourseType = {
  id: number;
  name: string;
  thumbnailUrl: string;
  synopsis: string;
  episodes?: EpsodesType[];
};

const courseService = {
  getNewestCourses: async () => {
    const res = await api.get("courses/newest").catch((error) => {
      return error.response;
    });

    return res;
  },
};

export default courseService;
