import { ajax } from "./ajax.js";
import api from './urls.js';

export const GetDetailsLink = (idLink, callback) => {
    ajax({
        url: `${api.getLinkById}${idLink}`,
        callback: (data) => {
            callback(data); 
        }
    });
};
