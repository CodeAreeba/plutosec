import { invokeApi } from "./InvokeApi";

export const fetchBlogs = async () => {
  const reqObj = {
    path: `/blog/list?limit=3&page=1`,
    method: "GET",
    headers: {
    },
  };
  return invokeApi(reqObj);
};

export const showBlog = async (slug) => {
  const reqObj = {
    path: `/blog/view/${slug}`,
    method: "GET",
    headers: {
    },
  };
  return invokeApi(reqObj);
};

export const showService = async () => {
  const reqObj = {
    path: `/servicecategory/all`,
    method: "GET",
    headers: {
    },
  };
  return invokeApi(reqObj);
};

export const showServiceDetails = async (slug) => {
  const reqObj = {
    path: `/service/view/${slug}`,
    method: "GET",
    headers: {
    },
  };
  return invokeApi(reqObj);
};
