import axios from "axios";

export const req = async (setData) => {
  let resp = await axios.get(
    "https://my-json-server.typicode.com/typicode/demo/comments"
  );
  setData(resp?.data);
};

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

  if (content.token) {
    navigation.navigate('Tab')
    storeData(content.token)
  } else {
    for (let key in content) {
      alert('Ошибка: ' + content[key])
    }
  }

  setRegis(content);

};

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

  if(content.token) {
    navigation.navigate('Tab')
    storeData(content.token)
  }else {
    for(let key in content) {
      alert('Ошибка: ' + content[key])
    }
  }

  setAuth(content);

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