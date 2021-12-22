const url = "https://cors-fix.nishit.workers.dev/?" + "" + "&submit=Submit";

export const POST = async (object?: Object) => {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  return fetch(" https://cors-fix.nishit.workers.dev/?" + url, {
    method: "post",
  }).then((res) => {
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
