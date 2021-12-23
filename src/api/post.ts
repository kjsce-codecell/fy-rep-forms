export const POST = async (object?: any) => {

  var branch = object.branch;
  var email = object.email;
  var name = object.name;
  var phone = object.phone;
  var resume = object.resume;
  var cover = object.cover;
  var github = object.github;
  var linkedin = object.linkedin;
  var codechef = object.codechef;
  var q1 = object.q1;
  var positions = " ";
  object.positions.forEach((element: String) => {
    positions += element + ", ";
  });
  const url = `https://docs.google.com/forms/d/e/1FAIpQLSfc4fpHWG_LD4CUkWbUgEuIF0tobNGnK2TISAJ_bczSBMreqA/formResponse?usp=pp_url&entry.1060656156=${name}&entry.1698873613=${email}&entry.1143253914=${phone}&entry.1156550514=FY&entry.1553288753=${branch}&entry.1416789219=${positions}&entry.1089965806=${resume}&entry.809758529=${cover}&entry.887347889=${codechef}&entry.903534579=${github}&entry.1423818616=${linkedin}&entry.2064142506=${q1}&sumbit=Submit`;

  return fetch("https://cors-fix.nishit.workers.dev/?" + url, {
    method: "POST",
  }).then((res) => {
    console.log(res);
    if (res.status == 200) {
      return "Yayay";
    } else {
      console.log ("res.status: ", res.status);
      return "failed!";
    }
  });
};
