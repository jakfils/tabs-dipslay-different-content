let data = [
  {
    id: 1,
    title: "History",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio perferendis, ducimus perspiciatis magni maxime delectus ratione impedit quam, exercitationem ipsa odit repellat sapiente! Vel, dolorum nobis. Dignissimos, nostrum aperiam. Labore, ea. Repellendus itaque nobis vero dolorum quae maxime nemo distinctio molestias deleniti quia cum et at tempore atque animi sequi accusantium, doloremque mollitia ullam? Natus amet obcaecati error dolore!",
  },
  {
    id: 2,
    title: "Vision",
    content:
      "Mollitia quisquam error placeat necessitatibus enim! Nesciunt ipsum consectetur ipsa eius aspernatur esse placeat veritatis laudantium culpa voluptas illum perspiciatis voluptatum doloremque, exercitationem saepe excepturi nulla quibusdam ipsam nostrum sapiente? Dicta neque molestias, tempora ducimus accusamus at vitae perferendis cupiditate quia? Quae beatae reprehenderit voluptatum fugiat quia ad, laudantium facere commodi, voluptate mollitia vitae odio architecto ullam provident accusantium earum.",
  },
  {
    id: 3,
    title: "Goals",
    content:
      "Consequatur quibusdam, dicta vitae incidunt tenetur est quidem animi et odit dolor culpa possimus. Fuga inventore earum quam praesentium minima molestiae velit omnis, eaque ratione quod fugiat, quidem error rem? Quas voluptates dolorem reprehenderit eum eaque dolores, quo provident impedit quod eligendi voluptatibus. Aut in voluptates animi omnis facilis eligendi sed assumenda perferendis est earum impedit delectus, magni a placeat.",
  },
];

/* F */
let getSiblings = (e) => {
  // for collecting siblings
  let siblings = [];
  // if no parent, return no sibling
  if (!e.parentNode) {
    return siblings;
  }
  // first child of the parent node
  let sibling = e.parentNode.firstChild;

  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

/*Get a Tab Item Id  */
let getTabId = (array, tab) => {
  return array.map((objet) => objet.title).indexOf(tab);
};

//Get all tabs
const tabItems = document.querySelectorAll(".tab-item-title");
// Tab item click
tabItems.forEach((tabItem) => {
  tabItem.addEventListener("click", (e) => {
    tabItem.classList.add("active");
    let siblings = getSiblings(tabItem);
    siblings.forEach((sibling) => {
      sibling.classList.remove("active");
    });

    // Get tab item Id
    let tabItemId = getTabId(data, tabItem.textContent);
    // Change item title and item description content
    document.querySelector(".item-title").textContent = data[tabItemId].title;
    document.querySelector(".item-description").textContent =
      data[tabItemId].content;
  });
});
