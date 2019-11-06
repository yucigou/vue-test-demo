import axios from "axios";

export const search = query => {
  return axios.get(
    `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${query}&format=json`
  );
};
