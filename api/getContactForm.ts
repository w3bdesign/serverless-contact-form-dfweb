/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

// https://nodemailer.com/about/
// https://www.youtube.com/watch?v=nF9g1825mwk&app=desktop
// https://www.youtube.com/watch?v=vrbyaOoZ-4Q&feature=youtu.be

import { NowRequest, NowResponse } from '@vercel/node';

export default function processContactForm(req: NowRequest, res: NowResponse) {
  res.send(req.body);

  // console.log(req.body);
  // const { regNummer = '' } = req.query;
  // const urlToFetch = `https://www.vegvesen.no/ws/no/vegvesen/kjoretoy/kjoretoyoppslag/v1/kjennemerkeoppslag/kjoretoy/${regNummer}`;
  /* if (regNummer !== undefined) {
    fetch(urlToFetch)
      .then((response) => response.json())
      .then((data) => {
        res.send(data);
      });
  } */
}
