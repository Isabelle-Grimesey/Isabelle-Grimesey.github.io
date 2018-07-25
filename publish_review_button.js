reviewList = []

function storeData(p1, p2, p3, p4, p5) {
  var dict = {
  title: p1,
  organization: p2,
  location: p3,
  rating: p4,
  description: p5
  };
  reviewList.append(dict);
}
