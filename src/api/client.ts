import axios from "axios";
import {Config} from "../types/AxiosConfig";

const client = (config? : Config) => {
   return axios.create({
      headers: {
         'Authorization' : `Bearer ${process.env["NOTION_PRIVATE_KEY"]}` ,
         'Content-Type' : 'application/json' ,
         'Notion-Version' : '2022-06-28'
      },
      baseURL: 'https://api.notion.com'
   });
}

export default client;
