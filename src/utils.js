export function timestampToDate (timestamp) {
    var a = new Date(timestamp);
    var year = a.getFullYear();
    var month = "0" + (a.getMonth()+1);
    var day = "0" + a.getDate();
    var hour = "0" + a.getHours();
    var min = "0" + a.getMinutes();
    var formatted =
      year +
      "-" +
      month.substr(-2) +
      "-" +
      day.substr(-2) +
      " " +
      hour.substr(-2) +
      ":" +
      min.substr(-2);
    return formatted;
  }

export function clientString (c) {
  if(c) {
    return c.name + ' ' + c.surname + ', ' + c.address;
  }
  return '';
}

export function getClientById(clients, id) {
  return clients.find(c => c.id === id);
}

export function offerShortcode (client) {
  if (client) {
    return client.surname.toLowerCase() + '_' + randString(5)
  } else {
    return '';
  }
}

export function randString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export function saveProduct(products, product) {
  let pIndex = products.findIndex(p => p.id == product.id);
  if(pIndex === -1) {
    products.push(product)
  } else {
    products[pIndex] = product;
  }

}