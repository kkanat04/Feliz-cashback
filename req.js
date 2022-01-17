import axios from "axios";

export const req = async (setData) => {
  let resp = await axios.get(
    "https://my-json-server.typicode.com/typicode/demo/comments"
  );
  setData(resp?.data);
};


export const category = async (setCatalog) => {
  const getCategory = await fetch("http://165.22.49.123/api/v1/list/category", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: 'Token 306ea77543f3071311a84fc0e08389d3b0a7aecd'
    },
  });
  const contentCotegory = await getCategory.json();

  setCatalog(contentCotegory)
}



// Auth


export const sumbitAuth = async (
  username,
  password,
  setAuth,
  navigation,
  storeData
) => {
  const auth = await fetch("http://165.22.49.123/api/user/auth", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const content = await auth.json();

  if (content.token) {
    navigation.navigate('Tab')
    storeData(content.token)
  } else {
    for (let key in content) {
      alert('Ошибка: ' + content[key])
    }
  }

  setAuth(content);

};

export const product = async (setCategoty) => {
  const getProduct = await fetch("http://165.22.49.123/api/v1/list/product", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: 'Token 306ea77543f3071311a84fc0e08389d3b0a7aecd'
    },
  });
  const contentProduct = await getProduct.json();
  setCategoty(contentProduct)
}



let idClient


export const sumbit = async (
  username,
  email,
  phone,
  password,
  password2,
  setRegis,
  navigation,
  storeData
) => {
  const register = await fetch("http://165.22.49.123/api/user/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      username,
      phone,
      password,
      password2,
    }),
  });
  const content = await register.json();
  console.log(content);

  if (content.token) {
    navigation.navigate('Tab')
    storeData(content.token)
    idClient = content.id
    const createClient = await fetch("http://165.22.49.123/api/v1/create/client", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: 'Token c76e3094d59754bc2fbe7ff632abf256a49e93a2'
      },
      body: JSON.stringify({
        user: username,
        cashback_all: 0
      }),
    });
    const client = await createClient.json();

    console.log(client);
    
  } else {
    for (let key in content) {
      alert('Ошибка: ' + content[key])
    }
  }
  
  setRegis(content);
  
};

export const getClient = async () => {
  const client = await fetch("http://165.22.49.123/api/user/auth", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const geClient = await client.json();


}