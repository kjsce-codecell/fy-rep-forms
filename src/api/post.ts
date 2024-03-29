import { addDoc, collection } from "firebase/firestore";
import { database } from "../config/firebase";

export const POST = async (motivation: string, object?: any) => {
  var branch = object.branch;
  var email = object.email;
  var name = object.name;
  var phone = object.phone;
  var resume = object.resume;
  var cover = object.cover;
  var github = object.github;
  var linkedin = object.linkedin;
  var codechef = object.codechef;
  var q1 = motivation;
  var year = object.year;
  var positions = " ";
  object.positions.forEach((element: String) => {
    positions += element + ", ";
  });

  const url = `https://docs.google.com/forms/d/e/1FAIpQLSfc4fpHWG_LD4CUkWbUgEuIF0tobNGnK2TISAJ_bczSBMreqA/formResponse?usp=pp_url&entry.1060656156=${name}&entry.1698873613=${email}&entry.1143253914=${phone}&entry.1156550514=${year}&entry.1553288753=${branch}&entry.1416789219=${positions}&entry.1089965806=${resume}&entry.809758529=${cover}&entry.887347889=${codechef}&entry.903534579=${github}&entry.1423818616=${linkedin}&entry.2064142506=${q1}&sumbit=Submit`;

  let allData = {
    email,
    name,
    phone,
    year,
    branch,
    positions: object.positions,
    resume,
    cover,
    codechef,
    github,
    linkedin,
    q1: q1,
    q2: "",
    q3: "",
    url,
  };

  await addDoc(collection(database, "responses-june-2022"), allData);

  await fetch("https://cors-fix.nishit.workers.dev/?" + url, {
    method: "POST",
  }).then((res) => {
    if (res.status == 200) {
      console.log("Submitted to sheet ✅");
      return fetch(
        "https://cors-fix.nishit.workers.dev/?https://us-central1-kjsce-codecell-registrations.cloudfunctions.net/sendEmail",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            data: allData,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          cache: "no-cache",
        }
      )
        .then((res2) => {
          if (res2.status === 409) {
            return "email-exists";
          } else if (res2.status === 200) {
            return "Yayay";
          } else {
            return "failed!";
          }
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    } else {
      // console.log("res.status: ", res.status);
      return "failed!";
    }
  });

  return "Yayay";
};
