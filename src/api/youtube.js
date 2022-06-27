import React from "react";
import axios from 'axios';

const KEY = 'AIzaSyC5c7RrnnLwIFj1BO18WD_fvmLMkwT5Id8';

export default axios.create({

    baseURL:  'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }

});