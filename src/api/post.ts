export const POST = async (initUrl: string, object?: Object) => {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const url = initUrl + "&submit=Submit";
  const corsUrl = "https://cors-fix.nishit.workers.dev/?";

  return fetch(corsUrl + url, {
    method: "POST",
  }).then((res) => {
    console.log(res);
    if (res.status == 200) {
      return fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(object),
      })
        .then((response) => response.json())
        .then((json) => {
          return json;
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      return res;
    }
  });
};
