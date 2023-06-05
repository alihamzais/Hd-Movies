import axios from "axios";
import { types, flow, onSnapshot } from "mobx-state-tree";

const DataAdd = types.model({
  adult: types.boolean,
  backdrop_path: types.string,
  id: types.number,
  original_language: types.string,
  original_title: types.string,
  overview: types.string,
  popularity: types.number,
  poster_path: types.string,
  release_date: types.string,
  title: types.string,
  video: types.boolean,
  vote_average: types.number,
  vote_count: types.number,
});

const User = types
  .model({
    arr: types.array(DataAdd),
    data: types.optional(types.array(types.frozen()), []),
    loader: types.boolean,
  })
  .actions((self) => ({
    getApi: flow(function* (value) {
      const data = yield axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=929a0c2a67ee6e59d85d7ca665a00226&primary_release_year=2023&language=us-US&page=${value}`
      );
      self.loader = true;
      self.arr = data.data.results;
      self.loader = false;
    }),
    newapicall: flow(function* () {
      const data = yield axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=929a0c2a67ee6e59d85d7ca665a00226&primary_release_year=2023&language=us-US`
      );
      self.data = data.data.results
    }),
  }));

export const apiData = User.create({
  arr: [],
  loader: true,
});

onSnapshot(apiData, (snapshot) => {
  console.log(snapshot);
});

// I want to management the website to add an 2nd plain in it
// Use a clean and professional design that aligns with your brand.

// api call without types define
// import { types, flow } from 'mobx-state-tree';
// import axios from 'axios';

// const ApiStore = types
//   .model('ApiStore', {
//     data: types.optional(types.array(types.frozen()), []),
//   })
//   .actions((self) => ({
//     fetchData: flow(function* () {
//       try {
//         const response = yield axios.get('https://api.example.com/data'); // Replace with your API endpoint
//         self.data = response.data;
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }),
//   }));

// export default ApiStore;
