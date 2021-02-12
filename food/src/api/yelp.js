import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer LgbuhAwYr54Q2Krt5Sokl4bdqQpnEXPXyVhTky2PFYlDvG16K7akTNAvtVBcTTCGG4a20h1xGgniHijq-28IsBGTcNKYdoiUrOtKmfsEml0x47rkyu0_yeWzf-MNYHYx',
  },
});
