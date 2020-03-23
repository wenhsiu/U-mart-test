import axios from 'axios';
// const API_KEY = 'AIzaSyBxezarToV7j0xMAVKYjAcCcya7Q_He-bU'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/'
})