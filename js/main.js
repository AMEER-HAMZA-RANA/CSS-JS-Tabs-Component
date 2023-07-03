//  Building Tabby (Tab Component)

const tabby = document.querySelector(".tabby");
const tabList = tabby.querySelector(".tabs");
const tabs = [...tabby.querySelectorAll(".tab")];
const tabContents = [...tabby.querySelectorAll(".tab-content")];

// WITHOUT EVENT DELEGATION
// // selecting all tabs to add event listener to each of them.
// tabs.forEach((tab) => {
//   tab.addEventListener("click", (e) => {
//     // selecting right tab content through tab using dataset.
//     const tdataset = tab.dataset.topic;
//     const tabContent = tabby.querySelector("#" + tdataset);
//     // Removing 'is-selected' class from all tabs
//     tabs.forEach((tbr) => {
//       tbr.classList.remove("is-selected");
//     });
//     // Adding 'is-selected' class to clicked tab
//     tab.classList.add("is-selected");
//     // Removing 'is-selected' class from all tabs contents
//     tabContents.forEach((tcr) => {
//       tcr.classList.remove("is-selected");
//     });
//     // Adding 'is-selected' class to clicked tab's corresponding tab content (current tab content)
//     tabContent.classList.add("is-selected");
//   });
// });

// WITH EVENT DELEGATION

// 1-Find the clicked tab
// 2-Find the corresponding tab content
// 3-Remove is-selected from other tabs to de-emphasize them
// 4-Add is-selected to the clicked tab to emphasize it
// 5-Remove is-selected from other tab content to hide them
// 6-Add is-selected to the corresponding tab-content to show it

tabList.addEventListener("click", (e) => {
  const tab = e.target;
  const dataset = tab.dataset.topic;
  const tabContentDataset = "#" + dataset;
  const tabContent = tabby.querySelector(tabContentDataset);
  tabs.forEach((t) => {
    t.classList.remove("is-selected");
  });
  tab.classList.add("is-selected");
  tabContents.forEach((tc) => {
    tc.classList.remove("is-selected");
  });
  tabContent.classList.add("is-selected");
});
