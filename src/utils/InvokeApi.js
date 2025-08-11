import React from 'react'
import axios from 'axios'
import { baseUrl } from '../config/config';

// axios.defaults.headers.post["Content-Type"]= "application/json";

export async function invokeApi({
    path,
    method="GET",
    headers={
    }
}) {
    const reqObj = {
    method,
    url: baseUrl + path,
    headers,
  };
  let results;

  try {
    results = await axios(reqObj);

    return results.data;
  } 
  catch (error) {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      return { message: "No response received from server." };
    } else {
      return { message: "An unknown error occurred." };
    }
  }
    


}

 

 